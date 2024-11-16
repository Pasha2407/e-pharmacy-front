import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
});

const setToken = token => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post('/user/login', formData);
            setToken(data.token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            await instance.get('/user/logout');
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const currentThunk = createAsyncThunk(
    'auth/current',
    async (_, thunkApi) => {
        try {
            const state = thunkApi.getState();
            const token = state.auth.token;
            setToken(token);
            const { data } = await instance.get('/user/user-info');

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, thunkApi) => {
            const state = thunkApi.getState();
            const token = state.auth.token;
            if (!token) return false;
            else return true;
        },
    }
);

