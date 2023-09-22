import { Row, Col, Button } from "react-bootstrap";
import { NormalRentCard } from "../../components/card/card";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { buyPageData } from "../../utils/data";
import { FaMap } from "react-icons/fa";
import { GoogleMapElement } from "../../components/map/map";

function HomePage() {
  return (
    <div className="HomePage position-relative" style={{ marginTop: "81px" }}>
      <SearchBar />
      <Row className="Search-result">
        {
          buyPageData.map((item, idx) => (
            <Col xs={12} sm={12} md={2}>
              <NormalRentCard key={idx} title={item.title} network={item.network} price={item.price} images={item.images} />
            </Col>
          ))
        }
      </Row>
      <Button className="round-btn position-ablsolute show-map-btn px-4">Show Map<FaMap className="ms-2" /></Button>
    </div>
  );
}

export default HomePage;
