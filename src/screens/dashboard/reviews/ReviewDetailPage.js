import { Card, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import BuildingImg from '../../../assets/images/building/14.webp';

export default function ReviewDetailPage() {
    return (
        <div className="ReviewDetailPage my-2">
            <div className="fs-4 fw-bold">My Ratings for Kent Avenue #310</div>
            <div className="fs-6 opacity-50">My current rating.</div>
            <div className="my-4">
                <div className="d-flex align-items-end">
                    <div className="fs-5 fw-bold">Overall Rating</div>
                    <small className="text-gray ms-3">• Overall rating in the last year</small>
                </div>
            </div>
            <div className="fs-5 d-flex align-items-center">
                <FaStar className="me-2 text-orange fs-4" />
                <FaStar className="me-2 text-orange fs-4" />
                <FaStar className="me-2 text-orange fs-4" />
                <FaStar className="me-2 text-orange fs-4" />
                <FaStar className="me-2 text-gray fs-4" />
                4 / 5
            </div>
            <div className="my-3">
                <Card className="border-dark-purple">
                    <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-3">
                                <div className="mb-2 text-center">
                                    <Image src={BuildingImg} width="120" height="120" style={{ objectFit: "cover" }} className="rounded-circle border border-dark-purple mx-3" />
                                </div>
                                <div className="fs-6 fw-bold">Kent Avenue #310</div>
                            </div>
                            <div className="">
                                <div className="fs-6 fw-bold">sei14zd...0qzk</div>
                                <small>2 days ago</small>
                                <div className="fs-6 d-flex align-items-center">
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-gray" />
                                    4 / 5
                                </div>
                                <div className="mt-2">It was the perfect size and space for what I needed. Very clean and comfortable. I originally booked a single, but was upgraded to a double.  I think it would have definitely on the small side if I were sharing that space it another person, though. The hotel staff was very kind and accommodating.</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-3">
                                <div className="mb-2 text-center">
                                    <Image src={BuildingImg} width="120" height="120" style={{ objectFit: "cover" }} className="rounded-circle border border-dark-purple mx-3" />
                                </div>
                                <div className="fs-6 fw-bold">Kent Avenue #310</div>
                            </div>
                            <div className="">
                                <div className="fs-6 fw-bold">sei14zd...0qzk</div>
                                <small>2 days ago</small>
                                <div className="fs-6 d-flex align-items-center">
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-gray" />
                                    4 / 5
                                </div>
                                <div className="mt-2">It was the perfect size and space for what I needed. Very clean and comfortable. I originally booked a single, but was upgraded to a double.  I think it would have definitely on the small side if I were sharing that space it another person, though. The hotel staff was very kind and accommodating.</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-3">
                                <div className="mb-2 text-center">
                                    <Image src={BuildingImg} width="120" height="120" style={{ objectFit: "cover" }} className="rounded-circle border border-dark-purple mx-3" />
                                </div>
                                <div className="fs-6 fw-bold">Kent Avenue #310</div>
                            </div>
                            <div className="">
                                <div className="fs-6 fw-bold">sei14zd...0qzk</div>
                                <small>2 days ago</small>
                                <div className="fs-6 d-flex align-items-center">
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-orange" />
                                    <FaStar className="me-2 text-gray" />
                                    4 / 5
                                </div>
                                <div className="mt-2">It was the perfect size and space for what I needed. Very clean and comfortable. I originally booked a single, but was upgraded to a double.  I think it would have definitely on the small side if I were sharing that space it another person, though. The hotel staff was very kind and accommodating.</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}