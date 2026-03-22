import express from 'express';
import cors from 'cors';
import walletRoutes from './routes/wallet.js';
import accountRoutes from './routes/accounts.js';
import transactionRoutes from './routes/transactions.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Wallet Dashboard API is running!'));
app.use('/api/wallet', walletRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port:${PORT}`));

export default app;