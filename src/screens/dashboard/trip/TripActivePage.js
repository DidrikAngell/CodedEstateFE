import { Container, Button, Card, Row, Col, Image, Tabs, Tab, Modal } from "react-bootstrap";
import Banner1 from '../../../assets/images/banners/trips.png';
import BuildingImg from '../../../assets/images/building/4.webp';
import BuildingImg1 from '../../../assets/images/building/4.webp';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DetailCarousel } from "../../../components/carousel/Carousel";
import { DetailData } from "../../../utils/data";
import TrackIcon from '../../../assets/images/icons/track.svg';
import HostMessageIcon from '../../../assets/images/icons/hostmessage.svg';

export default function TripActivePage() {
    return (
        <div className="TripActivePage my-2">
            <div className="fs-4 fw-bold mb-2">My Trips</div>
            <div className="fs-6 opacity-50 mb-2">Upcoming reservations</div>
            <Row className="py-2">
                <Col sm={12} md={8}>
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
                    <div className="d-flex align-items-center">
                        <Image src={BuildingImg1} className="rounded-2 me-2 border" width="80" height="80" style={{ objectFit: "cover" }} />
                        <div className="">
                            <div className="fw-bold mb-1">Gamle Oslo</div>
                            <div className="text-gray">Hosted by Per-Christian</div>
                            <div className="text-gray">20 May 2022 - 22 May 2022</div>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={4} className="my-2">
                    <div className="d-flex align-items-center">
                        <Image src={BuildingImg1} className="rounded-2 me-2 border" width="80" height="80" style={{ objectFit: "cover" }} />
                        <div className="">
                            <div className="fw-bold mb-1">Gamle Oslo</div>
                            <div className="text-gray">Hosted by Per-Christian</div>
                            <div className="text-gray">20 May 2022 - 22 May 2022</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <div className="text-gray">Can't find your reservation here? <u className="text-dark-purple">Visit the Help Centre</u></div>
        </div>
    )
}