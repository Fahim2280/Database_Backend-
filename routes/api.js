
import { Router } from "express";
const router = Router();
import { all, run } from "../database/db";

// Get all users
router.get("/users", (req, res) => {
  all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Add a new user
router.post("/users", (req, res) => {
  const { name, email } = req.body;
  run(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID, name, email });
      }
    }
  );
});

// Delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  run("DELETE FROM users WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "User deleted successfully" });
    }
  });
});

export default router;
