import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeCoin,
  selectFilteredFavoriteCoins,
} from "./favoriteCoinsSlice.js";

import FavoriteButton from "../../components/FavoriteButton";
import Coin from "../../components/Coin";
import unfavoriteIcon from '../../img/unfavorite.svg';

export const FavoriteCoins = () => {
  const favoriteCoins = useSelector(selectFilteredFavoriteCoins);
  const dispatch = useDispatch();

  const onRemoveCoinHandler = (coin) => {
    dispatch(removeCoin(coin));
  };

  return (
    <div className="coins-container">
      {favoriteCoins.map(createCoinComponent)}
    </div>
  );

  // Helper Function
  function createCoinComponent(coin) {
    return (
      <Coin coin={coin} key={coin.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveCoinHandler(coin)}
          icon={unfavoriteIcon}
        >
          Remove Favorite
        </FavoriteButton>
      </Coin>
    );
  }
};
