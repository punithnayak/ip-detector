const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy if deployed behind one (e.g., Heroku, Render)
app.set('trust proxy', true);

// Route to get client IP
app.get('/', (req, res) => {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] || // use if behind proxy
    req.socket?.remoteAddress ||                     // Node 14+
    req.connection?.remoteAddress ||                 // legacy fallback
    'unknown';

  res.send(`Your IP address is: ${ip}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
