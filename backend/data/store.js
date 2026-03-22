const store = {
  wallets: [
    { id: 'wallet-a', name: 'Wallet A', balance: 10000, currency: 'USD', change: '+125 since last hour' },
    { id: 'wallet-b', name: 'Wallet B', balance: 5000, currency: 'USD', change: '+125 since last hour' },
    { id: 'wallet-c', name: 'Wallet C', balance: 5000, currency: 'USD', change: '+125 since last hour' },
  ],
  bankAccounts: [
    { id: 'bank-a', bankName: 'Citi Bank', balance: 5000000, currency: 'USD', change: '+125 since last hour' },
    { id: 'bank-b', bankName: 'Barclays Bank', balance: 120353, currency: 'USD', change: '+125 since last hour' },
    { id: 'bank-c', bankName: 'Axis Bank', balance: 110353, currency: 'USD', change: '+125 since last hour' },
    { id: 'bank-d', bankName: 'Barclays Bank', balance: 110353, currency: 'USD', change: '+1322 since last hour' },
  ],
  transactions: [
    { id: 'tx-1', type: 'deposit', walletName: 'Wallet A', amount: 21282, currency: 'GBP', status: 'success', description: 'Added to Wallet A', date: '2025-05-22T18:37:00Z' },
    { id: 'tx-2', type: 'withdrawal', walletName: 'Wallet A', amount: 15750, currency: 'USD', status: 'success', description: 'Withdrawn', date: '2025-06-12T18:57:00Z' },
    { id: 'tx-3', type: 'deposit', walletName: 'Wallet B', amount: 7500, currency: 'EUR', status: 'success', description: 'Added to Wallet B', date: '2025-07-03T11:45:00Z' },
    { id: 'tx-4', type: 'withdrawal', walletName: 'Wallet B', amount: 3200, currency: 'USD', status: 'pending', description: 'Withdrawn', date: '2025-07-10T09:15:00Z' },
  ],
  summary: {
    totalBalance: 45231.89,
    referral: 2362,
    bonus: 2362,
    currency: 'USD',
    changePercent: '+20.1% from last month'
  },
  chartData: [
    { month: 'Apr 9', value: 8000 }, { month: '', value: 12000 },
    { month: '', value: 10000 }, { month: '', value: 15000 },
    { month: '', value: 13000 }, { month: 'Apr 19', value: 20000 },
    { month: '', value: 17000 }, { month: '', value: 22000 },
    { month: '', value: 19000 }, { month: '', value: 25000 },
    { month: 'Apr 29', value: 22000 }, { month: '', value: 28000 },
    { month: '', value: 24000 }, { month: '', value: 30000 },
    { month: '', value: 27000 }, { month: 'May 9', value: 32000 },
    { month: '', value: 29000 }, { month: '', value: 35000 },
    { month: '', value: 31000 }, { month: '', value: 37000 },
    { month: 'May 19', value: 34000 }, { month: '', value: 38000 },
    { month: '', value: 35000 }, { month: '', value: 40000 },
    { month: '', value: 37000 }, { month: 'May 30', value: 42000 },
    { month: '', value: 38000 }, { month: '', value: 43000 },
    { month: '', value: 40000 }, { month: '', value: 44000 },
    { month: 'Jun 9', value: 41000 }, { month: '', value: 43000 },
    { month: '', value: 40000 }, { month: '', value: 44000 },
    { month: '', value: 42000 }, { month: 'Jun 19', value: 45000 },
    { month: '', value: 43000 }, { month: '', value: 44000 },
    { month: '', value: 43000 }, { month: '', value: 44000 },
    { month: 'Jun 30', value: 45231 },
  ]
};

export default store;