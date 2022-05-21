import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCoin } from "../favoriteCoins/favoriteCoinsSlice.js";
import { loadData, selectFilteredAllCoins } from "./allCoinsSlice.js";

import FavoriteButton from "../../components/FavoriteButton";
import Coin from "../../components/Coin";
import favoriteIcon from "../../img/favorite.svg";

export const AllCoins = () => {
  const allCoins = useSelector(selectFilteredAllCoins);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };
  
  useEffect(onFirstRender, []);

  const onAddCoinHandler = (coin) => {
    dispatch(addCoin(coin));
  };

  return (
    <div className="coins-container">
      {allCoins.map((coin) => (
        <Coin coin={coin} key={coin.id}>
          <FavoriteButton
            onClickHandler={() => onAddCoinHandler(coin)}
            icon={favoriteIcon}
          >
            Add to Favorites
          </FavoriteButton>
        </Coin>
      ))}
    </div>
  );
};
