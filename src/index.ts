import express from 'express';
import session from 'express-session';
import { indexRouter } from './router/indexRouter';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

// import db from "./databaseAccess"

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
