
const bcrypt = require("bcryptjs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your new admin password: ", async (password) => {
  if (!password || password.length < 8) {
    console.log("Password must be at least 8 characters.");
    rl.close();
    return;
  }

  const hash = await bcrypt.hash(password, 12);

  console.log("\nYour admin password hash:\n");
  console.log(hash);

  rl.close();
});
