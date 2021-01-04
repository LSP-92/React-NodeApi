import React from "react";

import "./adpage.css";

const Ad = ({ name, sale, price, tags, _id }) => (
  <article className="anuncio">
    <div className="nameAd">
      <h3>{name}</h3>
    </div>
    <div className="valueAd">
      <p>Price: {price}</p>
      <p>State: {sale ? "Shell" : "Buy"}</p>
      <p>Tags: {tags}</p>
    </div>
  </article>
);

export default Ad;
