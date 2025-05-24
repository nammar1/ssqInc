import express from 'express';
import { Router } from 'express';

const router: Router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Example route' });
});

export default router;
