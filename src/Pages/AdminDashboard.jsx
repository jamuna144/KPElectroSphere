
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const token = sessionStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/messages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load messages.");
      }

      setMessages(data.messages || []);
    } catch (err) {
      setError(err.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  async function handleReply(e) {
    e.preventDefault();

    if (!selectedMessage || !reply.trim()) {
      setError("Please write a reply first.");
      return;
    }

    setSending(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/messages/${selectedMessage._id}/reply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ reply }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to save reply.");
      }

      setNotice("Reply saved successfully!");
      setReply("");

      await fetchMessages();

      const updatedMessage = data.data;
      setSelectedMessage(updatedMessage);
    } catch (err) {
      setError(err.message || "Unable to save reply.");
    } finally {
      setSending(false);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div>
          <h1>KP Electronics</h1>
          <p>Admin Dashboard</p>
        </div>

        <button onClick={handleLogout} className="admin-logout">
          Logout
        </button>
      </header>

      <section className="admin-welcome">
        <h2>Welcome, Admin!</h2>
        <p>Manage customer enquiries and messages.</p>
      </section>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>{messages.length}</h3>
          <p>Total Messages</p>
        </div>

        <div className="admin-stat-card">
          <h3>
            {messages.filter((msg) => msg.status === "New").length}
          </h3>
          <p>New Messages</p>
        </div>

        <div className="admin-stat-card">
          <h3>
            {messages.filter((msg) => msg.status === "Replied").length}
          </h3>
          <p>Replied Messages</p>
        </div>
      </div>

      {error && <p className="admin-error">{error}</p>}
      {notice && <p className="admin-success">{notice}</p>}

      <section className="admin-messages-section">
        <div className="admin-message-list">
          <div className="admin-section-heading">
            <h2>Customer Messages</h2>
            <button onClick={fetchMessages}>Refresh</button>
          </div>

          {loading ? (
            <p>Loading messages...</p>
          ) : messages.length === 0 ? (
            <p>No customer messages found.</p>
          ) : (
            messages.map((msg) => (
              <button
                key={msg._id}
                className={`admin-message-item ${
                  selectedMessage?._id === msg._id ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedMessage(msg);
                  setReply("");
                  setError("");
                  setNotice("");
                }}
              >
                <strong>{msg.name}</strong>
                <span>{msg.subject}</span>
                <small>{msg.email}</small>
                <span className={`message-status ${msg.status?.toLowerCase()}`}>
                  {msg.status}
                </span>
              </button>
            ))
          )}
        </div>

        <div className="admin-message-details">
          {selectedMessage ? (
            <>
              <h2>Message Details</h2>

              <p><strong>Name:</strong> {selectedMessage.name}</p>
              <p><strong>Email:</strong> {selectedMessage.email}</p>
              <p><strong>Subject:</strong> {selectedMessage.subject}</p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedMessage.createdAt).toLocaleString()}
              </p>

              <div className="admin-original-message">
                <strong>Customer Message</strong>
                <p>{selectedMessage.message}</p>
              </div>

              {selectedMessage.replies?.length > 0 && (
                <div className="admin-replies">
                  <h3>Saved Replies</h3>
                  {selectedMessage.replies.map((item, index) => (
                    <div key={index} className="admin-reply-item">
                      <p>{item.message}</p>
                      <small>
                        {new Date(item.repliedAt).toLocaleString()}
                      </small>
                    </div>
                  ))}
                </div>
              )}

              <form onSubmit={handleReply} className="admin-reply-form">
                <label>Write a Reply</label>

                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Write your response to the customer..."
                  rows="5"
                  required
                />

                <button type="submit" disabled={sending}>
                  {sending ? "Saving..." : "Save Reply"}
                </button>
              </form>
            </>
          ) : (
            <div className="admin-empty-details">
              <h2>Select a Customer Message</h2>
              <p>Choose a message from the list to view its details.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
