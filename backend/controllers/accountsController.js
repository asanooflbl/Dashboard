import store from '../data/store.js';

let accCounter = 5;

export const getAccounts = async (req, res) => {
    try {
        res.status(200).json(store.bankAccounts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching accounts', error: error.message });
    }
};

export const addAccount = async (req, res) => {
    try {
        const { bankName, balance, currency } = req.body;

        if (!bankName) {
            return res.status(400).json({ message: 'Bank name is required' });
        }

        const newAccount = {
            id: `bank-${accCounter++}`,
            bankName,
            balance: Number(balance) || 0,
            currency: currency || 'USD',
            change: '+0 since last hour'
        };

        store.bankAccounts.push(newAccount);
        res.status(201).json({ message: 'Account added successfully', data: newAccount });
    } catch (error) {
        res.status(500).json({ message: 'Error adding account', error: error.message });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Account ID is required' });
        }

        const index = store.bankAccounts.findIndex(a => a.id === id);
        if (index === -1) {
            return res.status(404).json({ message: 'Account not found' });
        }

        store.bankAccounts.splice(index, 1);
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting account', error: error.message });
    }
};
