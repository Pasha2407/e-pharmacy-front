import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const productsThunk = createAsyncThunk('/products',
    async ({ fieldName = '', page = 1, limit = 5 }, thunkApi) => {
        const params = {
            fieldName,
            page,
            limit,
        };
        try {
            const { data } = await instance.get('/products', { params });
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    })