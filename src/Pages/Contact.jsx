


// import { useState } from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
//   FaPaperPlane,
//   FaHeadset,
//   FaCheckCircle,
// } from "react-icons/fa";

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSubmitted(true);
//     e.currentTarget.reset();
//   }

//   return (
//     <section className="contact-page">
//       <div className="contact-hero">
//         <span className="contact-eyebrow">WE ARE HERE FOR YOU</span>
//         <h1>Let's Talk About <span>Your Needs.</span></h1>
//         <p>
//           Have questions about our electronics, orders or delivery?
//           Our team is ready to help you.
//         </p>
//       </div>

//       <div className="container contact-content">
//         <div className="contact-details">
//           <div className="contact-intro">
//             <span className="contact-tag">GET IN TOUCH</span>
//             <h2>We'd Love to Hear From You</h2>
//             <p>
//               Reach out to us whenever you need assistance.
//               We are happy to help you find the right product.
//             </p>
//           </div>

//           <div className="contact-card">
//             <div className="contact-icon"><FaPhoneAlt /></div>
//             <div>
//               <h3>Call Us</h3>
//               <p>Add your business phone number</p>
//             </div>
//           </div>

//           <div className="contact-card">
//             <div className="contact-icon"><FaEnvelope /></div>
//             <div>
//               <h3>Email Us</h3>
//               <p>Add your business email address</p>
//             </div>
//           </div>

//           <div className="contact-card">
//             <div className="contact-icon"><FaMapMarkerAlt /></div>
//             <div>
//               <h3>Visit Our Store</h3>
//               <p>Add your shop address, Nepal</p>
//             </div>
//           </div>

//           <div className="contact-card">
//             <div className="contact-icon"><FaClock /></div>
//             <div>
//               <h3>Business Hours</h3>
//               <p>Sunday – Friday | Add opening hours</p>
//             </div>
//           </div>

//           <div className="contact-help">
//             <FaHeadset />
//             <div>
//               <h3>Need Quick Assistance?</h3>
//               <p>Send us your question and we'll be happy to help.</p>
//             </div>
//           </div>
//         </div>

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <span className="contact-tag">SEND US A MESSAGE</span>
//           <h2>How Can We Help?</h2>
//           <p>Fill in the form below. All fields are required.</p>

//           <div className="contact-form-grid">
//             <div className="contact-field">
//               <label>Your Name</label>
//               <input type="text" placeholder="Enter your full name" required />
//             </div>

//             <div className="contact-field">
//               <label>Email Address</label>
//               <input type="email" placeholder="example@email.com" required />
//             </div>
//           </div>

//           <div className="contact-field">
//             <label>Subject</label>
//             <input type="text" placeholder="What is your message about?" required />
//           </div>

//           <div className="contact-field">
//             <label>Your Message</label>
//             <textarea rows={6} placeholder="Write your message here..." required />
//           </div>
//           {submitted && (
//             <div className="success-message">
//               <FaCheckCircle className="success-icon" />
//               <h3>Thank You for Reaching Out!</h3>
//               <p>
//                 Your message has been recorded successfully.
//                 Our team will review your enquiry.
//               </p>
//               <small>
//                 Demo submission — email notifications are not yet enabled.
//               </small>
//             </div>
//           )}

//           <button className="contact-submit" type="submit">
//             Send Message <FaPaperPlane />
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(false);
    setError("");
    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const customerMessage = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customerMessage),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <span className="contact-eyebrow">WE ARE HERE FOR YOU</span>
        <h1>Let's Talk About <span>Your Needs.</span></h1>
        <p>
          Have questions about our electronics, orders or delivery?
          Our team is ready to help you.
        </p>
      </div>

      <div className="container contact-content">
        <div className="contact-details">
          <div className="contact-intro">
            <span className="contact-tag">GET IN TOUCH</span>
            <h2>We'd Love to Hear From You</h2>
            <p>
              Reach out to us whenever you need assistance.
              We are happy to help you find the right product.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <div>
              <h3>Call Us</h3>
              <p>Add your business phone number</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><FaEnvelope /></div>
            <div>
              <h3>Email Us</h3>
              <p>Add your business email address</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div>
              <h3>Visit Our Store</h3>
              <p>Add your shop address, Nepal</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon"><FaClock /></div>
            <div>
              <h3>Business Hours</h3>
              <p>Sunday – Friday | Add opening hours</p>
            </div>
          </div>

          <div className="contact-help">
            <FaHeadset />
            <div>
              <h3>Need Quick Assistance?</h3>
              <p>Send us your question and we'll be happy to help.</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="contact-tag">SEND US A MESSAGE</span>
          <h2>How Can We Help?</h2>
          <p>Fill in the form below. All fields are required.</p>

          <div className="contact-form-grid">
            <div className="contact-field">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="contact-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What is your message about?"
              required
            />
          </div>

          <div className="contact-field">
            <label>Your Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Write your message here..."
              required
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {submitted && (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <h3>Thank You for Reaching Out!</h3>
              <p>
                Your message has been saved successfully.
                Our team will review your enquiry.
              </p>
            </div>
          )}

          <button
            className="contact-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <FaPaperPlane />}
          </button>
        </form>
      </div>
    </section>
  );
}
