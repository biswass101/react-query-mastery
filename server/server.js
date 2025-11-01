import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors({
  origin: "*",
}));
app.use(express.json());

// --- MongoDB Connection ---
mongoose
  .connect("mongodb://localhost:27017/todoapp")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Todo Schema ---
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

// --- Routes ---
// Get all todos
app.get("/api/todos", async (req, res) => {
  try {
    console.log("Fetching all todos");
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// Create todo
app.post("/api/todos", async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update todo
app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete todo
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ Todo API is running...");
});

// --- Start Server ---
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
