import express from 'express';
import { PriceService } from '../services/priceService';

const router = express.Router();

// Get crypto prices
router.get('/crypto', async (req, res) => {
  try {
    const prices = await PriceService.getCryptoPrices();
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crypto prices' });
  }
});

// Get all prices
router.get('/all', async (req, res) => {
  try {
    const cryptoPrices = await PriceService.getCryptoPrices();
    res.json({
      crypto: cryptoPrices,
      stocks: [],
      forex: [],
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
});

export default router;
