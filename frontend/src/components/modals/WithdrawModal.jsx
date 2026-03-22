import React, { useState } from 'react';

const WithdrawModal = ({ wallets, onClose, onWithdraw }) => {

    const [walletId, setWalletId] = useState(wallets[0]?.id || '');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const selectedWallet = wallets.find(w => w.id === walletId);

    const handleSubmit = async () => {
        try {
            if (!walletId || !amount || Number(amount) <= 0) {
                return setError('Please select a wallet and enter a valid amount.');
            }
            if (selectedWallet && Number(amount) > selectedWallet.balance) {
                return setError('Insufficient balance in selected wallet.');
            }
            setLoading(true);
            await onWithdraw({ walletId, amount: Number(amount), currency });
            onClose();
        } catch (e) {
            setError(e?.response?.data?.message || 'Withdrawal failed. Please try again.');
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
                    <h2 className="text-white font-bold text-lg">Withdraw Funds</h2>
                    <button onClick={onClose} className="text-[#8888aa] hover:text-white text-2xl">×</button>
                </div>

                <label className="text-[#8888aa] text-xs uppercase tracking-wider mb-2 block">Select Wallet</label>
                <select value={walletId} onChange={e => setWalletId(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm mb-2 focus:outline-none focus:border-[#00e676]">
                    {wallets.map(w => (
                        <option key={w.id} value={w.id}>{w.name} (${w.balance.toLocaleString()})</option>
                    ))}
                </select>

                {selectedWallet && (
                    <p className="text-[#00e676] text-xs mb-4">
                        Available: ${selectedWallet.balance.toLocaleString()}
                    </p>
                )}

                <label className="text-[#8888aa] text-xs uppercase tracking-wider mb-2 block">Amount</label>
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
                    placeholder="Enter amount to withdraw"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm mb-4 focus:outline-none focus:border-[#00e676]" />

                <label className="text-[#8888aa] text-xs uppercase tracking-wider mb-2 block">Currency</label>
                <select value={currency} onChange={e => setCurrency(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm mb-6 focus:outline-none focus:border-[#00e676]">
                    {['USD', 'EUR', 'GBP', 'INR'].map(c => <option key={c}>{c}</option>)}
                </select>

                {error && <p className="text-[#ff5252] text-sm mb-4">{error}</p>}

                <button onClick={handleSubmit} disabled={loading}
                    className="w-full bg-[#00e676] text-black font-bold py-3 rounded-lg hover:opacity-80 disabled:opacity-50">
                    {loading ? 'Processing...' : 'Withdraw Now'}
                </button>
            </div>
        </div>
    );
};

export default WithdrawModal;