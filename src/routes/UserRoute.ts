import { Hono } from "hono";
import User from "../models/User";

const route = new Hono();

// Register Route
route.post("/register", async (c) => {
  try {
    const { username, email, password } = await c.req.json();

    if (!username || !email || !password) {
      return c.json({ message: "All Fields are Required" }, 400);
    }

    if (username.length < 5) {
      return c.json({ message: "Username must be 5 Characters Long" }, 400);
    }

    if (password.length < 8) {
      return c.json({ message: "Password must be 8 Characters Long" }, 400);
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    return c.json({ message: "User Registered Successfully!" });
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});
