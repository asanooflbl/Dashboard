import React, { useState } from 'react';

const AddAccountModal = ({ onClose, onAdd }) => {

    const [bankName, setBankName] = useState('');
    const [balance, setBalance] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            if (!bankName.trim()) {
                return setError('Bank name is required.');
            }
            setLoading(true);
            await onAdd({ bankName: bankName.trim(), balance: Number(balance) || 0, currency });
            onClose();
        } catch (e) {
            setError('Failed to add account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}>
            <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-7 w-full max-w-md"
                onClick={e => e.stopPropagation()}>

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white font-bold text-lg">Add New Bank Account</h2>
                    <button onClick={onClose} className="text-[#8888aa] hover:text-white text-2xl">×</button>
                </div>

                <label className="text-[#8888aa] text-xs uppercase tracking-wider mb-2 block">Bank Name</label>
                <input type="text" value={bankName} onChange={e => setBankName(e.target.value)}
                    placeholder="e.g. HDFC Bank"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm mb-4 focus:outline-none focus:border-[#00e676]" />

                <label className="text-[#8888aa] text-xs uppercase tracking-wider mb-2 block">Initial Balance</label>
                <input type="number" value={balance} onChange={e => setBalance(e.target.value)}
                    placeholder="e.g. 10000"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm mb-4 focus:outline-none focus:border-[#00e676]" />

                <label className="text-[#8888aa] text-xs uppercase tracking-wider mb-2 block">Currency</label>
                <select value={currency} onChange={e => setCurrency(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm mb-6 focus:outline-none focus:border-[#00e676]">
                    {['USD', 'EUR', 'GBP', 'INR'].map(c => <option key={c}>{c}</option>)}
                </select>

                {error && <p className="text-[#ff5252] text-sm mb-4">{error}</p>}

                <button onClick={handleSubmit} disabled={loading}
                    className="w-full bg-[#00e676] text-black font-bold py-3 rounded-lg hover:opacity-80 disabled:opacity-50">
                    {loading ? 'Adding...' : 'Add Account'}
                </button>
            </div>
        </div>
    );
};

export default AddAccountModal;