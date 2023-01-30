import express from "express";

const app = express();

// Tell express to parse the request body as JSON
// Without this, req.body will be undefined
// * THIS MIDDLEWARE MUST BE BEFORE THE ROUTES

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.post("/api/studentRoutes", (req, response) => {
  console.log(req.body);
  response.send("ok");
});

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
