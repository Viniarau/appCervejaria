import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define o estado inicial como um array vazio
const initialState: Beer[] = [];

// Define a estrutura de dados de uma cerveja
interface Beer {
  id: number;
  name: string;
  description: string;
}

const beersSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    setBeers: (state, action: PayloadAction<Beer[]>) => {
      return action.payload;
    },
  },
});

export const { setBeers } = beersSlice.actions;

export default beersSlice.reducer;
