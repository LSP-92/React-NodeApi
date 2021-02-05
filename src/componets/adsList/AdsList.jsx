import React, { useEffect, useState } from "react";
import { getAds } from "../../lib/getAds";
import Ad from "../ads/Ad";
import Filter from "../filter/Filter";
import Oops from "../oops/Oops";

import "./AdsList.css";
const AdsList = function (props) {
  const [ads, setAd] = useState([""]);
  const click = (id) => {
    console.log(props.history);
    props.history.push(`/adverts/${id}`);
  };
  async function getAdsApi(filters) {
    try {
      const { data } = await getAds(filters);
      const arrData = data.result.rows;
      setAd(arrData);
    } catch (error) {
      props.history.push("/login");
      console.log(error, "Error Await Ads");
    }
  }

  useEffect(() => {
    getAds()
      .then(({ data }) => {
        const arrData = data.result.rows;
        setAd(arrData);
      })
      .catch((error) => {
        props.history.push("/login");
        console.log(error, "Error Await Ads");
      });
  }, [props.history]);

  const linkToNewAdverts = () => {
    props.history.push("/new");
  };

  const render = (click) => {
    if (ads.length <= 0) {
      return (
        <Oops
          message="Oops... Ads not found, create new... Click me !!"
          onclick={linkToNewAdverts}
        />
      );
    }
    return ads.map((element) => (
      <Ad key={`${element._id}`} {...element} {...click} buttonTitle="More" />
    ));
  };

  const sendDataFilter = async (filters) => {
    console.log(filters);
    console.log("peti a api", await getAdsApi(filters));
    console.log(ads);
  };
  return (
    <>
      <Filter onSubmit={sendDataFilter} />
      <div className="anuncios">{render({ click })}</div>;
    </>
  );
};

export default AdsList;
