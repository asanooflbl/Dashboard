import { v4 as uuidv4 } from 'uuid';
import store from '../data/store.js';

export const getSummary = async (req, res) => {
    try {
        res.status(200).json(store.summary);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching summary', error: error.message });
    }
};

export const getWallets = async (req, res) => {
    try {
        res.status(200).json(store.wallets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wallets', error: error.message });
    }
};

export const getChartData = async (req, res) => {
    try {
        res.status(200).json(store.chartData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching chart data', error: error.message });
    }
};

export const deposit = async (req, res) => {
    try {
        const { walletId, amount, currency } = req.body;

        if (!walletId || !amount) {
            return res.status(400).json({ message: 'Wallet ID and amount are required' });
        }

        const wallet = store.wallets.find(w => w.id === walletId);
        if (!wallet) return res.status(404).json({ message: 'Wallet not found' });

        wallet.balance += Number(amount);
        store.summary.totalBalance += Number(amount);

        const transaction = {
            id: uuidv4(), type: 'deposit',
            walletName: wallet.name, amount: Number(amount),
            currency: currency || 'USD', status: 'success',
            description: `Added to ${wallet.name}`,
            date: new Date().toISOString()
        };
        store.transactions.unshift(transaction);

        res.status(201).json({ message: 'Deposit successful', data: { wallet, transaction } });
    } catch (error) {
        res.status(500).json({ message: 'Error processing deposit', error: error.message });
    }
};

export const withdraw = async (req, res) => {
    try {
        const { walletId, amount, currency } = req.body;

        if (!walletId || !amount) {
            return res.status(400).json({ message: 'Wallet ID and amount are required' });
        }

        const wallet = store.wallets.find(w => w.id === walletId);
        if (!wallet) return res.status(404).json({ message: 'Wallet not found' });

        if (wallet.balance < Number(amount)) {
            return res.status(400).json({ message: 'Insufficient balance' });
        }

        wallet.balance -= Number(amount);
        store.summary.totalBalance -= Number(amount);

        const transaction = {
            id: uuidv4(), type: 'withdrawal',
            walletName: wallet.name, amount: Number(amount),
            currency: currency || 'USD', status: 'success',
            description: 'Withdrawn', date: new Date().toISOString()
        };
        store.transactions.unshift(transaction);

        res.status(200).json({ message: 'Withdrawal successful', data: { wallet, transaction } });
    } catch (error) {
        res.status(500).json({ message: 'Error processing withdrawal', error: error.message });
    }
};