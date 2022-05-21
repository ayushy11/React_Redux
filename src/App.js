import React from "react";
import "./App.css";
import { AllCoins } from "./features/allCoins/AllCoins.js";
import { SearchTerm } from "./features/searchTerm/SearchTerm.js";
import { FavoriteCoins } from "./features/favoriteCoins/FavoriteCoins.js";

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Crypto Coins</h2>
        <FavoriteCoins />
      </section>
      <hr />
      <section>
        <h2>All Crypto Coins</h2>
        <AllCoins />
      </section>
    </main>
  );
}
