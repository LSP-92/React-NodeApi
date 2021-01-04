import React from "react";

import { useHistory } from "react-router-dom";
import Photo from "../shared/Photo";

import Button from "../shared/buttons/Button";
import { Card } from "react-bootstrap";
import "./ads.css";
import deafultImage from "../../assets/img/no-image.png";
const Ad = ({ name, sale, price, tags, _id, photo }) => {
  const history = useHistory();
  const handleClick = () => {
    console.log(`/ads/${_id}`);
    history.push(`/ads/${_id}`);
  };
  const tagsSplit = () =>
    tags.map((tag) => (
      <div style={tagsStyle(tag)} className="tag" key={tag}>
        {tag}
      </div>
    ));
  const tagsStyle = (tag) => {
    switch (tag) {
      case "mobile":
        return { color: "#FFB833" };
      case "motor":
        return { color: "#6433FF" };
      case "lifestyle":
        return { color: "#408C58" };
      case "gaming":
        return { color: "#6833FF" };
      case "pc":
        return { color: "#FF33C1" };

      default:
        return { color: "black" };
    }
  };

  return (
    <Card className="cardAds">
      <Photo
        src={photo ? `http://192.168.43.67:5000${photo}` : deafultImage}
        className="photoAds"
      />
      <Card.Title>{name}</Card.Title>
      <div className="textAd">
        <ul>
          <li>
            <span>Price: </span>
            {price}
          </li>
          <li>
            <span>State: </span>
            {sale ? "Shell" : "Buy"}
          </li>
          <li>
            <span>Tags: </span>
          </li>
        </ul>
        <div className="tags">{tags ? tagsSplit() : " "}</div>
      </div>
      <Button type="button" title="More" onclick={handleClick} />
    </Card>
  );
};

export default Ad;
