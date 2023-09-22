import { Row, Col, Image, Form, Button, Card, Dropdown, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/banners/trips.png';
import Building from '../../assets/images/building/14.webp';
import { FaStar } from "react-icons/fa";
import SEI from '../../assets/images/crypto/sei.svg';
import { store } from '../../configs/Store';
import { useState } from 'react';
import Logo from '../../assets/images/Logo.svg';
import DocumentImg from '../../assets/images/icons/document.svg';

export const BuyBookMode = () => {
    const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="BuyBookMode mb-4">
            <Row>
                <Col sm={12} md={6}>
                    <div className='fs-5 fw-semibold my-2'>Verify</div>
                    <Button className="bg-dark-purple border-dark-purple text-white fw-bold w-100 py-2" onClick={handleShow}>Due Diligence</Button>
                    <div className='fs-5 fw-semibold my-2'>Pay with</div>
                    <Dropdown>
                        <Dropdown.Toggle className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between" id="dropdown-basic">
                            <div><Image src={SEI} className='me-2' />SEI</div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                            <Dropdown.Item className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between"><div><Image src={SEI} className='me-2' />SEI</div></Dropdown.Item>
                            <Dropdown.Item className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between"><div><Image src={SEI} className='me-2' />SEI</div></Dropdown.Item>
                            <Dropdown.Item className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between"><div><Image src={SEI} className='me-2' />SEI</div></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr />
                    <div className='fs-5 fw-semibold my-2'>Reserve to Buy</div>
                    <div className='fs-6 fw-bold'>Message the Seller</div>
                    <small className="text-gray mb-2">Let the Host know why you’re traveling and when you’ll check in</small>
                    <div className="d-flex align-items-center my-2">
                        <Image src={Avatar} width="50" height="50" style={{ objectFit: "cover" }} className="rounded-circle me-2" />
                        <div className='d-flex flex-column'>
                            <small className='fw-bold'>Anders</small>
                            <small className='text-gray'>Joined in 2016</small>
                        </div>
                    </div>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                    <hr />
                    <Link to="/dashboard/buy/transactions" ><Button className="bg-dark-purple border-dark-purple text-white fw-bold w-100 py-2">Reserve to buy</Button></Link>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Body>
                            <div className='d-flex aling-items-center'>
                                <Image src={Building} width="100" height="100" className='rounded me-2' />
                                <div className='d-flex flex-column justify-content-between'>
                                    <small className='text-gray'>Entire carni</small>
                                    <div>Sjusj@en  New, Modern retreat at prime location</div>
                                    <small><FaStar className='text-orange me-2' />4.96(28 reviews)</small>
                                </div>
                            </div>
                            <hr />
                            <div className="fw-bold my-2">Send Message</div>
                            <div className='text-gray d-flex align-items-center justify-content-between my-3'>
                                <div>Price</div>
                                <div>SEI 9650</div>
                            </div>
                            <div className='text-gray d-flex align-items-center justify-content-between my-3'>
                                <div>Service fee</div>
                                <div>SEI  0</div>
                            </div>
                            <hr />
                            <div className='d-flex aling-items-center justify-content-between fs-5 fw-bold'>
                                <div>Total Amount</div>
                                <div>SEI  9650</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} size="xl" centered>
                <Modal.Header className="d-flex align-items-center justify-content-between">

                    <Image src={Logo} height="50" />
                    <Button className="border-gray rounded-5 border bg-white text-dark-purple" onClick={handleClose}>Save & exit</Button>
                </Modal.Header>
                <Modal.Body className="bg-white-custom">
                    <div className="fs-5 fw-bold">Due Diligence</div>
                    <small className="text-gray mb-3">Documents that require uploading for verification for <b>Kent Avenue #310.</b></small>
                    <div className="badge-group mb-3"></div>
                    <div className="Document-tabl p-2" style={{ minHeight: "50vh" }}>
                        <Row className="Document-table-header py-3 my-2 bg-white rounded border">
                            <Col md={4} className="fs-6 fw-bold">Document Required</Col>
                            <Col md={2} className="fs-6 fw-bold">Update</Col>
                            <Col md={2} className="fs-6 fw-bold">Expiry Date</Col>
                            <Col md={2} className="fs-6 fw-bold">Status</Col>
                            <Col md={2}> </Col>
                        </Row>
                        <Row className="Document-table-body py-2 my-2 bg-white align-items-center border rounded">
                            <Col md={4}>
                                <div className="d-flex align-items-center">
                                    <Image src={DocumentImg} width="35" />
                                    <small className="ms-3">Title Report</small>
                                </div>
                            </Col>
                            <Col md={2}><small>2 days ago</small></Col>
                            <Col md={2}><small>48 days left</small></Col>
                            <Col md={2}><b>Pending</b></Col>
                            <Col md={2}><Button className="bg-white border rounded text-dark-purple px-3 fw-bold">Upload</Button></Col>
                        </Row>
                        <Row className="Document-table-body py-2 my-2 bg-white align-items-center border rounded">
                            <Col md={4}>
                                <div className="d-flex align-items-center">
                                    <Image src={DocumentImg} width="35" />
                                    <small className="ms-3">Title Report</small>
                                </div>
                            </Col>
                            <Col md={2}><small>2 days ago</small></Col>
                            <Col md={2}><small>48 days left</small></Col>
                            <Col md={2}><b>Pending</b></Col>
                            <Col md={2}><Button className="bg-white border rounded text-dark-purple px-3 fw-bold">Upload</Button></Col>
                        </Row>
                        <Row className="Document-table-body py-2 my-2 bg-white align-items-center border rounded">
                            <Col md={4}>
                                <div className="d-flex align-items-center">
                                    <Image src={DocumentImg} width="35" />
                                    <small className="ms-3">Title Report</small>
                                </div>
                            </Col>
                            <Col md={2}><small>2 days ago</small></Col>
                            <Col md={2}><small>48 days left</small></Col>
                            <Col md={2}><b>Pending</b></Col>
                            <Col md={2}><Button className="bg-white border rounded text-dark-purple px-3 fw-bold">Upload</Button></Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export const RentBookMode = () => {
    const [mode, setMode, updateMode] = store.useState('Mode');
    return (
        <div className="RentBookMode mb-4">
            <Row>
                <Col sm={12} md={6}>
                    <div className='fs-5 fw-semibold my-2'>Your Trip</div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                        <div>
                            <div className="fs-6 fw-bold">Dates</div>
                            <div className="fs-6 text-gray">Jan 24 - 26</div>
                        </div>
                        <Link to="" className='fs-6 fw-bold text-dark-purple'><u>Edit</u></Link>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                        <div>
                            <div className="fs-6 fw-bold">Dates</div>
                            <div className="fs-6 text-gray">Jan 24 - 26</div>
                        </div>
                        <Link to="" className='fs-6 fw-bold text-dark-purple'><u>Edit</u></Link>
                    </div><hr />

                    <div className='fs-5 fw-semibold my-2'>Pay with</div>
                    <Dropdown>
                        <Dropdown.Toggle className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between" id="dropdown-basic">
                            <div><Image src={SEI} className='me-2' />SEI</div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                            <Dropdown.Item className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between"><div><Image src={SEI} className='me-2' />SEI</div></Dropdown.Item>
                            <Dropdown.Item className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between"><div><Image src={SEI} className='me-2' />SEI</div></Dropdown.Item>
                            <Dropdown.Item className="bg-white border-dark-purple text-dark-purple w-100 py-2 d-flex align-items-center justify-content-between"><div><Image src={SEI} className='me-2' />SEI</div></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr />
                    <div className='fs-5 fw-semibold my-2'>Required for your trip</div>
                    <div className='fs-6 fw-bold'>Message the Host</div>
                    <small className="text-gray mb-2">Let the Host know why you’re traveling and when you’ll check in</small>
                    <div className="d-flex align-items-center my-2">
                        <Image src={Avatar} width="50" height="50" style={{ objectFit: "cover" }} className="rounded-circle me-2" />
                        <div className='d-flex flex-column'>
                            <small className='fw-bold'>Anders</small>
                            <small className='text-gray'>Joined in 2016</small>
                        </div>
                    </div>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                    <hr />
                    <div className='fs-5 fw-semibold my-2'>Cancellation policy</div>
                    <small className="text-gray">This reservation is non-refundable. <strong><u>Learn more</u></strong></small>
                    <hr />
                    <Link to="/dashboard/rent/trips"><Button className="bg-dark-purple border-dark-purple text-white fw-bold w-100 py-2" onClick={()=>setMode("RENT")}>Request to book</Button></Link>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Body>
                            <div className='d-flex aling-items-center'>
                                <Image src={Building} width="100" height="100" className='rounded me-2' />
                                <div className='d-flex flex-column justify-content-between'>
                                    <small className='text-gray'>Entire carni</small>
                                    <div>Sjusj@en  New, Modern retreat at prime location</div>
                                    <small><FaStar className='text-orange me-2' />4.96(28 reviews)</small>
                                </div>
                            </div>
                            <hr />
                            <div>Your booking is protected by Coded Estate</div>
                            <hr />
                            <div className="fw-bold my-2">Send Message</div>
                            <div className='text-gray d-flex align-items-center justify-content-between my-3'>
                                <div>SEI 357 X 27 nights</div>
                                <div>SEI 9650</div>
                            </div>
                            <div className='text-gray d-flex align-items-center justify-content-between my-3'>
                                <div>Cleaning fee</div>
                                <div>SEI  131</div>
                            </div>
                            <div className='text-gray d-flex align-items-center justify-content-between my-3'>
                                <div>Service fee</div>
                                <div>SEI  0</div>
                            </div>
                            <hr />
                            <div className='d-flex aling-items-center justify-content-between fs-5 fw-bold'>
                                <div>Total Amount</div>
                                <div>SEI  9781</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}