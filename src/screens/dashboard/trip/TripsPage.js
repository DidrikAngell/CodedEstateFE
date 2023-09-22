import { Container, Button, Card, Row, Col, Image, Tabs, Tab, Modal } from "react-bootstrap";
import Banner1 from '../../../assets/images/banners/trips.png';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { DetailCarousel } from "../../../components/carousel/Carousel";
import { DetailData } from "../../../utils/data";
import TrackIcon from '../../../assets/images/icons/track.svg';
import HostMessageIcon from '../../../assets/images/icons/hostmessage.svg';
import BuildingImg from '../../../assets/images/building/4.webp';
import BuildingImg1 from '../../../assets/images/building/4.webp';
import { store } from "../../../configs/Store";


function TripsPage() {
  const [show, setShow] = useState(false);
  const [booked, setBooked] = useState(false);
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="TripsPage my-2">
      <div className="fs-4 fw-bold">Trips</div>
      <div className="fs-6 opacity-50">Your Coded Estate Trips</div>
      <Tabs
        defaultActiveKey="travel"
        id="uncontrolled-tab-example"
        className="my-3"
      >        
        <Tab eventKey="travel" title="Traveller">
          <Row className="py-2">
            <Col sm={12} md={8}>
              <NavLink to="/dashboard/rent/message" className="nav-link">
                <Card>
                  <Row>
                    <Col sm={6} md={8} className="card-body ps-5 py-3">
                      <div className="fs-5 fw-bold my-2">Paris</div>
                      <small>Private room in loft hosted by Liubomyr</small>
                      <hr />
                      <Row>
                        <Col md={6} className="border-end">
                          <div>14 Sept - <br />17 Sept</div>
                          <small>2023</small>
                        </Col>
                        <Col md={6}>
                          <div>20 Rue Jean Mermoz <br />Paris, lle-de-France</div>
                          <small>France</small>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={6} md={4}>
                      <Image src={BuildingImg} className="w-100" height="100%" style={{ objectFit: 'cover' }} />
                    </Col>
                  </Row>
                </Card>
              </NavLink>
            </Col>
            <Col sm={12} md={4}>
              <div className="mb-3">Explore things to do near Paris</div>
              <Row>
                <Col sm={6} md={6} className="my-2">
                  <div className="d-flex align-items-center">
                    <Image src={BuildingImg1} className="rounded-2 me-2 border" width="50" height="50" style={{ objectFit: "cover" }} />
                    <div className="">
                      <div className="fw-bold mb-1">Just for you</div>
                      <div className="text-gray">18 experiences</div>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} className="my-2">
                  <div className="d-flex align-items-center">
                    <Image src={BuildingImg1} className="rounded-2 me-2 border" width="50" height="50" style={{ objectFit: "cover" }} />
                    <div className="">
                      <div className="fw-bold mb-1">Just for you</div>
                      <div className="text-gray">18 experiences</div>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} className="my-2">
                  <div className="d-flex align-items-center">
                    <Image src={BuildingImg1} className="rounded-2 me-2 border" width="50" height="50" style={{ objectFit: "cover" }} />
                    <div className="">
                      <div className="fw-bold mb-1">Just for you</div>
                      <div className="text-gray">18 experiences</div>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} className="my-2">
                  <div className="d-flex align-items-center">
                    <Image src={BuildingImg1} className="rounded-2 me-2 border" width="50" height="50" style={{ objectFit: "cover" }} />
                    <div className="">
                      <div className="fw-bold mb-1">Just for you</div>
                      <div className="text-gray">18 experiences</div>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} className="my-2">
                  <div className="d-flex align-items-center">
                    <Image src={BuildingImg1} className="rounded-2 me-2 border" width="50" height="50" style={{ objectFit: "cover" }} />
                    <div className="">
                      <div className="fw-bold mb-1">Just for you</div>
                      <div className="text-gray">18 experiences</div>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6} className="my-2">
                  <div className="d-flex align-items-center">
                    <Image src={BuildingImg1} className="rounded-2 me-2 border" width="50" height="50" style={{ objectFit: "cover" }} />
                    <div className="">
                      <div className="fw-bold mb-1">Just for you</div>
                      <div className="text-gray">18 experiences</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="my-3 fs-5">Where you've been</div>
          <Row>
            <Col sm={6} md={4} className="my-2">
              <NavLink to="/dashboard/rent/trips/detail/1" className="nav-link">
                <div className="d-flex align-items-center">
                  <Image src={BuildingImg1} className="rounded-2 me-2 border" width="80" height="80" style={{ objectFit: "cover" }} />
                  <div className="">
                    <div className="fw-bold mb-1">Gamle Oslo</div>
                    <div className="text-gray">Hosted by Per-Christian</div>
                    <div className="text-gray">20 May 2022 - 22 May 2022</div>
                  </div>
                </div>
              </NavLink>
            </Col>
            <Col sm={6} md={4} className="my-2">
            <NavLink to="/dashboard/rent/trips/detail/1" className="nav-link">
              <div className="d-flex align-items-center">
                <Image src={BuildingImg1} className="rounded-2 me-2 border" width="80" height="80" style={{ objectFit: "cover" }} />
                <div className="">
                  <div className="fw-bold mb-1">Gamle Oslo</div>
                  <div className="text-gray">Hosted by Per-Christian</div>
                  <div className="text-gray">20 May 2022 - 22 May 2022</div>
                </div>
              </div>
              </NavLink>
            </Col>
          </Row>
          <hr />
          <div className="text-gray">Can't find your reservation here? <u className="text-dark-purple">Visit the Help Centre</u></div>
          {/* <Card className="border-dark-purple">
            <Row>
              <Col sm={12} md={4} className="px-4">
                <div className="fs-5 fw-bold mt-5 mb-2">No One Has Booked... Yet!</div>
                <div className="text-gray">Need more visibility? Boost your properties to the front page and get noticed more!</div>
                <Button className="bg-dark-purple text-white fw-semibold px-4 border-0 mt-4 mb-3">List your NFTs</Button>
              </Col>
              <Col sm={12} md={8}>
                <Image src={Banner1} width="100%" height="250" style={{objectFit:'cover'}}/>
              </Col>
            </Row>
          </Card> */}
          {/* <div className="fs-4 fw-bold my-2">Previous booking</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="fs-4 fw-bold my-2">Cancelled bookings</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        </Tab>
        <Tab eventKey="host" title="Host">
          <Card className="border-dark-purple">
            <Row>
              <Col sm={12} md={4} className="px-4">
                <div className="fs-5 fw-bold mt-5 mb-2">No One Has Booked... Yet!</div>
                <div className="text-gray">List your real estate NFTs on the decentralized web today</div>
                <NavLink to="/dashboard/rent/properties" onClick={()=>setTabKey(3)} className="nav-link"><Button className="bg-dark-purple text-white fw-semibold px-4 border-0 mt-4 mb-3">List your NFTs</Button></NavLink>
              </Col>
              <Col sm={12} md={8}>
                {/* <Image src={Banner1} width="100%" height="250" style={{objectFit:'cover'}}/> */}
              </Col>
            </Row>
          </Card>
          <div className="fs-4 fw-bold my-2">Previous Bookings</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Link to="detail/1">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  </Link>
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Link to="detail/1">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  </Link>
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Link to="detail/1">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  </Link>
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Link to="detail/1">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  </Link>
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple'>
                <Card.Body className="d-flex align-items-center">
                  <Link to="detail/1">
                    <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  </Link>
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="fs-4 fw-bold my-2">Cancelled bookings</div>
          <Row>
            <Col sm={12} md={4} className="my-2">
              <Card className='border-dark-purple' onClick={handleShow}>
                <Card.Body className="d-flex align-items-center">
                  <Image src={Banner1} width="80" height="80" style={{ objectFit: 'cover' }} className="rounded-2 me-3 border-dark-purple border border-1" />
                  <div className="">
                    <div className="fs-6 fw-bold">Tingstadvassen</div>
                    <div className="text-gray">Hosted by sei14zd...0qzk</div>
                    <div className="text-gray">Jun 2-5, 2022</div>
                    <div className="d-flex align-items-center text-orange">
                      <FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaStar className="me-1" /><FaRegStar />
                    </div>
                  </div>
                </Card.Body>
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
              <small className="fw-bold mb-2">Guest: 0x20jsd...90b</small>
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

export default TripsPage;
