import { useEffect, useState } from "react";
import { getAds } from "../../lib/getAds";
import Ad from "../ads/Ad";
import { Container, Row, Col } from "react-bootstrap";

//import "./AdsList.css";
const AdsList = function () {
  const [ads, setAd] = useState([""]);

  async function getAdsApi() {
    try {
      const { data } = await getAds();
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
      <Ad
        key={`inline-${element._id}`}
        {...element}
        styleClass={element.length}
      />
    ));
  };
  console.log(ads.length);
  return (
    <Container fluid className={ads.length}>
      <Row>
        <Col xs={ads.length}>
          <div className={ads.length}>{render(ads.length)}</div>;
        </Col>
      </Row>
    </Container>
  );
};
export default AdsList;
