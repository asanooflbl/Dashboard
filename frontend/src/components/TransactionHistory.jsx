import React from 'react';

const statusStyles = {
    success: 'bg-[#00e67622] text-[#00e676]',
    pending: 'bg-[#ffb30022] text-[#ffb300]',
    failed: 'bg-[#ff525222] text-[#ff5252]',
};

const TransactionHistory = ({ transactions = [] }) => {
    return (
        <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold text-xl">Transaction History</h2>
                <span className="text-[#8888aa] cursor-pointer">···</span>
            </div>

            <div className="flex flex-col gap-3">
                {transactions.length === 0 && (
                    <p className="text-[#555570] text-sm text-center py-6">No transactions yet</p>
                )}
                {transactions.map(tx => {
                    const isDeposit = tx.type === 'deposit';
                    const date = new Date(tx.date);
                    return (
                        <div key={tx.id}
                            className="flex items-center justify-between p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#00e67655] transition-colors">
                            <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg ${isDeposit ? 'bg-[#00e67622]' : 'bg-[#ff525222]'}`}>
                                    {isDeposit ? '↓' : '↑'}
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">{tx.description}</p>
                                    <p className="text-[#555570] text-xs">
                                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}, {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-mono text-sm font-bold mb-1 ${isDeposit ? 'text-[#00e676]' : 'text-[#ff5252]'}`}>
                                    {isDeposit ? '+' : '-'}{tx.amount.toLocaleString()} {tx.currency}
                                </p>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyles[tx.status] || statusStyles.pending}`}>
                                    {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TransactionHistory;