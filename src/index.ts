import express from "express";
import session from "express-session";
import { indexRouter } from "./router/indexRouter";
import bodyParser from "body-parser";
import connectLiveReload from "connect-livereload";
import path from "node:path";
import liveReload from "livereload";
import { dirname } from "path";
import { fileURLToPath } from "url";
import authRouter from "./router/authenticationRouter.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// import db from "./databaseAccess"

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(connectLiveReload());

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
const liveReloadServer = liveReload.createServer();
liveReloadServer.watch(path.join(__dirname));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(indexRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
