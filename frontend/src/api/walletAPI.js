import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export async function fetchSummary() {
    try {
        const response = await API.get('/wallet/summary');
        return response.data;
    } catch (error) {
        console.error("Error fetching summary:", error);
        throw error;
    }
}

export async function fetchWallets() {
    try {
        const response = await API.get('/wallet/wallets');
        return response.data;
    } catch (error) {
        console.error("Error fetching wallets:", error);
        throw error;
    }
}

export async function fetchChartData() {
    try {
        const response = await API.get('/wallet/chart');
        return response.data;
    } catch (error) {
        console.error("Error fetching chart data:", error);
        throw error;
    }
}

export async function depositToWallet(data) {
    try {
        const response = await API.post('/wallet/deposit', data);
        return response.data;
    } catch (error) {
        console.error("Error depositing:", error);
        throw error;
    }
}

export async function withdrawFromWallet(data) {
    try {
        const response = await API.post('/wallet/withdraw', data);
        return response.data;
    } catch (error) {
        console.error("Error withdrawing:", error);
        throw error;
    }
}

export async function fetchAccounts() {
    try {
        const response = await API.get('/accounts');
        return response.data;
    } catch (error) {
        console.error("Error fetching accounts:", error);
        throw error;
    }
}

export async function addAccount(data) {
    try {
        const response = await API.post('/accounts/add', data);
        return response.data;
    } catch (error) {
        console.error("Error adding account:", error);
        throw error;
    }
}

export async function deleteAccount(id) {
    try {
        const response = await API.delete(`/accounts/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting account:", error);
        throw error;
    }
}

export async function fetchTransactions() {
    try {
        const response = await API.get('/transactions');
        return response.data;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
}

export default API;