import React from 'react';

const colors = ['#4d79ff', '#00e676', '#ffb300', '#ff5252', '#aa00ff'];

const BankAccounts = ({ accounts = [], onAdd }) => {
    return (
        <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold text-xl">Associated Bank Accounts</h2>
                <button onClick={onAdd} className="text-[#8888aa] hover:text-white transition-colors">···</button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {accounts.map((acc, i) => (
                    <div key={acc.id}
                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-3 hover:border-[#00e67655] transition-colors cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[#8888aa] text-sm">{acc.bankName}</p>
                            <span className="text-[#555570] text-xs">⋮</span>
                        </div>
                        <p className="text-white font-bold text-2xl mb-1">
                            {acc.balance >= 1000000
                                ? `${(acc.balance / 1000000).toFixed(0)}M`
                                : acc.balance.toLocaleString()}
                        </p>
                        <p className="text-[#00e676] text-xs">{acc.change}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BankAccounts;