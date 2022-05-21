import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

// Slice Object
export const favoriteCoinsSlice = createSlice({
  name: "favoriteCoins",
  initialState: [],
  reducers: {
    addCoin: (state, action) => {
      return [...state, action.payload];
    },
    removeCoin: (state, action) => {
      return state.filter((coin) => coin.id !== action.payload.id);
    },
  },
});

// Selectors
export const selectFavoriteCoins = (state) => state.favoriteCoins;

export const selectFilteredFavoriteCoins = (state) => {
  const favoriteCoins = selectFavoriteCoins(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Exports
export const { addCoin, removeCoin } = favoriteCoinsSlice.actions;

export default favoriteCoinsSlice.reducer;
