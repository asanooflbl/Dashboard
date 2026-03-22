import express from 'express';
import { getAccounts, addAccount, deleteAccount } from '../controllers/accountsController.js';

const accountRouter = express.Router();

accountRouter.get('/', getAccounts);
accountRouter.post('/add', addAccount);
accountRouter.delete('/delete/:id', deleteAccount);

export default accountRouter;