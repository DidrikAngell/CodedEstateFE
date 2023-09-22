import { Button, ButtonGroup, Col, Form, ListGroup, Row, InputGroup, Image } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Map from '../../../assets/images/icons/map.svg';
import User from '../../../assets/images/icons/user.svg';
import Heart from '../../../assets/images/icons/heart-fill.svg';
import DetailImage from '../../../assets/images/building/5.webp';
import { useState } from "react";
import SEIIcon from  '../../../assets/images/crypto/sei.svg';

function MessagePage() {
  const [mode, setMode] = useState('offer');
  return (
    <div className="MessagePage mt-2">
      <Row>
        <Col md={2} className="border-end user-list">
          {mode == "bid" ? (
            <ButtonGroup className="border-gray bg-white p-2 w-100 border">
              <Button className="bg-white text-dark-purple fw-bold rounded mx-1 border-white" onClick={() => setMode('offer')}>My Bids</Button>
              <Button className="bg-dark-purple text-white fw-bold rounded mx-1 border-white" onClick={() => setMode('bid')}>My Offers</Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup className="border-gray bg-white p-2 w-100 border">
              <Button className="bg-dark-purple text-white fw-bold rounded mx-1 border-white" onClick={() => setMode('offer')}>My Bids</Button>
              <Button className="bg-white text-dark-purple fw-bold rounded mx-1 border-white" onClick={() => setMode('bid')}>My Offers</Button>
            </ButtonGroup>
          )}

          <div className="fs-5 fw-bold my-3">All Messages</div>
          <InputGroup className="mb-3 rounded border text-gray">
            <InputGroup.Text id="basic-addon1" className="bg-white border-0 text-gray"><FaSearch /></InputGroup.Text>
            <Form.Control
              placeholder="Search inbox"
              className="border-0"
            />
          </InputGroup>
          <div className="user-list-body">
            <div className="my-2 bg-white-custom p-2 rounded">
              <div className="d-flex align-items-content justify-content-between mb-2">
                <div className="fw-semibold fs-6 text-red">Inquiry</div>
                <small className="text-gray">7:11 PM</small>
              </div>
              <div className="fw-bold f-6 mb-2">sei14zd...0qzk</div>
              <div><small className="text-gray mb-2">Hotel medio</small></div>
              <div><small className="text-gray mb-2">Feb 4 - Feb 6 (2 nights)</small></div>
              <div><small className="text-gray mb-2 d-flex align-items-center">2 guests - <Image src={SEIIcon} width="15" className="mx-2"/>2,000.00 SEI</small></div>

            </div>
            <div className="my-2 bg-white-custom p-2 rounded">
              <div className="d-flex align-items-content justify-content-between mb-2">
                <div className="fw-semibold fs-6 text-red">Inquiry</div>
                <small className="text-gray">7:11 PM</small>
              </div>
              <div className="fw-bold f-6 mb-2">sei14zd...0qzk</div>
              <div><small className="text-gray mb-2">Hotel medio</small></div>
              <div><small className="text-gray mb-2">Feb 4 - Feb 6 (2 nights)</small></div>
              <div><small className="text-gray mb-2 d-flex align-items-center">2 guests - <Image src={SEIIcon} width="15" className="mx-2"/>2,000.00 SEI</small></div>

            </div>
            <div className="my-2 bg-white-custom p-2 rounded">
              <div className="d-flex align-items-content justify-content-between mb-2">
                <div className="fw-semibold fs-6 text-red">Inquiry</div>
                <small className="text-gray">7:11 PM</small>
              </div>
              <div className="fw-bold f-6 mb-2">sei14zd...0qzk</div>
              <div><small className="text-gray mb-2">Hotel medio</small></div>
              <div><small className="text-gray mb-2">Feb 4 - Feb 6 (2 nights)</small></div>
              <div><small className="text-gray mb-2 d-flex align-items-center">2 guests - <Image src={SEIIcon} width="15" className="mx-2"/>2,000.00 SEI</small></div>

            </div>
          </div>
        </Col>
        <Col md={7} className="border-end content-view position-relative">
          <div className="fs-5 fw-bold my-3 d-flex align-items-center justify-content-between">
            <div>sei14zd...0qzk</div>
            <div className="d-flex align-items-center">
              <Image className="me-3" src={Map} width="30" height="30" />
              <Image className="me-3" src={User} width="25" height="25" />
              <Image src={Heart} width="30" height="30" />
            </div>
          </div>
          <div className="Message-content p-3">
            <div className="text-center text-gray my-3">Jan 11, 2023</div>
            <div className="bg-white-custom  p-2 rounded my-3">Inquiry sent : 2 guests, Feb 4 -  Feb 6</div>
            <div className="chat-body w-75 my-3">
              <div className="d-flex align-items-center">
                <div className="fs-6 fw-bold me-2">sei14zd...0qzk</div>
                <div className="text-gray"> 07 : 11 PM</div>
              </div>
              <div className="">Is this something that can be rented?</div>
            </div>
          </div>
          <div className="position-absolute bottom-0 mb-2 w-100">
            <div className="d-flex align-items-center">
              <Form.Group className="w-100 border-dark-purple" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Hello" />
              </Form.Group>
              <Button className="bg-white mx-4 px-4 text-dark-purple border-dark-purple fw-bold">Send</Button>
            </div>
          </div>
        </Col>
        {mode == "offer" ?
          (
            <Col md={3} className="border-end content-detail">
              <div className="fs-5 fw-bold my-3">Offer Details</div>
              <Image src={DetailImage} className="rounded w-100 mb-2" height="200" style={{ objectFit: "cover" }} />
              <div className="border-top py-2">
                <div className="fw-semibold text-gray mb-1">Offer</div>
                <div className="fw-bold mb-1">sei14zd...0qzk ent a offer</div>
                <div><small className="text-gray mb-2">162 Green Painte Drive</small></div>
                <div><small className="text-gray mb-2">Feb 4th, 2023</small></div>
                <div><small className="text-gray mb-2 d-flex align-items-center"><Image src={SEIIcon} width="20" className="me-2"/> 200,000 SEI</small></div>
              </div>
              <Row className="border-top py-1">
                <Col><Button className="border-gray bg-white text-dark-purple fw-bold mb-2 w-100">Modify</Button></Col>
                <Col><Button className="border-gray bg-white text-dark-purple fw-bold w-100">Cancel</Button></Col>
              </Row>
              <div className="border-top py-1">
                <div className="fs-5 fw-bold my-2">Offer Details</div>
                <div className="fs-6 fw-bold mb-1">Offer User</div>
                <div className="text-gray pb-2 border-bottom"><small>sei14zd...0qzk</small></div>
                <div className="fs-6 fw-bold mb-1">Offer Amount</div>
                <div className="text-gray pb-2 border-bottom"><small className="d-flex align-items-center"><Image src={SEIIcon} width="18" className="me-2"/>200,000 SEI</small></div>
                <div className="fs-6 fw-bold mb-1">Offer Expires</div>
                <div className="text-gray"><small>Feb 11th, 2023</small></div>
              </div>
              <div className="border-top pt-1">
                <div className="fs-5 fw-bold my-2">Potential Earnings</div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-gray">Offer Amount</span>
                  <span className="text-gray">2,000.00 SEI</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-gray">Platform fee</span>
                  <span className="text-gray">-2000 SEI</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-gray">Total (SEI)</span>
                  <span className="fw-bold d-flex align-items-center"><Image src={SEIIcon} width="20" className="me-2"/>198,000 SEI</span>
                </div>
              </div>
            </Col>
          ) : (
            <Col md={3} className="border-end content-detail">
              <div className="fs-5 fw-bold my-3">Bid Details</div>
              <Image src={DetailImage} className="rounded w-100 mb-2" height="200" style={{ objectFit: "cover" }} />
              <div className="border-top py-2">
                <div className="fw-semibold text-gray mb-1">Bid</div>
                <div className="fw-bold mb-1">You sent an offer to sei14zd...0qzk</div>
                <div><small className="text-gray mb-2">162 Green Pointe Drive</small></div>
                <div><small className="text-gray mb-2">Feb 4th, 2023</small></div>
                <div><small className="text-gray mb-2 d-flex align-items-center"><Image src={SEIIcon} width="20" className="me-2"/>500,000 SEI</small></div>
              </div>
              <Row className="border-top py-2">
                <Col><Button className="border-gray bg-white text-dark-purple fw-bold mb-2 w-100">Approve</Button></Col>
                <Col><Button className="border-gray bg-white text-dark-purple fw-bold w-100">Decline</Button></Col>
              </Row>
              <div className="border-top py-2">
                <div className="fs-5 fw-bold my-2">Bid Details</div>
                <div className="fs-6 fw-bold mb-1">Bid User</div>
                <div className="text-gray pb-2 border-bottom"><small>sei14zd...0qzk</small></div>
                <div className="fs-6 fw-bold mb-1">Bid Amount</div>
                <div className="text-gray pb-2 border-bottom"><small className="d-flex align-items-center"><Image src={SEIIcon} width="18" className="me-2"/>500,000 SEI</small></div>
                <div className="fs-6 fw-bold mb-1">Bid Expires</div>
                <div className="text-gray pb-2 border-bottom"><small>Feb 11th, 2023</small></div>
              </div>
            </Col>
          )}

      </Row>
    </div>
  );
}

export default MessagePage;
