import store from '../data/store.js';

export const getTransactions = async (req, res) => {
    try {
        res.status(200).json(store.transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error: error.message });
    }
};