import express from "express";
import userRoutes from "./routes/users.route.js";
import connectDB from "./lib/db.js";


const app = express();
app.use(express.json());

const PORT = 3000;


connectDB();


app.get("/", (req, res) => {
  res.json("User Management API is running");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
