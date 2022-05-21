import { configureStore } from "@reduxjs/toolkit";
import favoriteCoinsReducer from "../features/favoriteCoins/favoriteCoinsSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";
import allCoinsReducer from "../features/allCoins/allCoinsSlice";

export default configureStore({
  reducer: {
    favoriteCoins: favoriteCoinsReducer,
    searchTerm: searchTermReducer,
    allCoins: allCoinsReducer,
  },
});
