import React, { useEffect, useState } from "react";
import { getAds } from "../../lib/getAds";
import Ad from "../ads/Ad";
import Filter from "../filter/Filter";

import "./AdsList.css";
const AdsList = function () {
  const [ads, setAd] = useState([""]);
  const [url, setUrl] = useState("apiv1/adverts");

  async function getAdsApi() {
    try {
      const { data } = await getAds(url);
      const arrData = data.result.rows;
      setAd(arrData);
    } catch (error) {
      console.log(error, "Error Await Ads");
    }
  }

  useEffect(() => {
    return getAdsApi();
  }, []);

  const render = () => {
    return ads.map((element) => <Ad key={`${element._id}`} {...element} />);
  };
  return (
    <>
      <Filter onSubmit={console.log("hola")} />
      <div className="anuncios">{render()}</div>;
    </>
  );
};

/* ("apiv1/adverts"); */
export default AdsList;
