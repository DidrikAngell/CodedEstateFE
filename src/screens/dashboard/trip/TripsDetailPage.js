import { Card, Col, Row, Image, Container } from "react-bootstrap";
import BuildingImg from '../../../assets/images/building/10.webp';
import LocationIcon from '../../../assets/images/icons/location.svg';
import HostMessageIcon from '../../../assets/images/icons/hostmessage.svg';
import PlaceIcon from '../../../assets/images/icons/place.svg';
import { FaStar, FaAngleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function TripsDetailPage() {
    return (
        <div className="TripsDetailPage my-2">
            <NavLink to="/dashboard/rent/trips" className="nav-link text-purple fw-bold fs-6 my-2"><FaAngleLeft className="me-2" />Back</NavLink>
            <div className="fs-4 fw-bold">My Trips / detail</div>
            <div className="fs-6 opacity-50">Your history of trips you been on.</div>
            <Card>
                <Row>
                    <Col sm={12} md={3} className="pe-0">
                        <Image src={BuildingImg} width="100%" height="250" style={{ objectFit: "cover" }} />
                        <Container>
                            <Row className="my-2 py-1 border-bottom">
                                <Col sm={6} md={6} className="border-end border-gray">
                                    <small className="text-gray">Check-in</small>
                                    <div className="fs-6 fw-bold">Thu, 2 Mar</div>
                                    <div className="fs-6 fw-bold">15:00</div>
                                </Col>
                                <Col sm={6} md={6}>
                                    <small className="text-gray">Check-out</small>
                                    <div className="fs-6 fw-bold">Mon, 13 Mar</div>
                                    <div className="fs-6 fw-bold">15:00</div>
                                </Col>
                            </Row>
                            <div className="mt-2 pb-1 border-bottom d-flex align-items-center">
                                <Image src={LocationIcon} width="40" height="40" className="me-2" />
                                <div className="">
                                    <div className="fs-6 fw-bold">Location</div>
                                    <small>Address : Green Pointe drice 2</small>
                                </div>
                            </div>
                            <div className="my-2 pb-1 border-bottom d-flex align-items-center">
                                <Image src={HostMessageIcon} width="40" height="40" className="me-2" />
                                <div className="">
                                    <div className="fs-6 fw-bold">Message your host</div>
                                    <small>Host : sei14zd...0qzk</small>
                                </div>
                            </div>
                            <div className="my-2 pb-1 border-bottom d-flex align-items-center">
                                <Image src={PlaceIcon} width="40" height="40" className="me-2" />
                                <div className="">
                                    <div className="fs-6 fw-bold">Your place</div>
                                    <small>House in Gothenburg 56 on Trendy Ring Island</small>
                                </div>
                            </div>
                            <div className="my-2 pb-1 border-bottom">
                                <div className="fs-6 fw-bold">Rating & Review</div>
                                <small className="d-flex align-items-center"><FaStar className="text-orange me-2" /><FaStar className="text-orange me-2" /><FaStar className="text-orange me-2" /><FaStar className="text-orange me-2" /><FaStar className="text-gray me-2" />4 / 5</small>
                            </div>
                            <div className="my-2 pb-1 border-bottom">
                                <small>Place was well kept and clean. Food was amazing too. We really enjoyed the trip and we were really taken care of. Will be coming back again in the Summer!</small>
                            </div>
                            <div className="mt-2 pb-1">
                                <div className="fs-6 fw-bold mb-3">Reservation Details</div>
                                <small>Adults : 2</small><br/>
                                <small>Kids : 1</small>
                            </div>
                        </Container>
                    </Col>
                    <Col sm={12} md={9} className="ps-0">
                        <iframe className="w-100 rounded h-100" src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}