const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); 
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
const ShortUrlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrlId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  count: { type: Number, default: 0 },
});

const ShortUrl = mongoose.model('ShortUrl', ShortUrlSchema);
app.post('/api/create-short-url', async (req, res) => {
  const { longurl } = req.body;
  try {
    if (!longurl.match(/^(http:\/\/|https:\/\/)/)) {
      return res.status(400).json({ error: 'Enter a valid URL' });
    }
    let url = await ShortUrl.findOne({ longUrl: longurl });

    if (url) {
      console.log(url);
      return res.json({ status: 'ok', shortUrlId: url.shortUrlId });
    }
    let uniqueID = Math.random().toString(36).substr(2, 8);

    url = new ShortUrl({
      longUrl: longurl,
      shortUrlId: uniqueID,
    });

    await url.save();
    res.json({ status: 'ok', shortUrlId: uniqueID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/get-all-short-urls', async (req, res) => {
  try {
    const urls = await ShortUrl.find();
    res.json(urls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/:shorturlid', async (req, res) => {
  const { shorturlid } = req.params;
  try {
    const url = await ShortUrl.findOne({ shortUrlId: shorturlid });

    if (!url) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    
    url.count++;
    await url.save();


    res.redirect(url.longUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
