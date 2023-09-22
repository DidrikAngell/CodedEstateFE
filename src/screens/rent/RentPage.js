import {
  Row,
  Col,
  Button,
  Image,
  Modal,
  Container,
  Nav,
  Tab,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { NormalRentCard } from "../../components/card/card";
import { FaMap } from "react-icons/fa";
import { sampleData } from "../../utils/sampledata";
import { useState, useEffect } from "react";
import EmptyImg from "../../assets/images/icons/mint.png";
import { Calendar } from "react-multi-date-picker";
import LocationImg1 from "../../assets/images/location/world.jpg";
import LocationImg2 from "../../assets/images/location/europe.jpg";
import LocationImg3 from "../../assets/images/location/turkey.jpg";
import LocationImg4 from "../../assets/images/location/southeast_asia.jpg";
import LocationImg5 from "../../assets/images/location/thailand.jpg";
import LocationImg6 from "../../assets/images/location/south_america.jpg";
import ResetIcon from "../../assets/images/icons/reset.png";
import { FaMinus, FaPlus, FaSearch, FaUndoAlt } from "react-icons/fa";

function RentPage() {
  const [data, setData] = useState([]);
  const [locationShow, setLocationShow] = useState(false);
  const [timeShow, setTimeShow] = useState(false);
  const [guestShow, setGuestShow] = useState(false);
  const [dates, setDates] = useState([]);

  const [location, setLocation] = useState("");
  const [keyword, setKeyWord] = useState("");
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const locationData = [
    { value: "World", image: LocationImg1, title: "I'm flexible" },
    { value: "Europe", image: LocationImg2, title: "Europe" },
    { value: "Turkey", image: LocationImg3, title: "Turkey" },
    { value: "Asia", image: LocationImg4, title: "Southeast Asia" },
    { value: "Thailand", image: LocationImg5, title: "Thailand" },
    { value: "America", image: LocationImg6, title: "South America" },
  ];

  function formatDate(dateString) {
    let originalDate = new Date(dateString);
    let year = originalDate.getFullYear();
    let month = originalDate.getMonth() + 1;
    let day = originalDate.getDate();
    let formattedDate = `${month.toString().padStart(2, "0")}.${day
      .toString()
      .padStart(2, "0")}`;
    return formattedDate;
  }

  function resetFilter() {
    setLocation("");
    setKeyWord("");
    setDates([]);
    setAdult(0);
    setChildren(0);
    setInfants(0);
    setPets(0);
  }

  const findProperties = (
    location,
    adult,
    dates,
    children,
    infants,
    pets,
    keyword
  ) => {
    if (
      keyword == "" &&
      location == "" &&
      dates[0]?.toDate?.() === undefined &&
      dates[1]?.toDate?.() === undefined &&
      adult == 0 &&
      children == 0 &&
      infants == 0 &&
      pets == undefined
    ) {
      let tempData = [];
      for (let i = 0; i < sampleData.length; i++) {
        const _data = {
          zpid: sampleData[i].zpid,
          address: sampleData[i].address,
          bedrooms: sampleData[i].bedrooms,
          bathrooms: sampleData[i].bathrooms,
          price: sampleData[i].price,
          homeStatus: "FOR_SALE",
          livingArea: 1123,
          size: sampleData[i].livingArea,
          currency: "SEI",
          homeType: "CONDO",
          photos: sampleData[i].photos,
          raw: sampleData[i],
        };
        tempData.push(_data);
      }
      setData(tempData);
    } else {
      let result = sampleData;
      if (location !== "") {
        if (location === "world") {
          result = result.filter((obj) => obj.address.area !== "");
        } else {
          result = result.filter((obj) =>
            obj.address.area.toLowerCase().includes(location.toLowerCase())
          );
        }
      }

      if (keyword !== "") {
        result = result.filter(
          (obj) =>
            obj.address.state.toLowerCase().includes(keyword.toLowerCase()) ||
            obj.address.city.toLowerCase().includes(keyword.toLowerCase()) ||
            obj.address.streetAddress
              .toLowerCase()
              .includes(keyword.toLowerCase()) ||
            obj.address.area.toLowerCase().includes(keyword.toLowerCase())
        );
      }

      if (
        dates[0]?.toDate?.() !== undefined &&
        dates[1]?.toDate?.() !== undefined
      ) {
        result = result.filter(
          (obj) =>
            new Date(dates[0]?.toDate?.()) <= new Date(obj.date) &&
            new Date(obj.date) <= new Date(dates[1]?.toDate?.())
        );
      }

      if (adult != 0) {
        result = result.filter((obj) => obj.guest.adults == adult);
      }

      if (children !== 0) {
        result = result.filter((obj) => obj.guest.childrens == children);
      }

      if (infants !== 0) {
        result = result.filter((obj) => obj.guest.infants == infants);
      }

      if (pets !== 0) {
        result = result.filter((obj) => obj.guest.pets == pets);
      }
      setData(result);
      return;
    }
  };

  useEffect(() => {
    findProperties(location, adult, dates, children, infants, pets, keyword);
  }, [location, adult, dates, children, infants, pets]);
  useEffect(() => {
    findProperties(location, adult, dates, children, infants, pets, keyword);
  }, []);

  return (
    <div className="BuyPage position-relative" style={{ marginTop: "81px" }}>
      <div className="SearchBar border-bottom">
        <Container className="d-flex justify-content-center">
          <div
            className="my-2 p-2 border rounded-5 d-flex align-items-center"
            style={{ height: "50px" }}
          >
            <div
              className="py-1 px-3 fw-bold border-end cursor-pointer "
              onClick={() => setLocationShow(true)}
            >
              {location == "" && keyword == "" ? (
                "Anywhere"
              ) : (
                <div className=" d-flex flex-column">
                  <div className="location-search-t">Where</div>
                  <div className="location-search-b">{location || keyword}</div>
                </div>
              )}
            </div>
            <div
              className="py-1 px-3 fw-bold border-end cursor-pointer"
              onClick={() => setTimeShow(true)}
            >
              {dates[0]?.toDate?.() == undefined &&
                dates[1]?.toDate?.() == undefined ? (
                "Any Week"
              ) : (
                <div className=" d-flex flex-column">
                  <div className="location-search-t">Week</div>
                  <div className="location-search-b">
                    {formatDate(dates[0]?.toDate?.()) +
                      "~" +
                      (dates[1]?.toDate?.() != undefined
                        ? formatDate(dates[1]?.toDate?.())
                        : "00.00")}
                  </div>
                </div>
              )}
            </div>
            <div
              className="py-1 px-3 fw-bold border-end cursor-pointer"
              onClick={() => setGuestShow(true)}
            >
              {adult == 0 && children == 0 && infants == 0 && pets == 0 ? (
                "Add Guests"
              ) : (
                <div className=" d-flex flex-column">
                  <div className="location-search-t">Guest</div>
                  <div className="location-search-b">
                    {(adult > 0 || children > 0) && (
                      <span className="me-2">
                        {adult + children + "-guests"}
                      </span>
                    )}
                    {infants > 0 && (
                      <span className="me-2">{infants + "-infants"}</span>
                    )}
                    {pets > 0 && <span className="me-2">{pets + "-pets"}</span>}
                  </div>
                </div>
              )}
            </div>
            <Button className="round-btn d-flex p-2 ms-2" onClick={resetFilter}>
              <FaUndoAlt />
            </Button>
          </div>
        </Container>

        <Modal
          show={locationShow}
          onHide={() => setLocationShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-3">
            <Modal.Title className="fs-6">Search by Keyword</Modal.Title>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Form.Control
                type="text"
                className="me-3"
                value={keyword}
                onChange={(e) => setKeyWord(e.target.value)}
              />
              <Button
                className="bg-dark-purple border-dark-purple text-white px-3"
                onClick={() => {
                  findProperties(
                    location,
                    adult,
                    dates,
                    children,
                    infants,
                    pets,
                    keyword
                  );
                  setLocationShow(false);
                }}
              >
                Okay
              </Button>
            </div>
            <hr />
            <Modal.Title className="fs-6">Search by region</Modal.Title>
            <Row>
              <Col xs={4} sm={4} md={4} className="my-2">
                <Image
                  src={LocationImg1}
                  className="rounded w-100 border cursor-pointer"
                  onClick={() => {
                    setLocation("world");
                    setLocationShow(false);
                  }}
                />
                <div className="">I'm flexible</div>
              </Col>
              <Col xs={4} sm={4} md={4} className="my-2">
                <Image
                  src={LocationImg2}
                  className="rounded w-100 border cursor-pointer"
                  onClick={() => {
                    setLocation("Europe");
                    setLocationShow(false);
                  }}
                />
                <div className="">Europe</div>
              </Col>
              <Col xs={4} sm={4} md={4} className="my-2">
                <Image
                  src={LocationImg3}
                  className="rounded w-100 border cursor-pointer"
                  onClick={() => {
                    setLocation("Turkey");
                    setLocationShow(false);
                  }}
                />
                <div className="">Turkey</div>
              </Col>
              <Col xs={4} sm={4} md={4} className="my-2">
                <Image
                  src={LocationImg4}
                  className="rounded w-100 border cursor-pointer"
                  onClick={() => {
                    setLocation("Asia");
                    setLocationShow(false);
                  }}
                />
                <div className="">Southeast Asia</div>
              </Col>
              <Col xs={4} sm={4} md={4} className="my-2">
                <Image
                  src={LocationImg5}
                  className="rounded w-100 border cursor-pointer"
                  onClick={() => {
                    setLocation("Thailand");
                    setLocationShow(false);
                  }}
                />
                <div className="">Thailand</div>
              </Col>
              <Col xs={4} sm={4} md={4} className="my-2">
                <Image
                  src={LocationImg6}
                  className="rounded w-100 border cursor-pointer"
                  onClick={() => {
                    setLocation("America");
                    setLocationShow(false);
                  }}
                />
                <div className="">South America</div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        <Modal
          show={timeShow}
          onHide={() => setTimeShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <div className="d-flex align-item-center justify-content-center">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Choose dates</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Calendar
                      range
                      rangeHover
                      numberOfMonths={2}
                      minDate={minDate}
                      onChange={setDates}
                      format={"MM/DD/YYYY"}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
            <div className="text-end">
              <Button
                className="bg-dark-purple border-dark-purple text-white px-3"
                onClick={() => setTimeShow(false)}
              >
                Okay
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={guestShow}
          onHide={() => setGuestShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className="d-flex justify-content-end">
              <Button
                className="btn-close"
                onClick={() => setGuestShow(false)}
              ></Button>
            </div>
            <div className="d-flex align-items-center justify-content-between my-2 guest-stepper border-bottom">
              <div className="guest-content">
                <div className="guest-title fs-6">Adults</div>
                <p className="guest-condition">Ages 13 or above</p>
              </div>
              <div className="stepper">
                <ButtonGroup className="align-items-center ">
                  <Button onClick={() => setAdult(adult - 1)}>
                    <FaMinus />
                  </Button>
                  <span className="px-3">{adult}</span>
                  <Button onClick={() => setAdult(adult + 1)}>
                    <FaPlus />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-2 guest-stepper border-bottom">
              <div className="guest-content">
                <div className="guest-title fs-6">Children</div>
                <p className="guest-condition">Ages 2-12</p>
              </div>
              <div className="stepper">
                <ButtonGroup className="align-items-center ">
                  <Button onClick={() => setChildren(children - 1)}>
                    <FaMinus />
                  </Button>
                  <span className="px-3">{children}</span>
                  <Button onClick={() => setChildren(children + 1)}>
                    <FaPlus />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-2 guest-stepper border-bottom">
              <div className="guest-content">
                <div className="guest-title fs-6">Infants</div>
                <p className="guest-condition">Under 2</p>
              </div>
              <div className="stepper">
                <ButtonGroup className="align-items-center ">
                  <Button onClick={() => setInfants(infants - 1)}>
                    <FaMinus />
                  </Button>
                  <span className="px-3">{infants}</span>
                  <Button onClick={() => setInfants(infants + 1)}>
                    <FaPlus />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-2 guest-stepper">
              <div className="guest-content">
                <div className="guest-title fs-6">Pets</div>
              </div>
              <div className="stepper">
                <ButtonGroup className="align-items-center ">
                  <Button onClick={() => setPets(pets - 1)}>
                    <FaMinus />
                  </Button>
                  <span className="px-3">{pets}</span>
                  <Button onClick={() => setPets(pets + 1)}>
                    <FaPlus />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="text-end">
              <Button
                className="bg-dark-purple border-dark-purple text-white px-3"
                onClick={() => setGuestShow(false)}
              >
                Okay
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {data.length > 0 ? (
        <Row className="Search-result mt-2" style={{ minHeight: "81.5vh" }}>
          {data.map((item, idx) => (
            <Col xs={12} sm={12} md={2} key={item.idx + "-" + idx}>
              <NormalRentCard
                key={item.idx}
                title={item?.address?.city + " , " + item?.address?.state}
                network={item?.currency}
                price={item?.price}
                bed={item?.bedrooms}
                bath={item?.bathrooms}
                size={item?.size}
                images={item?.photos}
                raw={item}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Row
          style={{ minHeight: "81.5vh" }}
          className="d-flex align-items-center justify-content-center w-25 mx-auto"
        >
          <div className="fs-5 fw-bold text-center">
            <Image src={EmptyImg} className="w-100 mb-2" />
            <div>No NFTs available</div>
          </div>
        </Row>
      )}
      <Button className="round-btn position-ablsolute show-map-btn px-4">
        Show Map
        <FaMap className="ms-2" />
      </Button>
    </div>
  );
}

export default RentPage;
