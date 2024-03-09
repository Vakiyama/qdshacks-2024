import Express from "express";
import session from "express-session";

// import db from "./databaseAccess"

const app = Express();
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/setup", (req, res) => {
  res.send("This is the setup page");
});

app.post("/add/spoon/:id", (req, res) => {});

app.post("/remove/spoon/:id", (req, res) => {});

app.post("/add/category/:id", (req, res) => {});

app.post("/remove/category/:id", (req, res) => {});

app.get("/spoon/history", (req, res) => {});

// app.get("login", (req, res) => {});

// app.post("/login", (req, res) => {});

// app.get("/register", (req, res) => {});

// app.post("/register", (req, res) => {});

// app.get("/logout", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
