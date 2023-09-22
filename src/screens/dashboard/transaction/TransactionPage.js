import { Image, Table, Modal, Button, Row, Col } from "react-bootstrap";
import BuildingImage from '../../../assets/images/building/1.webp';
import SEIIcon from '../../../assets/images/crypto/sei.svg';
import TypeIcon from '../../../assets/images/icons/type.svg';
import Logo from '../../../assets/images/Logo.svg';
import DocumentImg from '../../../assets/images/icons/document.svg';
import { store } from "../../../configs/Store";

import { useState } from "react";


function TransactionPage() {
  const [show, setShow] = useState(false);
  const [mode, setMode, updateMode] = store.useState('Mode');
  const showModal = () => {
    setShow(true);
  }
  const hideModal = () => {
    setShow(false);
  }
  return (
    <div className="ActivityPage mt-2">
      <div className="fs-4 fw-bold">Transactions</div>
      <div className="fs-6 opacity-50">Get an overview of your Coded Estate transactions</div>

      <div className="activity-datatable mt-5">
        <Table stripe>
          <thead>
            <tr className="opacity-50">
              <th className="py-3 align-middle">Property</th>
              <th className="py-3 align-middle">Type</th>
              <th className="py-3 align-middle">Price (SEI)</th>
              <th className="py-3 align-middle">From</th>
              <th className="py-3 align-middle">To</th>
              <th className="py-3 align-middle">Date</th>
              <th className="py-3 align-middle">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="rounded-2 align-middle" onClick={showModal}>
              <td className="border-bottom-0 ">
                <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0" />
                <span className="fw-bold">Kent Avenue #310</span>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={TypeIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold text-purple">Buy</div>
                    <div className="text-gray">01:39 PM</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={SEIIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold">100</div>
                    <div className="text-gray">SEI</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
              <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
            </tr>
            {/* <tr className="rounded-2 align-middle" onClick={mode == "BUY" && showModal}>
              <td className="border-bottom-0 ">
                <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0" />
                <span className="fw-bold">Kent Avenue #310</span>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={TypeIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold text-purple">Buy</div>
                    <div className="text-gray">01:39 PM</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={SEIIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold">100</div>
                    <div className="text-gray">SEI</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
              <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
            </tr>
            <tr className="rounded-2 align-middle" onClick={mode == "BUY" && showModal}>
              <td className="border-bottom-0 ">
                <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0" />
                <span className="fw-bold">Kent Avenue #310</span>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={TypeIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold text-purple">Buy</div>
                    <div className="text-gray">01:39 PM</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={SEIIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold">100</div>
                    <div className="text-gray">SEI</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
              <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
            </tr>
            <tr className="rounded-2 align-middle" onClick={mode == "BUY" && showModal}>
              <td className="border-bottom-0 ">
                <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0" />
                <span className="fw-bold">Kent Avenue #310</span>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={TypeIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold text-purple">Buy</div>
                    <div className="text-gray">01:39 PM</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={SEIIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold">100</div>
                    <div className="text-gray">SEI</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
              <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Pending</td>
            </tr>
            <tr className="rounded-2 align-middle" onClick={mode == "BUY" && showModal}>
              <td className="border-bottom-0 ">
                <Image src={BuildingImage} width="90" height="50" className="rounded-1 me-3 border-bottom-0" />
                <span className="fw-bold">Kent Avenue #310</span>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={TypeIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold text-purple">Buy</div>
                    <div className="text-gray">01:39 PM</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">
                <div className="d-flex align-items-center">
                  <Image src={SEIIcon} className="me-3" />
                  <div>
                    <div className="fs-6 fw-bold">100</div>
                    <div className="text-gray">SEI</div>
                  </div>
                </div>
              </td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3">sei14zd...0qzk</td>
              <td className="text-start border-bottom-0 py-3 text-gray">3 mins ago</td>
              <td className="text-start border-bottom-0 py-3 fs-6 fw-bold">Completed</td>
            </tr> */}
          </tbody>
        </Table>
      </div>
      <Modal show={show} size="xl" centered>
        <Modal.Header className="d-flex align-items-center justify-content-between">

          <Image src={Logo} height="50" />
          <Button className="border-gray rounded-5 border bg-white text-dark-purple" onClick={hideModal}>Save & exit</Button>
        </Modal.Header>
        <Modal.Body className="bg-white-custom">
          <div className="fs-5 fw-bold">Due Diligence</div>
          <small className="text-gray mb-3">Documents that require uploading for verification for <b>Kent Avenue #310.</b></small>
          <div className="badge-group mb-3"></div>
          <div className="Document-tabl p-2" style={{ minHeight: "50vh" }}>
            <div className="d-flex mb-3">
              <span className="border-gray border bg-gray-500 text-dark-purple py-1 px-3  rounded-5 me-3">You (2)</span>
              <span className="border-gray border bg-gray-500 text-dark-purple py-1 px-3  rounded-5 me-3">Other Party (1)</span>
            </div>
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
  );
}

export default TransactionPage;
