const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

async function getNumbersFromUrl(url) 
{
  try {
    const res = await axios.get(url);
    if (res.status === 200 && res.data.numbers && Array.isArray(res.data.numbers)) {
      return res.data.numbers;
    }
  } catch (error) {
    console.error(`Error fetching numbers from URL ${url}:`, error.message);
  }
  return null;
}

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || urls.length === 0) {
    return res.status(400).json({ error: 'No URLs provided.' });
  }

  const allNumbers = [];
  for (const url of urls) {
    const numbers = await getNumbersFromUrl(url);
    if (numbers) {
      allNumbers.push(...numbers);
    }
  }

  res.json({ numbers: allNumbers });
});

app.listen(port, () => {
  console.log(`number management service is running on port ${port}`);
});
