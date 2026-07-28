import axios from 'axios';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

interface AssetPrice {
  symbol: string;
  price: number;
  change24h: number;
  timestamp: number;
}

export class PriceService {
  // Fetch cryptocurrency prices from CoinGecko
  static async getCryptoPrices(): Promise<AssetPrice[]> {
    try {
      const response = await axios.get(
        `${COINGECKO_API}/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd&include_24hr_change=true`
      );

      return [
        {
          symbol: 'BTC/USD',
          price: response.data.bitcoin.usd,
          change24h: response.data.bitcoin.usd_24h_change,
          timestamp: Date.now(),
        },
        {
          symbol: 'ETH/USD',
          price: response.data.ethereum.usd,
          change24h: response.data.ethereum.usd_24h_change,
          timestamp: Date.now(),
        },
      ];
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
      return [];
    }
  }

  // Fetch stock prices (requires API key)
  static async getStockPrices(symbols: string[]): Promise<AssetPrice[]> {
    try {
      // Implementation for Finnhub or Polygon API
      // Placeholder for now
      return [];
    } catch (error) {
      console.error('Error fetching stock prices:', error);
      return [];
    }
  }

  // Fetch forex prices (requires API key)
  static async getForexPrices(pairs: string[]): Promise<AssetPrice[]> {
    try {
      // Implementation for Finnhub API
      // Placeholder for now
      return [];
    } catch (error) {
      console.error('Error fetching forex prices:', error);
      return [];
    }
  }
}
