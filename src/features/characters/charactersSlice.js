import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import characterApi from '../../api/characterApi';

export const fetchAsyncCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async (page = 1) => {
  const response = await characterApi.get(`/people/?page=${page}`).catch((err) => {
    console.log('Err :', err);
  });
  console.log(response.data);
  return response.data;
});

export const fetchAsyncSearchedCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async (term) => {
  const response = await characterApi.get(`/people/?search=${term}`).catch((err) => {
    console.log('Err :', err);
  });
  console.log(response.data);
  return response.data;
});

export const counterSlice = createSlice({
  name: 'characters',
  initialState: {
    data: {},
    characters: {},
    favouriteCharacters: [],
    selectCharacter: {},
  },
  extraReducers: {
    [fetchAsyncCharacters.pending]: (state, action) => {
      console.log('characters pending');
    },
    [fetchAsyncCharacters.fulfilled]: (state, { payload }) => {
      console.log('characters fetched succesfully');
      return { ...state, characters: payload };
    },
    [fetchAsyncCharacters.fulfilled]: (state, { payload }) => {
      console.log('characters fetched succesfully');
      return { ...state, characters: payload.results, data: payload };
    },
    [fetchAsyncCharacters.rejected]: () => {
      console.log('characters rejected');
    },
  },
});

export const getAllCharacters = (state) => state.characters.characters;
export const getData = (state) => state;
export const getFavouriteCharacters = (state) => state.favouriteCharacters;
export const getSelectedCharacter = (state) => state.selectCharacter;
export default counterSlice.reducer;
