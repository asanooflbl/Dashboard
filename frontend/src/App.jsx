import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TotalBalance from './components/TotalBalance';
import WalletChart from './components/WalletChart';
import BankAccounts from './components/BankAccounts';
import WalletAccounts from './components/WalletAccounts';
import TransactionHistory from './components/TransactionHistory';
import DepositModal from './components/modals/DepositModal';
import WithdrawModal from './components/modals/WithdrawModal';
import AddAccountModal from './components/modals/AddAccountModal';
import { fetchSummary, fetchWallets, fetchChartData, fetchAccounts, fetchTransactions, depositToWallet, withdrawFromWallet, addAccount } from './api/walletAPI';

const App = () => {

    const [summary, setSummary] = useState(null);
    const [wallets, setWallets] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const [showDeposit, setShowDeposit] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);
    const [showAddAccount, setShowAddAccount] = useState(false);

    const loadData = async () => {
        try {
            const [summaryRes, walletsRes, chartRes, accountsRes, transactionsRes] = await Promise.all([
                fetchSummary(),
                fetchWallets(),
                fetchChartData(),
                fetchAccounts(),
                fetchTransactions()
            ]);
            setSummary(summaryRes);
            setWallets(walletsRes);
            setChartData(chartRes);
            setAccounts(accountsRes);
            setTransactions(transactionsRes);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDeposit = async (data) => {
        try {
            await depositToWallet(data);
            await loadData();
        } catch (error) {
            console.error('Error depositing:', error);
            throw error;
        }
    };

    const handleWithdraw = async (data) => {
        try {
            await withdrawFromWallet(data);
            await loadData();
        } catch (error) {
            console.error('Error withdrawing:', error);
            throw error;
        }
    };

    const handleAddAccount = async (data) => {
        try {
            await addAccount(data);
            await loadData();
        } catch (error) {
            console.error('Error adding account:', error);
            throw error;
        }
    };

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Left Column */}
                <div className="flex flex-col gap-4">
                    <TotalBalance
                        summary={summary}
                        onDeposit={() => setShowDeposit(true)}
                        onWithdraw={() => setShowWithdraw(true)}
                        onAddAccount={() => setShowAddAccount(true)}
                    />
                    <BankAccounts accounts={accounts} onAdd={() => setShowAddAccount(true)} />
                    <WalletAccounts wallets={wallets} />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                    <WalletChart data={chartData} />
                    <TransactionHistory transactions={transactions} />
                </div>

            </div>

            {showDeposit && (
                <DepositModal wallets={wallets} onClose={() => setShowDeposit(false)} onDeposit={handleDeposit} />
            )}
            {showWithdraw && (
                <WithdrawModal wallets={wallets} onClose={() => setShowWithdraw(false)} onWithdraw={handleWithdraw} />
            )}
            {showAddAccount && (
                <AddAccountModal onClose={() => setShowAddAccount(false)} onAdd={handleAddAccount} />
            )}
        </div>
    );
};

export default App;