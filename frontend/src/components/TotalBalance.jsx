import React from 'react';

const TotalBalance = ({ summary, onDeposit, onWithdraw, onAddAccount }) => {
    return (
        <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6">

            <p className="text-[#8888aa] text-sm mb-2">Total Balance</p>

            <h1 className="text-7xl font-bold text-[#00e676] mb-1">
                ${summary?.totalBalance?.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '0.00'}
            </h1>

            <p className="text-[#00e676] text-sm mb-6">{summary?.changePercent || '+0% from last month'}</p>

            <div className="flex gap-4 flex-wrap mb-6">
                <button
                    onClick={onDeposit}
                    className="border border-white text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all">
                    Add to wallet
                </button>
                <button
                    onClick={onWithdraw}
                    className="border border-white text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all">
                    Withdraw
                </button>
                <button
                    onClick={onAddAccount}
                    className="border border-white text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all">
                    Add New Account
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <p className="text-[#8888aa] text-xs mb-2">Referral</p>
                    <p className="text-white font-bold text-2xl">{summary?.referral?.toLocaleString() || 0} <span className="text-xs text-[#8888aa] font-sans">USD</span></p>
                    <p className="text-[#00e676] text-xs mt-1">+20.1% from last month</p>
                </div>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <p className="text-[#8888aa] text-xs mb-2">Bonus</p>
                    <p className="text-white font-bold text-2xl">{summary?.bonus?.toLocaleString() || 0} <span className="text-xs text-[#8888aa] font-sans">USD</span></p>
                    <p className="text-[#00e676] text-xs mt-1">+20.1% from last month</p>
                </div>
            </div>
        </div>
    );
};

export default TotalBalance;