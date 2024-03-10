import express from 'express';
import { renderToHtml } from 'jsxte';
import { Home } from '../views/pages/Home';
import { Login } from '../views/pages/Login';
import { Categories } from '../views/pages/Categories';

const router = express.Router();

router.get('/', (req, res) => {
  const html = renderToHtml(<Categories powerOpacity={1} />);
  res.send(html);
});

export const indexRouter = router;
