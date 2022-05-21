import React from "react";

export default function Coin({ coin, children }) {
  return (
    <div key={coin.id} className="coin" tabIndex={0}>
      <span className="coin-container">
        <h3 className="coin-name">{coin.name}</h3>
        <div className="image-container">
          <img src={coin.img} alt="" className="coin-image" />
        </div>
      </span>
      {children}
    </div>
  );
}
