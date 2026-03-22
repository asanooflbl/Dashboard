import express from 'express';
import { getTransactions } from '../controllers/transactionsController.js';

const transactionRouter = express.Router();

transactionRouter.get('/', getTransactions);

export default transactionRouter;