import express from 'express';
import { renderToHtml } from 'jsxte';
import { Home } from '../views/pages/Home';
import { Login } from '../views/pages/Login';
import { Register } from '../views/pages/Register';
import { Categories } from '../views/pages/Categories';
import { isAuthenticated } from '../middleware/authenticationMiddleware';
import type { User } from '../user';

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  const user = res.locals.user as User;
  const html = renderToHtml(<Home user={user} />);
  res.send(html);
});

export const indexRouter = router;
