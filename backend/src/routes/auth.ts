import express from 'express';
import { Pool } from 'pg';
import { OAuth2Client } from 'google-auth-library';

const router = express.Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT || 5432),
});

router.post('/google', async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ error: 'ID Token is required' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload || payload.hd !== 'nmamit.in') {
      return res.status(403).json({ error: 'Unauthorized domain' });
    }

    const email = payload.email;

    if (!email) {
      return res.status(400).json({ error: 'Email not found in token' });
    }

    const queryResult = await pool.query('SELECT 1 FROM students WHERE email = $1', [email]);
    if (queryResult.rowCount === 0) {
      return res.status(401).json({ error: 'Access denied: email not in authorized list.' });
    }

    res.json({ message: 'Access granted', email, name: payload.name });
  } catch (error) {
    console.error('Google token verification or DB error:', error);
    res.status(401).json({ error: 'Invalid token or server error' });
  }
});

export default router;
