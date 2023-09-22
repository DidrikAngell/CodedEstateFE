import { useState } from "react";
import { Badge, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { store } from "../../configs/Store";

export const DetailCarousel = ({ images }) => {
  return (
    <Carousel className="my-2 DetailCarousel">
      {
        images?.map((item, idx) => (
          <Carousel.Item key={idx}>
            <Image src={item.src} width="100%" height="200" className="rounded-1" style={{ objectFit: "cover" }} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
};

export const MintedPropertiesCardCarousel = ({ images }) => {
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");
  return (
    <Carousel className="MintedPropertiesCardCarousel">
      {
        images?.map((item, idx) => (
          <Carousel.Item key={idx} className="position-relative text-center" onClick={(e) => setTabKey(1)}>
            <Badge className="text-dark-purple">Verify</Badge>
            <Link to="/dashboard/buy/properties"><Image src={item.src} width="100%" height="240" className="rounded-1" style={{ objectFit: "cover" }} /></Link>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
};

export const UnverifiedCardCarousel = ({ images }) => {
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");
  return (
    <Carousel className="MintedPropertiesCardCarousel">
      {
        images.map((item, idx) => (
          <Carousel.Item key={idx} className="position-relative text-center" onClick={(e) => setTabKey(2)}>
            <Badge className="text-dark-purple">Not Verified</Badge>
            <Link to="/dashboard/buy/properties"><Image src={item.src} width="100%" height="240" className="rounded-1" style={{ objectFit: "cover" }} /></Link>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
};

export const ListCardCarousel = ({ images }) => {
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");
  return (
    <Carousel className="MintedPropertiesCardCarousel">
      {
        images.map((item, idx) => (
          <Carousel.Item key={idx} className="position-relative text-center" onClick={(e) => setTabKey(3)}>
            <Link to="/dashboard/buy/properties"><Image src={item.src} width="100%" height="240" className="rounded-1" style={{ objectFit: "cover" }} /></Link>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
};