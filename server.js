const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = process.env.PORT || 3000;

app.set('trust proxy', true);

app.use(cors());

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
