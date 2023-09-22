import React, { useState } from "react";
import { Button, Col, Image, Row, Table, Card, Form, Modal } from "react-bootstrap";
import { DetailData } from "../../utils/data";
import { BuyBookMode } from "../../components/modal/BookingMode";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { store } from "../../configs/Store";
import { AiOutlineClose } from "react-icons/ai";
import Viewer from 'react-viewer';

import Logo from '../../assets/images/Logo.svg';
import Img1 from '../../assets/images/building/4.webp';
import Icon1 from '../../assets/images/icons/swimming-pool.svg';
import Icon2 from '../../assets/images/icons/star-border.svg';
import Icon3 from '../../assets/images/icons/heart-outline.svg';
import Icon4 from '../../assets/images/icons/majesticons_flower-2-line.svg';
import Icon5 from '../../assets/images/icons/tools-kitchen.svg';
import Icon6 from '../../assets/images/icons/iconoir_desk.svg';
import Icon7 from '../../assets/images/icons/la_swimming-pool.svg';
import Icon8 from '../../assets/images/icons/mdi_smoke-detector-variant-off.svg';
import Icon9 from '../../assets/images/icons/healthicons_city-outline.svg';
import Icon10 from '../../assets/images/icons/wifi-high-bold.svg';
import Icon11 from '../../assets/images/icons/ph_car.svg';
import Icon12 from '../../assets/images/icons/mdi_smoke-detector-off-outline.svg';
import Icon13 from '../../assets/images/icons/ic_round-live-tv.svg';
import GalleryImg1 from '../../assets/images/building/10.webp';
import GalleryImg2 from '../../assets/images/building/3.webp';
import GalleryImg3 from '../../assets/images/building/4.webp';
import GalleryImg4 from '../../assets/images/building/5.webp';
import GalleryImg5 from '../../assets/images/building/6.webp';
import Star from '../../assets/images/icons/star.svg';
import Check from '../../assets/images/icons/check.svg';
import SEI from '../../assets/images/crypto/sei.svg';



export function DetailPage() {
  const { state } = useLocation();
  /**
   {
  title,
  network,
  price,
  images,
  bed,
  bath,
  size,
}
   **/

  const [viewerData, setViewerData] = React.useState([]);
  const [connected, setConnected, updateConnected] = store.useState('Connected');
  const [walletModalShow, setWalletModalShow, updateWalletModalShow] = store.useState("WalletModalShow");
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");
  const [show, setShow] = useState(false);
  const [host, setHost] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  React.useEffect(() => {
    try {
      let _viewerData = []
      for (let i = 0; i < state.images.length; i++) {
        _viewerData.push({
          src: state.images[i],
          alt: "Viewer"
        });
      }
      debugger;
      setViewerData(_viewerData);
    } catch (e) {
  
    }
  }, [])

  const showModal = () => {
    setShow(true);
  }
  const hideModal = () => {
    setShow(false);
  }
  const showMessageModal = () => {
    setMessageModal(true);
  }
  const hideMessageModal = () => {
    setMessageModal(false);
  }
  const handleClose = () => {
    setWalletModalShow(walletModalShow => {
      walletModalShow = false;
      return walletModalShow;
    });
  }
  const handleShow = () => {
    setWalletModalShow(walletModalShow => {
      walletModalShow = true;
      return walletModalShow;
    });
  }
  return (
    <div className="DetailPage my-4 container">
      <Link to="/buy" className="nav-link text-purple fw-bold fs-6 my-2"><FaAngleLeft className="me-2" />Back</Link>
      <div className="fs-5 fw-bold" >{state?.title}</div>
      <div className="d-flex align-items-center justify-content-between my-2">
        <div className="">{state?.title}</div>
        <div className="d-flex align-items-center">
          <span className="ms-5">Share</span>
          <span className="ms-5">Save</span>
        </div>
      </div>
      <div className="NFTGallary my-3 border-bottom pb-3 overflow-hidden" style={{ height: '500px', minHeight: 500 }} onClick={() => { setVisible(true); }}>
        <div className="d-flex align-items-center justify-content-between gap-2 rounded overflow-hidden">
          <div className="w-50 overflow-hidden" style={{ height: '500px' }}><Image src={state?.images[0]} width="100%" height="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
          <div className="w-50 overflow-hidden" style={{ height: '500px' }}>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[1]} width="100%" height="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[2]} width="100%" height="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[3]} width="100%" height="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
              <div className="w-50 overflow-hidden" style={{ height: '250px', minHeight: 250 }}><Image src={state?.images[4]} width="100%" height="100%" style={{ objectFit: "cover", cursor: 'pointer' }} /></div>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col sm={12} md={8}>
          <div className="d-flex align-items-center justify-content-between my-2 border-bottom pb-2">
            <div className="">
              <div className="text-dark-purple fs-5 fw-semibold">Entire villa sold by sei14zd...0qzk</div>
              <div className="text-gray mt-2"><small className="text-gray">5 guests • 3 bedrooms • 3beds • 2baths</small></div>
            </div>
            <Image src={Img1} width="50" height="50" className="rounded-circle" />
          </div>
          <div className="my-2 border-bottom pb-2">
            <Image src={Logo} height="50" className="my-2" />
            <p className="text-gray">Every transaction includes the possibility for undercollateralized loans through Coded Estate´s partners.</p>
            <p className="text-dark-purple fw-semibold">Learn more</p>
          </div>
          <div className="my-2 border-bottom pb-2">
            <p className="text-gray">The new Villa Goyen - The View House impresses with its exclusive location and the unique panoramic views of the surrounding mountain panorama and the Merano valley basin. The large window areas, the elegant sun terraces with glass balustrade and the modern Desgin make the mansion Goyen an exclusive vacation domicile, which fulfills highest requirements at cosiness, comfort and situation.
              200m² living space, 400m² garden, sun terrace and roof terrace with floating bed.
              3 suites all with terrace.</p>
          </div>
          <div className="my-2 border-bottom pb-2">
            <div className="text-dark-purple fs-5 fw-semibold mb-3">What this place offers</div>
            <Col sm={12} md={10} className="row">
              <Col sm={12} md={6}>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon4} width="25" className="me-2" />
                  <div className="text-gray">Garden view</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon5} width="25" className="me-2" />
                  <div className="text-gray">Kitchen</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon6} width="25" className="me-2" />
                  <div className="text-gray">Dedicated workspace</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon7} width="25" className="me-2" />
                  <div className="text-gray">Pool</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon8} width="25" className="me-2" />
                  <div className="text-gray">Smoke alarm</div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon9} width="25" className="me-2" />
                  <div className="text-gray">City skyline view</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon10} width="25" className="me-2" />
                  <div className="text-gray">Wifi</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon11} width="25" className="me-2" />
                  <div className="text-gray">Free parking on premiese</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon12} width="25" className="me-2" />
                  <div className="text-gray">Carbon monoxide alarm</div>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image src={Icon13} width="25" className="me-2" />
                  <div className="text-gray">TV</div>
                </div>
              </Col>
            </Col>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <Card className="shadow">
            <Card.Body>
              <div className="fs-6 fw-semibold mb-2 d-flex align-items-center">Current Price : <Image src={SEI} width="18" className="mx-1" /><span className="fw-bold fs-5">630 SEI</span></div>
              <div className="fs-6 fw-semibold mb-2 d-flex align-items-center">Highest Bid : <Image src={SEI} width="18" className="mx-1" /><span className="fw-bold fs-5">520 SEI</span></div>
              <div className="fs-6 fw-semibold mb-2">Bid Price</div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Enter your Bid Price" />
              </Form.Group>
              {!connected ? (
                <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={handleShow}>Make an Offer</Button>
              ) : (
                <NavLink to="/dashboard/buy/message" onClick={(e) => setTabKey(4)}><Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2">Make an Offer</Button></NavLink>
              )}

              {!connected ? (
                <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={handleShow}>Direct Buy</Button>
              ) : (
                <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={showModal}>Direct Buy</Button>
              )}

              {!connected ? (
                <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={handleShow}>Send Message</Button>
              ) : (
                <Button className="text-white bg-dark-purple border-dark-purple fs-5 fw-bold w-100 my-2" onClick={() => { setHost(false); showMessageModal() }}>Send Message</Button>
              )}
              <div className="my-3 text-gray text-center">You will not be charged yet. You will be required to sign a message from your wallet to confirm the reservation</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-2 border-bottom py-2">
        <div className="text-dark-purple fs-5 fw-semibold mb-3">Where you'll be</div>
        <iframe className="w-100 rounded" style={{ height: "600px" }} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
      </Row>
      <div className="">
        <Row className="my-2 border-bottom pb-3 pt-3">
          <div className="d-flex align-items-center">
            <Image src={GalleryImg1} width="80" height="80" className="rounded-circle" />
            <div className="ms-3">
              <div className="fw-semibold fs-5 mb-2">Sold by sei14zd...0qzk</div>
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
            {!connected ? (
              <Button className="border-gray bg-white text-dark-purple" onClick={handleShow}>Contact seller</Button>
            ) : (
              <Button className="border-gray bg-white text-dark-purple" onClick={() => { setHost(true); showMessageModal() }}>Contact seller</Button>
            )}
          </Col>
        </Row>
      </div>
      <Modal show={show} size="xl" centered>
        <Modal.Header className="d-flex align-items-center justify-content-between">
          <Image src={Logo} height="50" />
          <Button className="border-gray rounded-5 border bg-white text-dark-purple" onClick={hideModal}>Save & exit</Button>
        </Modal.Header>
        <Modal.Body className="bg-white-custom">
          <BuyBookMode />
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
            <NavLink to="/dashboard/rent/message"><Button className="border-dark-purple bg-dark-purple text-white fw-bold fs-6 px-4">Send</Button></NavLink>
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
  )
}