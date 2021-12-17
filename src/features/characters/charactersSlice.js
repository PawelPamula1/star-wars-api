import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import characterApi from '../../api/characterApi';

export const fetchAsyncCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async () => {
  const response = await characterApi.get(`/people/`).catch((err) => {
    console.log('Err :', err);
  });
  console.log(response);
  return response;
});

export const fetchAsyncSearchedCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async (term) => {
  const response = await characterApi.get(`/people/?search=${term}`).catch((err) => {
    console.log('Err :', err);
  });
  console.log(response);
  return response;
});

const initialState = {
  characters: {},
  favouriteCharacters: [],
  selectCharacter: {},
};

export const counterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
});
