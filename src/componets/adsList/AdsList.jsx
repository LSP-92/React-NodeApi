import { useEffect, useState } from "react";
import { getAds } from "../../lib/getAds";
import Ad from "../ads/Ad";

import "./AdsList.css";
const AdsList = function () {
  const [ads, setAd] = useState([""]);

  async function getAdsApi() {
    try {
      const { data } = await getAds("apiv1/adverts");
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
    return ads.map((element) => (
      <Ad key={`inline-${element._id}`} {...element} />
    ));
  };
  return <div className="anuncios">{render()}</div>;
};
export default AdsList;
