import express from 'express';
import { renderToHtml } from 'jsxte';
import { Home } from '../views/pages/Home';
import { Login } from '../views/pages/Login';

const router = express.Router();

router.get('/', (req, res) => {
  const html = renderToHtml(<Login />);
  res.send(html);
});

export const indexRouter = router;
