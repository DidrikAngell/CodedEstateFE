import { Image, Table } from "react-bootstrap";
import BuildingImg from '../../assets/images/building/1.webp';

export const ActivityTable = () => {
  return (
    <div className="ActivityTable">
      <Table striped>
        <thead>
          <tr>
            <th>Property</th>
            <th>Event</th>
            <th>Price (ETH)</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="d-flex align-items-center">
              <Image src={BuildingImg} width="50" height="40" />
              <span className="fw-bold ms-3">Kent Anaue</span>
            </td>
            <td>Buy</td>
            <td>-300 ETH</td>
            <td>sei14zd...0qzk</td>
            <td>sei14zd...0qzk</td>
            <td>3 mins ago</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <Image src={BuildingImg} width="50" height="40" />
              <span className="fw-bold ms-3">Kent Anaue</span>
            </td>
            <td>Buy</td>
            <td>-300 ETH</td>
            <td>sei14zd...0qzk</td>
            <td>sei14zd...0qzk</td>
            <td>3 mins ago</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <Image src={BuildingImg} width="50" height="40" />
              <span className="fw-bold ms-3">Kent Anaue</span>
            </td>
            <td>Buy</td>
            <td>-300 ETH</td>
            <td>sei14zd...0qzk</td>
            <td>sei14zd...0qzk</td>
            <td>3 mins ago</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <Image src={BuildingImg} width="50" height="40" />
              <span className="fw-bold ms-3">Kent Anaue</span>
            </td>
            <td>Buy</td>
            <td>-300 ETH</td>
            <td>sei14zd...0qzk</td>
            <td>sei14zd...0qzk</td>
            <td>3 mins ago</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <Image src={BuildingImg} width="50" height="40" />
              <span className="fw-bold ms-3">Kent Anaue</span>
            </td>
            <td>Buy</td>
            <td>-300 ETH</td>
            <td>sei14zd...0qzk</td>
            <td>sei14zd...0qzk</td>
            <td>3 mins ago</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <Image src={BuildingImg} width="50" height="40" />
              <span className="fw-bold ms-3">Kent Anaue</span>
            </td>
            <td>Buy</td>
            <td>-300 ETH</td>
            <td>sei14zd...0qzk</td>
            <td>sei14zd...0qzk</td>
            <td>3 mins ago</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
