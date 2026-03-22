import React from 'react';

const colors = ['#4d79ff', '#00e676', '#ffb300', '#aa00ff'];

const WalletAccounts = ({ wallets = [] }) => {
    return (
        <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold text-xl">Wallet Accounts</h2>
                <span className="text-[#8888aa] cursor-pointer">···</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {wallets.map((wallet, i) => (
                    <div key={wallet.id}
                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-3 hover:border-[#00e67655] transition-all hover:-translate-y-1 cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[#8888aa] text-sm">{wallet.name}</p>
                            <span className="text-[#555570] text-xs">⋮</span>
                        </div>
                        <p className="text-white font-bold text-2xl mb-1">
                            {wallet.balance.toLocaleString()}
                        </p>
                        <p className="text-[#00e676] text-xs">{wallet.change}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletAccounts;