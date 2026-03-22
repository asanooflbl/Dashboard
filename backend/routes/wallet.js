import express from 'express';
import { getSummary, getWallets, getChartData, deposit, withdraw } from '../controllers/walletController.js';

const walletRouter = express.Router();

walletRouter.get('/summary', getSummary);
walletRouter.get('/wallets', getWallets);
walletRouter.get('/chart', getChartData);
walletRouter.post('/deposit', deposit);
walletRouter.post('/withdraw', withdraw);

export default walletRouter;