require("dotenv").config();
const bcrypt = require("bcryptjs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your admin password: ", async (password) => {
  const hash = process.env.ADMIN_PASSWORD_HASH;

  console.log("Hash loaded:", Boolean(hash));

  const result = await bcrypt.compare(password, hash || "");

  console.log("Password matches hash:", result);

  rl.close();
});