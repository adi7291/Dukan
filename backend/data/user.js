import bcrypt from "bcryptjs";

const users = [
  {
    password: bcrypt.hashSync("123456", 10),
    email: "admin@email.com",
    name: "Admin User",
    isAdmin: true,
  },
  {
    password: bcrypt.hashSync("123456", 10),
    email: "anil@email.com",
    name: "Anil",
    isAdmin: false,
  },
  {
    password: bcrypt.hashSync("123456", 10),
    email: "ramesh@email.com",
    name: "Ramesh",
    isAdmin: false,
  },
];

export default users;
