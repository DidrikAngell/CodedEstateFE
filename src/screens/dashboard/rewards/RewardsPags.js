import { Row, Col, Button, Card, Accordion, Image, ButtonGroup, InputGroup, Form } from "react-bootstrap";
import { FaExternalLinkAlt, FaPlusCircle, FaQuestionCircle } from "react-icons/fa";
import RefreshIcon from '../../../assets/images/icons/refresh.svg';
import Diamond from '../../../assets/images/icons/diamond.svg';
import SEI from '../../../assets/images/crypto/sei.svg';

function RewardsPage() {
  return (
    <div className="RewardsPage mt-2">
      <div className="fs-4 fw-bold">My Rewards</div>
      <div className="fs-6 opacity-50">Earn crypto just by staking, trading and listing.<br />CODED Rewarding.</div>
      <Row>
        <Col sm={12} md={8}>
          <div className="my-3 d-flex align-items-center">
            <Button className="bg-dark-purple border-dark-purple text-white fw-bold py-2 px-4 me-3 d-flex align-items-center">Buy Coded<FaExternalLinkAlt className="ms-2" /></Button>
            <Button className="bg-white border-dark-purple text-dark-purple fw-bold py-2 p-4 me-3 d-flex align-items-center">Buy Coded<FaPlusCircle className="ms-2" /></Button>
          </div>
          <Card className="shadow bg-white">
            <Card.Header className="bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <div className="fs-5 fw-bold">CODED Compounder</div>
                  <div className="text-gray">Earn CODED & More CODED!</div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <div className="fs-5 fw-semibold">32.04%</div>
                    <div className="text-gray d-flex align-items-center">APY <FaQuestionCircle className="ms-2" /></div>
                  </div>
                  <div className="">
                    <Image src={RefreshIcon} />
                  </div>
                </div>
              </div>
            </Card.Header>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-top-0"><div className="fs-5 fw-bold">My Stake</div></Accordion.Header>
                <Accordion.Body className="my-2">
                  <ButtonGroup className="p-2 border border-dark-purple rounded">
                    <Button className="bg-dark-purple fs-6 fw-bold px-5 rounded mx-2 border-dark-purple">Stake</Button>
                    <Button className=" bg-white text-dark-purple fs-6 fw-bold px-5 rounded mx-2  border-white">UnStake</Button>
                  </ButtonGroup>
                  <InputGroup className="mt-3 border rounded">
                    <Form.Control
                      placeholder=""
                      className="border-0"
                    />
                    <Button className="py-3 px-4 bg-white border-0 text-dark-purple fw-bold">Max</Button>
                    <Button className="py-3 px-4 bg-white border-0 text-dark-purple fw-bold">Stake</Button>
                  </InputGroup>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="fs-5 fw-bold text-gray">CODED in wallet : </div>
                    <div className="text-gray d-flex align-items-center">(<Image src={SEI} width="18" className="mx-1"/> 0.00) <span className="fw-bold fs-5 mx-2 text-dark-purple">0</span><Image src={Diamond} /></div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><div className="fs-5 fw-bold">Rewards</div></Accordion.Header>
                <Accordion.Body>
                  <div className="my-3 text-gray">When you stake in the CODED Compounder, the WETH you earn from staking are compouned into CODED multiple times a day. <br /><br />CODED rewards are automatically compuned and added to your staked amount.<br />No need to collect!</div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="fs-5 fw-bold text-gray">CODED in wallet : </div>
                    <div className="text-gray d-flex align-items-center">(SEI 0.00) <span className="fw-bold fs-5 mx-2 text-dark-purple">0</span><Image src={Diamond} /></div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="shadow">
            <Card.Body>
              <div className="fs-5 fw-bold mb-2">Staking Rewards</div>
              <div className="text-gray">A % of Coded Estate´s trading fees are redistributed to $CODED stakers and users on Coded Estate!</div>
              <div className="text-gray d-flex mt-3">
                <div className="fw-bold fs-6 w-50">CODED Compounder</div>
                <span>automatically turn your $CODED earnings into more $CODED!</span>
              </div>
            </Card.Body>
          </Card>
          <div className="fs-5 fw-bold my-4">Staking Rewards</div>
          <Card className="shadow">
            <Card.Body>
              <Row>
                <Col sm={6} md={6} className="border-end">
                  <div className="fs-5 fw-bold mb-3 text-gray text-center">Total Staked</div>
                  <div className="d-flex align-items-center">
                    <Image src={Diamond} className="me-3" />
                    <div className="">
                      <div className="fs-5 fw-bold">20000</div>
                      <div className="text-gray d-flex align-items-center">(<Image src={SEI} width="18" className="mx-1"/>102283) <FaQuestionCircle className="ms-2" /></div>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={6}>
                  <div className="fs-5 fw-bold mb-3 text-gray text-center">Next Payout</div>
                  <div className="fs-5 fw-bold">10h 22 min</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RewardsPage;
