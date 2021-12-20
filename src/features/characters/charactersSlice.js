import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import characterApi from '../../api/characterApi';

export const fetchAsyncCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async (page = 1) => {
  const response = await characterApi.get(`/people/?page=${page}`).catch((err) => {
    console.log('Err :', err);
  });
  console.log(response.data);
  return response.data;
});

export const fetchAsyncCharactersByName = createAsyncThunk('characters/fetchAsyncCharactersByName', async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
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
    characters: null,
    favouriteCharacters: [],
    selectCharacter: {},
    isLoading: true,
  },
  extraReducers: {
    [fetchAsyncCharacters.pending]: (state, action) => {
      console.log('characters pending');
      return { ...state, isLoading: true };
    },
    [fetchAsyncCharacters.fulfilled]: (state, { payload }) => {
      console.log('characters fetched succesfully');
      return { ...state, characters: payload.results, data: payload, isLoading: false };
    },
    [fetchAsyncCharacters.rejected]: (state) => {
      console.log('characters rejected');
      return { ...state, isLoading: false };
    },

    [fetchAsyncCharactersByName.pending]: (state, action) => {
      console.log('characters pending');
      return { ...state, isLoading: true };
    },
    [fetchAsyncCharactersByName.fulfilled]: (state, { payload }) => {
      console.log('characters fetched succesfully');
      return { ...state, selectCharacter: payload };
    },
    [fetchAsyncCharactersByName.rejected]: (state) => {
      console.log('characters rejected');
      return { ...state, isLoading: false };
    },
  },
});

export const getAllCharacters = (state) => state.characters.characters;
export const getData = (state) => state;
export const getFavouriteCharacters = (state) => state.favouriteCharacters;
export const getSelectedCharacter = (state) => state.characters.selectCharacter;
export const getLoadingStatus = (state) => state.isLoading;
export default counterSlice.reducer;
