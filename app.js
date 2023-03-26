import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const prescription = {
  secretPhrase: '990-ahr-uw72',
  userId: '1',
  medicine1: 'Combiflam',
  dose1: '1-0-0',
  strength1: '500mg',
  duration1: '3 days',
  medicine2: 'Althrocin',
  dose2: '1-0-1',
  strength2: '250mg',
  duration2: '3 days',
};

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to getPrescriptions' });
});

app.get('/api/secret', async (req, res) => {
  try {
    res.status(200).json({ secretPhrase: prescription.secretPhrase });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/prescription', async (req, res) => {
  try {
    res.status(200).json({ prescription });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
