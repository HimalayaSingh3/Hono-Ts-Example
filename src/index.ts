import { Hono } from "hono";
import notesRoutes from "./routes/NotesRoute"; // Import Notes router

const app = new Hono();

app.route("/notes", notesRoutes); // Merge routes

app.get("/", async (c) => {
  let start = 0;
  for (let i = 0; i <= 100000000; i++) {
    start += i;
  }
  return c.text(start.toString());
});

app.get("/compiler", (c) => {
  return c.text("Compiled");
});

export default app;
