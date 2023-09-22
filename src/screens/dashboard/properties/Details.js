import React from "react";
import {
  Col,
  Image,
  Row,
  Button,
  Card,
  Form,
  Dropdown,
  Modal
} from "react-bootstrap";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import GalleryImg1 from '../../../assets/images/building/10.webp';
import GalleryImg2 from '../../../assets/images/building/3.webp';
import GalleryImg3 from '../../../assets/images/building/4.webp';
import GalleryImg4 from '../../../assets/images/building/5.webp';
import GalleryImg5 from '../../../assets/images/building/6.webp';
import SEI from '../../../assets/images/crypto/sei.svg';
import Star from '../../../assets/images/icons/star.svg';
import Check from '../../../assets/images/icons/check.svg';
import Logo from '../../../assets/images/Logo.svg';
import { FaAngleLeft } from "react-icons/fa";
import { store } from "../../../configs/Store";
import { DateObject } from "react-multi-date-picker";
import { RentBookMode } from "../../../components/modal/BookingMode";
import { AiOutlineClose } from "react-icons/ai";
import { DetailData } from "../../../utils/data";
import Viewer from 'react-viewer';

export default function PropertiesDetail() {
  const { state } = useLocation();
  //{ title, price, currency, images }

  const [type, setType, updateType] = store.useState("DetailType");
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");
  const [mode, setMode, updateMode] = store.useState("Mode");
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const [values, setValues] = useState([
    new DateObject().setDay(4).subtract(1, "month"),
    new DateObject().setDay(4).add(1, "month")
  ])
  const [messageModal, setMessageModal] = useState(false);
  const [host, setHost] = useState(false);
  const [viewerData, setViewerData] = React.useState([]);

  React.useEffect(() => {
    try {
      let _viewerData = []
      for (let i = 0; i < state.images.length; i++) {
        _viewerData.push({
          src: state.images[i]?.src,
          alt: "Viewer"
        });
      }
      setViewerData(_viewerData);
    } catch (e) {
  
    }
  }, [])


  const showMessageModal = () => {
    setMessageModal(true);
  }
  const hideMessageModal = () => {
    setMessageModal(false);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="PropertiesDetail">
      <Link to="/dashboard/buy/properties" className="nav-link text-purple fw-bold fs-6 my-2"><FaAngleLeft className="me-2" />Back</Link>
      <div className="fs-4 fw-bold">NFT details</div>
      <div className="fs-6 opacity-50 mb-3">
        Welcome to Coede Estate Property Admin
      </div>
      <div className="fs-5 fw-bold mb-2">{state?.title}</div>
      <div className="d-flex align-items-center justify-content-between">
        <div className=""><u>{state?.title}</u></div>
        <div className="d-flex align-items-center">
          <Link className="nav-link opacity-50"><AiOutlineUpload className="me-2" />Share</Link>
          <Link className="nav-link ms-4 opacity-50"><AiOutlineHeart className="me-2" />Save</Link>
        </div>
      </div>
      <div className="NFTGallary my-3 border-bottom pb-3">
        <div className="d-flex align-items-center justify-content-between gap-2 rounded overflow-hidden" onClick={() => { setVisible(true); }}>
          <div className="w-50 overflow-hidden" style={{ height: '500px', minHeight: 500 }}><Image src={state?.images[0]?.src} width="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
          <div className="w-50 overflow-hidden" style={{ height: '500px' }}>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[1]?.src} width="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[2]?.src} width="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[3]?.src} width="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[4]?.src} width="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
            </div>
          </div>
        </div>
      </div>
      <Row className="my-2">
        <Col sm={12} md={8}>
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
            <div className="">
              {mode == "BUY" ? (
                <div className="fw-semibold fs-5 mb-3">Entire villa sold by sei14zd...0qzk</div>
              ) : (
                <div className="fw-semibold fs-5 mb-3">Entire villa Hosted by sei14zd...0qzk</div>
              )}
              <div className="d-flex align-items-center text-gray">
                <small className="me-2">5 guests</small>
                <small className="me-2">3 bedrooms</small>
                <small className="me-2">3 beds</small>
                <small className="me-2">3 baths</small>
              </div>
            </div>
            <Image src={GalleryImg3} width="80" height="80" className="rounded-circle" />
          </div>
          {mode != "BUY" && (
            <div className="border-bottom pb-3">
              <div className="d-flex my-2">
                <Image src={Star} width="25" height="25" />
                <div className="">
                  <div className="fw-semibold fs-6 mb-2">Dive right in</div>
                  <div className="text-gray">this is one of the few places in the area with a pool.</div>
                </div>
              </div>
              <div className="d-flex my-2">
                <Image src={Star} width="25" height="25" />
                <div className="">
                  <div className="fw-semibold fs-6 mb-2">Experienced host</div>
                  <div className="text-gray">Bookiply has 1429 reviews for other places</div>
                </div>
              </div>
              <div className="d-flex my-2">
                <Image src={Star} width="25" height="25" />
                <div className="">
                  <div className="fw-semibold fs-6 mb-2">Dive right in</div>
                  <div className="text-gray">Booliply has revieved 5-star ratings from 100% of recent guest.</div>
                </div>
              </div>
            </div>
          )}
          <div className="border-bottom pb-3">
            <Image src={Logo} className="mt-3" />
            <div className="my-3 text-gray">
              {mode == "BUY" ? (
                "Every transaction includes the possibility for undercollateralized loans through Coded Estate´s partners."
              ) : (
                "Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in."
              )}

            </div>
            <div className="text-dark-purple">Learn more</div>
          </div>
          <div className="border-bottom py-3">
            <div className="text-gray">The new Villa Goyen - The View House impresses with its exclusive location and the unique panoramic views of the surrounding mountain panorama and the Merano valley basin. The large window areas, the elegant sun terraces with glass balustrade and the modern Desgin make the mansion Goyen an exclusive vacation domicile, which fulfills highest requirements at cosiness, comfort and situation. 200m² living space, 400m² garden, sun terrace and roof terrace with floating bed. 3 suites all with terrace.</div>
            <div className="text-dark-purple"><u>Show more</u></div>
          </div>
          <div className="border-bottom py-3">
            <div className="fw-semibold fs-5 mb-3">What this place offers</div>
            <Row>
              <Col sm={12} md={10} className="row">
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Garden view</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">City skyline view</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Kitchen</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Wifi</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Dedicated workspace</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Free parking on premiese</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Pool</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Carbon monoxide alarm</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">Smoke alarm</span></Col>
                <Col sm={12} md={6}><Image src={Star} className="me-2 my-1" /><span className="text-gray">TV</span></Col>
              </Col>
            </Row>
            <Button className="text-dark-purple bg-white border-gray fw-bold mt-3">Show all 41 amenities</Button>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <Card className="shadow">
            {mode != "BUY" ? (
              <div>
                {type == "verify" && (

                  <Card.Body>
                    <div className="fs-6 fw-semibold mb-2">Property Listing Details</div>
                    <div className="border rounded">
                      <Dropdown>
                        <label className="ms-2 fw-middle">CURRENCY</label>
                        <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple" id="dropdown-basic">
                          <div className="d-flex align-items-center">
                            <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className="border-top">
                        <label className="ms-2 fw-middle" muted>PRICE</label>
                        <Form.Control
                          type="number"
                          id="inputPassword5"
                          placeholder="125,000,000"
                          className="border-0"
                        />
                      </div>
                      <div className="border-top px-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <div className="d-flex align-items-center justify-content-between">
                            <Form.Label className="">Availability</Form.Label>
                          </div>
                          <DatePicker
                            value={values}
                            onChange={setValues}
                            range
                            numberOfMonths={2}
                            showOtherDays
                            className="d-flex"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <NavLink to="/dashboard/rent/properties" onClick={()=>setTabKey(1)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Edit Price</Button>
                    </NavLink>
                    <NavLink to="/dashboard/rent/properties" onClick={()=>setTabKey(3)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">List Property</Button>
                    </NavLink>
                  </Card.Body>
                )}
                {type == "listing" && (
                  <Card.Body>
                    <div className="fs-6 fw-semibold mb-2">Property Listing Details</div>
                    <div className="border rounded">
                      <Dropdown>
                        <label className="ms-2 fw-middle">CURRENCY</label>
                        <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple" id="dropdown-basic">
                          <div className="d-flex align-items-center">
                            <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className="border-top">
                        <label className="ms-2 fw-middle" muted>PRICE</label>
                        <Form.Control
                          type="number"
                          id="inputPassword5"
                          placeholder="125,000,000"
                          className="border-0"
                        />
                      </div>
                      <div className="border-top px-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <div className="d-flex align-items-center justify-content-between">
                            <Form.Label className="">Availability</Form.Label>
                            {/* <Form.Label className="me-2">CHECKOUT</Form.Label> */}
                          </div>
                          <DatePicker
                            value={values}
                            onChange={setValues}
                            range
                            numberOfMonths={2}
                            showOtherDays
                            className="d-flex"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <NavLink to="/dashboard/rent/properties" onClick={()=>setTabKey(3)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Edit Price</Button>
                    </NavLink>
                    <NavLink to="/dashboard/rent/properties" onClick={()=>setTabKey(1)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Unlist Property</Button>
                    </NavLink>
                  </Card.Body>
                )}
                {type == "bid" && (
                  <Card.Body>
                    <div className="fs-6 fw-semibold mb-3"><span className="me-1"><Image src={SEI} width="18" className="me-1" />357</span><small className="text-gray">night</small></div>
                    <div className="border-gray rounded border p-2">
                      <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <div className="d-flex align-items-center justify-content-between">
                            <Form.Label className="fw-semibold">CHECK-IN</Form.Label>
                            <Form.Label className="fw-semibold me-2">CHECKOUT</Form.Label>
                          </div>
                          <DatePicker
                            value={values}
                            onChange={setValues}
                            range
                            numberOfMonths={2}
                            showOtherDays
                            className="d-flex"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="fw-semibold">GUESTS</Form.Label>
                          <Form.Select className="text-gray border-0">
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                    </div>
                    <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={handleShow}>Update Reservation</Button>

                    <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={() => { setHost(false); showMessageModal() }}>Send Message</Button>


                    <div className="my-3 text-gray text-center">You will not be charged yet. You will be required to sign a message from your wallet to confirm the reservation</div>
                    <div className="d-flex align-items-center justify-content-between my-2"><small className="text-gray">357 SEI X 27 night</small><small className="text-gray">9,650 SEI</small></div>
                    <div className="d-flex align-items-center justify-content-between my-2"><small className="text-gray">Cleaning fee</small><small className="text-gray">131 SEI</small></div>
                    <div className="d-flex align-items-center justify-content-between my-2"><small className="text-gray">Service fee</small><small className="text-gray">0 SEI</small></div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between my-2"><div className="fs-6 fw-bold">Total</div><div className="fs-6 fw-bold"><Image src={SEI} width="20" className="me-1" />9,781 SEI</div></div>

                  </Card.Body>
                )}
              </div>
            ) : (
              <div>
                {type == "verify" && (
                  <Card.Body>
                    <div className="fs-6 fw-semibold mb-2">Property Listing Details</div>
                    <div className="border rounded">
                      <Dropdown>
                        <label className="ms-2 fw-middle">CURRENCY</label>
                        <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple" id="dropdown-basic">
                          <div className="d-flex align-items-center">
                            <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className="border-top">
                        <label className="ms-2 fw-middle" muted>PRICE</label>
                        <Form.Control
                          type="number"
                          id="inputPassword5"
                          placeholder="125,000,000"
                          className="border-0"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div className="f-semibold">Allow Bids</div>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div className="f-semibold">Min. Price</div>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>
                    <NavLink to="/dashboard/buy/properties" onClick={()=>setTabKey(1)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Edit Price</Button>
                    </NavLink>
                    <NavLink to="/dashboard/buy/properties" onClick={()=>setTabKey(3)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">List Property</Button>
                    </NavLink>
                  </Card.Body>
                )}
                {type == "listing" && (
                  <Card.Body>
                    <div className="fs-6 fw-semibold mb-2">Property Listing Details</div>
                    <div className="border rounded">
                      <Dropdown>
                        <label className="ms-2 fw-middle">CURRENCY</label>
                        <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple" id="dropdown-basic">
                          <div className="d-flex align-items-center">
                            <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="w-100 d-flex align-items-center justify-content-between bg-white border-white text-dark-purple">
                            <div className="d-flex align-items-center">
                              <Image src={SEI} width="30" className="me-2" /><span>SEI</span>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className="border-top">
                        <label className="ms-2 fw-middle" muted>PRICE</label>
                        <Form.Control
                          type="number"
                          id="inputPassword5"
                          placeholder="125,000,000"
                          className="border-0"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div className="f-semibold">Allow Bids</div>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div className="f-semibold">Min. Price</div>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </div>
                    <NavLink to="/dashboard/buy/properties" onClick={()=>setTabKey(3)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Edit Price</Button>
                    </NavLink>
                    <NavLink to="/dashboard/buy/properties" onClick={()=>setTabKey(1)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Unlist Property</Button>
                    </NavLink>
                  </Card.Body>
                )}
                {type == "bid" && (
                  <Card.Body>
                    <div className="fs-6 fw-semibold mb-2 d-flex align-items-center">Highest Bid : <Image src={SEI} width="20" className="mx-1" /><span className="fw-bold fs-5">520 SEI</span></div>
                    <div className="fs-6 fw-semibold mb-2">Bid Price</div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="number" placeholder="Enter your Bid Price" />
                    </Form.Group>
                    <NavLink to="/dashboard/buy/properties" onClick={()=>setTabKey(4)} className="nav-link">
                      <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Update Bid Price</Button>
                    </NavLink>
                    <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={() => { setHost(false); showMessageModal() }}>Send Message</Button>
                    <NavLink to="/dashboard/buy/properties" onClick={()=>setTabKey(4)} className="nav-link">
                      <Button className="text-dark-purple bg-white border-dark-purple fs-5 fw-bold w-100 my-2">Cancel</Button>
                    </NavLink>
                    <div className="my-3 text-gray text-center">You will not be charged yet. You will be required to sign a message from your wallet to confirm the reservation</div>
                  </Card.Body>
                )}
              </div>
            )}
          </Card>
        </Col>
      </Row>
      {mode != "BUY" ? (
        <Row className="my-2 border-bottom pb-3">
          {type == "listing" && (
            <Col sm={12} md={12}>
              <div className="fs-5 fw-bold mb-2">Bookers List</div>
              <div className="BidTable mx-2">
                <Row className="table-header border py-3 rounded mb-2">
                  <Col sm={3} md={3}><strong>Total Price</strong></Col>
                  <Col sm={4} md={4}><strong>Guest</strong></Col>
                  <Col sm={3} md={3}><strong>Date Range</strong></Col>
                  <Col sm={2} md={2}><strong> </strong></Col>
                </Row>
                <div className="table-body">
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}><small className="text-gray"><strong>Adult :</strong> 1 • <strong>Children :</strong> 1 • <strong>Pet :</strong> 1 </small></Col>
                    <Col sm={3} md={3}><small>03/07/2023 ~ 03/10/2023 ( 3 nights )</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}><small className="text-gray"><strong>Adult :</strong> 1 • <strong>Children :</strong> 1 • <strong>Pet :</strong> 1 </small></Col>
                    <Col sm={3} md={3}><small>03/07/2023 ~ 03/10/2023 ( 3 nights )</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}><small className="text-gray"><strong>Adult :</strong> 1 • <strong>Children :</strong> 1 • <strong>Pet :</strong> 1 </small></Col>
                    <Col sm={3} md={3}><small>03/07/2023 ~ 03/10/2023 ( 3 nights )</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}><small className="text-gray"><strong>Adult :</strong> 1 • <strong>Children :</strong> 1 • <strong>Pet :</strong> 1 </small></Col>
                    <Col sm={3} md={3}><small>03/07/2023 ~ 03/10/2023 ( 3 nights )</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          )}

        </Row>
      ) : (
        <Row className="my-2 border-bottom pb-3">
          {type == "listing" && (
            <Col sm={12} md={12}>
              <div className="fs-5 fw-bold">Bid</div>
              <div className="opacity-50 mb-2">Highest Bid : <strong>520 SEI</strong></div>
              <div className="BidTable mx-2">
                <Row className="table-header border py-3 rounded mb-2">
                  <Col sm={3} md={3}><strong>Bid Price</strong></Col>
                  <Col sm={4} md={4}><strong>From</strong></Col>
                  <Col sm={3} md={3}><strong>Bid Date</strong></Col>
                  <Col sm={2} md={2}><strong> </strong></Col>
                </Row>
                <div className="table-body">
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                  <Row className="table-body-row  border py-2 align-items-center rounded mb-2">
                    <Col sm={3} md={3}>
                      <div className="d-flex align-items-center">
                        <Image src={SEI} />
                        <div className="ms-3">
                          <div className="fw-bold">100</div>
                          <div className="text-gray">SEI</div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={4}>sei14zd...0qzk</Col>
                    <Col sm={3} md={3}><small>2 days ago</small></Col>
                    <Col sm={2} md={2} className="text-end">
                      <Button className="bg-white border-gray text-gray" onClick={() => { setHost(true); showMessageModal() }}>Message</Button>
                      <Button className="bg-white border-dark-purple text-dark-purple ms-3">Accept</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          )}

        </Row>
      )}
      {mode != "BUY" && (
        <Row className="my-2 border-bottom pb-3">
          <Col sm={12} md={12}>
            <div className="fs-5 fw-bold mb-3">No reviews (yet)</div>
            <div className="d-flex">
              <AiOutlineHeart className="mt-1" />
              <div className="opacity-50 ms-2">This host has 1,429 reviews for other places<br />to stay. <strong className=""><u>Show other reviews</u></strong></div>
            </div>
          </Col>
        </Row>
      )}
      <Row className="my-2 border-bottom pb-3">
        <Col sm={12} md={12}>
          <div className="fs-5 fw-bold">Where you'll be</div>
          <div className="opacity-50 mb-2">Schenna, Italy</div>
          <iframe className="w-100 rounded" style={{ height: "600px" }} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
        </Col>
      </Row>
      <div className="">
        <Row className="my-2 border-bottom pb-3 pt-3">
          <div className="d-flex align-items-center">
            <Image src={GalleryImg1} width="80" height="80" className="rounded-circle" />
            <div className="ms-3">
              <div className="fw-semibold fs-5 mb-2">{mode == "BUY" ? ("Sold by sei14zd...0qzk") : ("Hosted by sei14zd...0qzk")}</div>
              <div className="text-gray">Joined in April 2018</div>
            </div>
          </div>
          <Col sm={12} md={6} className="my-2">
            <div className="d-flex align-items-center">
              <div className="text-dark-purple d-flex align-items-center">
                <Image src={Check} className="me-3" width="25" height="25" />
                <span>Identify verified</span>
              </div>
            </div>
            <div className="text-gray mt-3">DE<br />Mit Bookiply finden Sie ganz einfach Ihre perfekte Ferienunterkunft. Eine schöne Villa mit Meerblick auf Sardinien? Ein gemütliches Apartment am Gardasee oder ein Chalet in…<span className="ms-2 text-dark-purple"><u>read more</u></span></div>
          </Col>
          <Col sm={12} md={6}>
            <div className="text-gray mb-2">Languages: Nederlands, English, Français, Deutsch, Ελληνικά, Italiano, Português, Español</div>
            <div className="text-gray mb-2">Response rate : 100%</div>
            <div className="text-gray mb-2">Response time : within an hour</div>
            <Button className="border-gray bg-white text-dark-purple" onClick={() => { setHost(true); showMessageModal() }}>
              Contact {mode == "BUY" ? ("seller") : ("host")}
            </Button>
          </Col>
        </Row>
      </div>
      <Modal show={show} size="xl" centered>
        <Modal.Header className="d-flex align-items-center justify-content-between">
          <Image src={Logo} height="50" />
          <Button className="border-gray rounded-5 border bg-white text-dark-purple" onClick={handleClose}>Save & exit</Button>
        </Modal.Header>
        <Modal.Body className="bg-white-custom">
          <RentBookMode />
        </Modal.Body>
      </Modal>
      <Modal show={messageModal} size="sm" centered>
        <Modal.Body>
          <div className="text-end"><AiOutlineClose onClick={hideMessageModal} /></div>
          <div className="fs-5 fw-bold text-center mb-2">Send message to</div>
          {host == true ? (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Receiver Address" className="borer-gray" value="sei14zd...0qzk" readOnly />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Receiver Address" className="borer-gray" value="sei14zd...0qzk" readOnly />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Type your message" className="borer-gray" />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-around">
            <Button className="border-dark-purple bg-white text-dark-purple fw-bold fs-6 px-4" onClick={hideMessageModal}>Cancel</Button>
            {mode != "BUY" ? (
              <NavLink to="/dashboard/rent/message"><Button className="border-dark-purple bg-dark-purple text-white fw-bold fs-6 px-4">Send</Button></NavLink>
            ) : (
              <NavLink to="/dashboard/buy/message"><Button className="border-dark-purple bg-dark-purple text-white fw-bold fs-6 px-4">Send</Button></NavLink>
            )}
          </div>
        </Modal.Body>
      </Modal>
      <Viewer
        visible={visible}
        defaultSize={{width: 600, height: 600}}
        onClose={() => { setVisible(false); }}
        images={viewerData}
      />
    </div>
  );
}
