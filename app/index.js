import express from "express";

const app = express();

app.get("/api/students", (_, res) => {});

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
