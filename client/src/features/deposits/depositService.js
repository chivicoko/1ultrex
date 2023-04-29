import axios from "axios";

const API_URL = '/api/deposits/';

// Create new deposits
const createDeposit = async (depositData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, depositData, config);

    console.log(response.data);
    return response.data;
}

// Get user deposits
const getDeposits = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config);
    
    return response.data;
}

// Delete use deposit
const deleteDeposit = async (depositId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + depositId, config);
    
    return response.data;
} 

const depositService = { createDeposit, getDeposits, deleteDeposit };

export default depositService;
