import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../shared/buttons/Button";
import "./ads.css";

const Ad = ({ name, sale, price, tags, _id, styleClass = "anuncio" }) => {
  const history = useHistory();
  const handleClick = () => {
    console.log(`/ads/${_id}`);
    history.push(`/ads/${_id}`);
  };
  return (
    <article className={styleClass}>
      <div className="nameAd">
        <h3>{name}</h3>
      </div>
      <div className="valueAd">
        <p>Price: {price}</p>
        <p>State: {sale ? "Shell" : "Buy"}</p>
        <p>Tags: {tags}</p>
      </div>
      <Button type="button" title="More" onclick={handleClick} />
    </article>
  );
};

export default Ad;
