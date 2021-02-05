import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAdByID, deleteAds } from "../../lib/getAds";
import AlertDialog from "../shared/modal/Modal";
import Ad from "./Ad";

import "./adpage.css";

const Adpage = (props) => {
  const [advert, setAd] = useState({});

  const [isModal, setModal] = useState(false);

  const getOneAdvert = async (path) => {
    try {
      const {
        data: { result: ad },
      } = await getAdByID(path);
      setAd(ad);
      console.log(ad);
    } catch (error) {
      props.history.push("/404");
      console.log(error);
    }
  };

  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  const click = async () => {
    try {
      setModal(true);
      await deleteAds(pathname);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneAdvert(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buttonUpModal = () => {
    setModal(true);
  };

  return (
    <div className="advertpage">
      {isModal ? (
        <AlertDialog
          message={"You are going to delete your ad ..."}
          changeState={setModal}
          click={click}
        />
      ) : (
        <div className="adpage">
          <Ad buttonTitle="Delete" click={buttonUpModal} {...advert} />
        </div>
      )}
    </div>
  );
};

export default Adpage;
