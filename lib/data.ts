import portfolioData from '@/data/portfolio.json';
import { PortfolioData } from './types';

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}

