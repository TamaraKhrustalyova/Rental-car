import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://656f1c0c6529ec1c62375a78.mockapi.io/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAdverts = state => state.adverts;

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    advertsList: [],
    isLoading: false, 
    error: null,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchAdverts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.advertsList = action.payload;
      state.error = null;
    })
    .addCase(fetchAdverts.rejected, (state, action) => {
    state.isLoading = 'false';
    state.error = action.payload;
    })
  }
});

export default advertsSlice.reducer;
