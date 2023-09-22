import { Badge, Image, Card, Button, Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BuildingImg from '../../../assets/images/building/11.webp';
import CheckboxIcon from '../../../assets/images/icons/checkbox-user.svg';
import { FaRegBell } from "react-icons/fa";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function ReservationPage() {
    return (
        <div className="ReservationPage my-2 position-relative">
            <div className="fs-4 fw-bold">Activity</div>
            <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
            <div className="d-flex align-items-end justify-content-between my-2">
                <div className="fs-5 fw-bold">Your reservations</div>
                <small className="fw-bold">All reservations (20)</small>
            </div>
            <div className="d-flex align-items-center">
                <span className="border-gray border rounded-5 d-flex align-items-center me-3 px-2 py-1"><Badge className="bg-white rounded-5 text-gray border-gray">Checking out (0)</Badge></span>
                <span className="border-gray border rounded-5 d-flex align-items-center me-3 px-2 py-1"><Badge className="bg-white rounded-5 text-gray border-gray">Currently hosting (0)</Badge></span>
                <span className="border-gray border rounded-5 d-flex align-items-center me-3 px-2 py-1"><Badge className="bg-white rounded-5 text-gray border-gray">Arriving soon (0)</Badge></span>
                <span className="border-gray border rounded-5 d-flex align-items-center me-3 px-2 py-1"><Badge className="bg-white rounded-5 text-gray border-gray">Upcoming (0)</Badge></span>
                <span className="border-gray border rounded-5 d-flex align-items-center me-3 px-2 py-1"><Badge className="bg-white rounded-5 text-gray border-gray">Pending review (0)</Badge></span>
            </div>
            <Container className="mx-auto w-100">
                <Carousel responsive={responsive} className="my-3">
                    <div className="reservation-carousel-item mx-2">
                        <Card className="border-dark-purple rounded-3 overflow-hidden">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <small className="fw-bold">Arriving in 72 days</small>
                                        <p className="mt-3 mb-0 fw-bold">Bill</p>
                                    </div>
                                    <Image src={BuildingImg} width="50" height="50" className="rounded-circle" />
                                </div>
                                <div className="my-2 fw-bold">10-11 Apr</div>
                            </Card.Body >
                            <Card.Footer className="bg-white border-dark-purple border-top-1 text-center">
                                <Button className="bg-white border-white fw-bold text-dark-purple">Message</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="reservation-carousel-item mx-2">
                        <Card className="border-dark-purple rounded-3 overflow-hidden">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <small className="fw-bold">Arriving in 72 days</small>
                                        <p className="mt-3 mb-0 fw-bold">Bill</p>
                                    </div>
                                    <Image src={BuildingImg} width="50" height="50" className="rounded-circle" />
                                </div>
                                <div className="my-2 fw-bold">10-11 Apr</div>
                            </Card.Body >
                            <Card.Footer className="bg-white border-dark-purple border-top-1 text-center">
                                <Button className="bg-white border-white fw-bold text-dark-purple">Message</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="reservation-carousel-item mx-2">
                        <Card className="border-dark-purple rounded-3 overflow-hidden">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <small className="fw-bold">Arriving in 72 days</small>
                                        <p className="mt-3 mb-0 fw-bold">Bill</p>
                                    </div>
                                    <Image src={BuildingImg} width="50" height="50" className="rounded-circle" />
                                </div>
                                <div className="my-2 fw-bold">10-11 Apr</div>
                            </Card.Body >
                            <Card.Footer className="bg-white border-dark-purple border-top-1 text-center">
                                <Button className="bg-white border-white fw-bold text-dark-purple">Message</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="reservation-carousel-item mx-2">
                        <Card className="border-dark-purple rounded-3 overflow-hidden">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <small className="fw-bold">Arriving in 72 days</small>
                                        <p className="mt-3 mb-0 fw-bold">Bill</p>
                                    </div>
                                    <Image src={BuildingImg} width="50" height="50" className="rounded-circle" />
                                </div>
                                <div className="my-2 fw-bold">10-11 Apr</div>
                            </Card.Body >
                            <Card.Footer className="bg-white border-dark-purple border-top-1 text-center">
                                <Button className="bg-white border-white fw-bold text-dark-purple">Message</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="reservation-carousel-item mx-2">
                        <Card className="border-dark-purple rounded-3 overflow-hidden">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <small className="fw-bold">Arriving in 72 days</small>
                                        <p className="mt-3 mb-0 fw-bold">Bill</p>
                                    </div>
                                    <Image src={BuildingImg} width="50" height="50" className="rounded-circle" />
                                </div>
                                <div className="my-2 fw-bold">10-11 Apr</div>
                            </Card.Body >
                            <Card.Footer className="bg-white border-dark-purple border-top-1 text-center">
                                <Button className="bg-white border-white fw-bold text-dark-purple">Message</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </Carousel>
            </Container>
            <div className="my-3">
                <Card className="border-gray">
                    <Card.Body className="text-center">
                        <Image src={CheckboxIcon} width="70" height="70" className="d-block mx-auto" />
                        <Button className="my-3 bg-dark-purple text-white fw-bold border-dark-purple d-block mx-auto">New booking request <FaRegBell className="ms-2" /></Button>
                        <small className="text-gray">You don’t have any guests checking out today or tomorrow</small>
                    </Card.Body>
                </Card>
            </div>
            <div className="mt-5">
                <div className="fw-bold mb-3">Share more details</div>
                <Button className="bg-dark-purple text-white fw-bold border-dark-purple">Edit your listings</Button>
            </div>
        </div>
    )
}