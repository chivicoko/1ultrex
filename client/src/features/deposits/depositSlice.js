import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import depositService from './depositService';


// Get user from localStorage
// const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    deposits: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new deposit
export const createDeposit = createAsyncThunk('deposits/create', async (depositData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await depositService.createDeposit(depositData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get user deposits
export const getDeposits = createAsyncThunk('deposits/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await depositService.getDeposits(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Delete user deposit
export const deleteDeposit = createAsyncThunk('deposits/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await depositService.deleteDeposit(id, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const depositSlice = createSlice({
    name: 'deposit',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createDeposit.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createDeposit.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.deposits.push(action.payload)
        })
        .addCase(createDeposit.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDeposits.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getDeposits.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.deposits = action.payload
        })
        .addCase(getDeposits.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteDeposit.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteDeposit.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.deposits = state.deposits.filter((deposit) => deposit._id !== action.payload.id)
        })
        .addCase(deleteDeposit.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = depositSlice.actions;
export default depositSlice.reducer;