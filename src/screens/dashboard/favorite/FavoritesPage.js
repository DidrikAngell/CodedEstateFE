import { Row, Col } from "react-bootstrap";
import { FavoriteCard, FavouritInfoCard } from "../../../components/card/card";
import { FavoriteData } from "../../../utils/data";

function FavoritesPage() {
  return (
    <div className="FavoritesPage">
      <div className="fs-4 fw-bold">Favorites</div>
      <div className="fs-6 opacity-50">Here are your favorite NFTs listed on Coded Estate</div>
      <FavouritInfoCard />
      <Row className="mt-5 FavoritesPage-body position-relative">
        {
          FavoriteData.map((item, idx) => (
            <Col xs={12} sm={12} md={2}>
              <FavoriteCard key={item.idx} title={item?.address?.city + " , " + item?.address?.state} network={item?.currency} price={item?.price} bed={item?.bedrooms} bath={item?.bathrooms} size={item?.size} images={item?.photos} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default FavoritesPage;
