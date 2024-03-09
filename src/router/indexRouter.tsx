import express from 'express';
import { renderToHtml } from 'jsxte';
import { Home } from '../views/pages/Home';
import { Login } from '../views/pages/Login';
import { Register } from '../views/pages/Register';

const router = express.Router();

router.get('/', (req, res) => {
  const html = renderToHtml(<Register />);
  res.send(html);
});

export const indexRouter = router;
