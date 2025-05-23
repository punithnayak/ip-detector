const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy if deployed behind one (e.g., Heroku, Render)
app.set('trust proxy', true);

// Route to get client IP as JSON
app.get('/', (req, res) => {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    req.connection?.remoteAddress ||
    'unknown';

  res.json({ ip });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
