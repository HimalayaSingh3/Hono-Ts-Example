import { Hono } from "hono";

const route = new Hono();

// Get Route
route.get("/get-note", (c) => {
  return c.text("Get Route");
});

export default route;
