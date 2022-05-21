import allCoinsData from "../../data.js";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

//Action creator
export const loadData = () => {
  return {
    type: "allCoins/loadData",
    payload: allCoinsData,
  };
};

const initialState = [];

//Reducer
const allCoinsReducer = (allCoins = initialState, action) => {
  switch (action.type) {
    case "allCoins/loadData":
      return action.payload;
    case "favoriteCoins/addCoin":
      return allCoins.filter((coin) => coin.id !== action.payload.id);
    case "favoriteCoins/removeCoin":
      return [...allCoins, action.payload];
    default:
      return allCoins;
  }
};

//Selectors
export const selectAllCoins = (state) => state.allCoins;

export const selectFilteredAllCoins = (state) => {
  const allCoins = selectAllCoins(state);
  const searchTerm = selectSearchTerm(state);

  return allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

//Exports
export default allCoinsReducer;
