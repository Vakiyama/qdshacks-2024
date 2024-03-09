import express from 'express';
import { renderToHtml } from 'jsxte';
import { Home } from '../../views/pages/Home';

const router = express.Router();

router.get('/', (req, res) => {
  const html = renderToHtml(
    <Home>
      <p>"Hello QDS"</p>
    </Home>
  );
  res.send(html);
});

export const indexRouter = router;
