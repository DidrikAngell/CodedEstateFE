import { Row, Col, Image, Button } from "react-bootstrap";
import BuildingImg from '../../../assets/images/building/13.webp';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ReviewsPage() {
    return (
        <div className="ReviewsPage my-2">
            <div className="fs-4 fw-bold">Overall Reviews</div>
            <div className="fs-6 opacity-50">Your reviews summarized</div>

            <div className="my-3">
                <Row className="py-3 px-1 mb-2 border-gray bg-white rounded border">
                    <Col md={4} className="fw-bold fs-6">Properties</Col>
                    <Col md={2} className="fw-bold fs-6">Newest Rating By</Col>
                    <Col md={2} className="fw-bold fs-6">Newest Rating Date</Col>
                    <Col md={2} className="fw-bold fs-6">Overall Rating</Col>
                    <Col md={2} className="fw-bold fs-6"> </Col>
                </Row>
                <Row className="py-2 px-1 mb-2 border-gray bg-white rounded border align-items-center">
                    <Col md={4} className="d-flex align-items-center">
                        <Image src={BuildingImg} width="70" height="40" style={{ objectFit: 'cover' }} className="border-gray rounded border me-3" />
                        <div className="fw-semibold">Kent Avenue #310</div>
                    </Col>
                    <Col md={2}><div className="fw-semibold">sei14zd...0qzk</div></Col>
                    <Col md={2}><small>2 days ago</small></Col>
                    <Col md={2} className="d-flex align-items-center">
                        <FaStar className="text-orange me-2" />
                        <FaStar className="text-orange me-2" />
                        <FaStar className="text-orange me-2" />
                        <FaStar className="text-orange me-2" />
                        <FaStar className="text-gray me-2" />
                        4 / 5
                    </Col>
                    <Col md={2} className="fw-bold fs-6 text-end">
                        <Link to='detail/1'>
                            <Button className="border-dark-purple bg-white fw-bold rounded text-dark-purple px-4">View</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}