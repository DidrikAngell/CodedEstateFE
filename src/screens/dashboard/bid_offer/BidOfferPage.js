import { Container, Button, Card, Row, Col, Image, Tabs, Tab, Modal, Nav } from "react-bootstrap";
import Banner from '../../../assets/images/banners/bid_offer.webp';
import Banner1 from '../../../assets/images/building/10.webp';
import Banner2 from '../../../assets/images/building/11.webp';
import Banner3 from '../../../assets/images/building/12.webp';
import Banner4 from '../../../assets/images/building/13.webp';
import Banner5 from '../../../assets/images/building/14.webp';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { DetailCarousel } from "../../../components/carousel/Carousel";
import { DetailData } from "../../../utils/data";
import TrackIcon from '../../../assets/images/icons/track.svg';
import HostMessageIcon from '../../../assets/images/icons/hostmessage.svg';
import { store } from "../../../configs/Store";
import SEIIcon from '../../../assets/images/crypto/sei.svg';


function BidOfferPage() {
  const [show, setShow] = useState(false);
  const [booked, setBooked] = useState(false);
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="TripsPage my-2">
      <div className="fs-4 fw-bold">Bids and Offers</div>
      <div className="fs-6 opacity-50">Get an overview of your bids and offers</div>
      <Tabs
        defaultActiveKey="bids"
        id="uncontrolled-tab-example"
        className="my-3"
      >
        <Tab eventKey="bids" title="My Bids">
          <Card className="border-dark-purple">
            <Row>
              <Col sm={12} md={4} className="px-4">
                <div className="fs-5 fw-bold mt-5 mb-2">No bids... yet!</div>
                <div className="text-gray">Looking for that dream house that you can call your own? Start searching now and make a offer!</div>
                <NavLink to="/buy"><Button className="bg-dark-purple text-white fw-semibold px-4 border-0 mt-4 mb-3">Explore NFTs</Button></NavLink>
              </Col>
              <Col sm={12} md={8}>
                <Image src={Banner} width="100%" height="250" style={{ objectFit: 'cover' }} />
              </Col>
            </Row>
          </Card>
          <div className="fs-4 fw-bold my-2">Current Bids</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Owned by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner2} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Owned by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner3} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Owned by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner4} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Owned by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner5} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Owned by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
          </Row>
          <div className="fs-4 fw-bold my-2">Rejected Bids</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold">Tingstadvassen</div>
                      <div className="text-gray">Owned by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner3} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold">Tingstadvassen</div>
                      <div className="text-gray">Owned by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="offers" title="My Offers">
          <Card className="border-dark-purple">
            <Row>
              <Col sm={12} md={4} className="px-4">
                <div className="fs-5 fw-bold mt-5 mb-2">Receive Your First Offers Today!</div>
                <div className="text-gray">Get visability to your NFTs, and list them on on the decentralized web today!</div>
                <NavLink to="/dashboard/buy/properties" className="nav-link" onClick={(e) => setTabKey(3)}><Button className="bg-dark-purple text-white fw-semibold px-4 border-0 mt-4 mb-3">List NFT</Button></NavLink>
              </Col>
              <Col sm={12} md={8}>
                <Image src={Banner} width="100%" height="250" style={{ objectFit: 'cover' }} />
              </Col>
            </Row>
          </Card>
          <div className="fs-4 fw-bold my-2">Current Offers</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Offer by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner2} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Offer by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner3} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Offer by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner4} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Offer by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner5} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Offer by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
          </Row>
          <div className="fs-4 fw-bold my-2">Rejected Offers</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-0'>
                <NavLink to="/dashboard/buy/message" className="nav-link">
                  <Card.Body className="d-flex align-items-center">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                    <div className="">
                      <div className="fs-6 fw-bold text-dark-purple">Tingstadvassen</div>
                      <div className="text-gray">Offer by sei14zd...0qzk</div>
                      <div className="text-gray d-flex align-items-center">Your Offer : <Image src={SEIIcon} width="15" className="ms-2 me-1"/>500000 SEI</div>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
          </Row>
        </Tab>

      </Tabs>
      <Modal show={show} onHide={handleClose}>
        <div className="position-relative overflow-hidden" style={{ height: "400px" }}>
          <DetailCarousel images={DetailData.images} />
        </div>
        <Container className="mt-2">
          <div className="d-flex align-items-center">
            <Image src={TrackIcon} className="me-2" width="40" height="40" />
            <small>We sent you 1500 SEI refund on 1 Mar. If you haven’t received it yet, contact your bank to find out when it will arrive.</small>
          </div>
          <div className="text-center my-2">
            <Button className="bg-white px-3 border-dark-purple"><small className="fw-bold text-dark-purple">Track Refund</small></Button>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <Image src={HostMessageIcon} width="40" height="40" className="mx-3" />
            <div className="">
              <small className="fw-bold mb-2">Message your guest</small>
              <small className="fw-bold mb-2">Guest: sei14zd...0qzk</small>
            </div>
          </div>
          <hr />
          <div className="fs-6 fw-bold mb-2">Reservation Details</div>
          <small className="fw-bold mb-2">Confirmation code</small><br />
          <small>JT5A5A</small>
          <div className="text-center my-3">
            <Button onClick={handleClose} className="bg-white px-3 fw-bold fs-6 border-dark-purple text-dark-purple">Close</Button>
          </div>
        </Container>
      </Modal>
    </div>
  );
}

export default BidOfferPage;
