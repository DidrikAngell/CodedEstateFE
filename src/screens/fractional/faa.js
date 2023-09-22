import EmptyImg from "../../assets/images/icons/mint.png";
import {
    Row,
    Image
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { sampleData } from "../../utils/sampledata";
import { FaMinus, FaPlus, FaMap, FaUndoAlt } from "react-icons/fa";
import LocationImg1 from "../../assets/images/location/world.jpg";
import LocationImg2 from "../../assets/images/location/europe.jpg";
import LocationImg3 from "../../assets/images/location/turkey.jpg";
import LocationImg4 from "../../assets/images/location/southeast_asia.jpg";
import LocationImg5 from "../../assets/images/location/thailand.jpg";
import LocationImg6 from "../../assets/images/location/south_america.jpg";
import { Calendar } from "react-multi-date-picker";

function Faa() {
    const [data, setData] = useState([]);
    const [minDate, setMinDate] = useState(new Date());

    const [location, setLocation] = useState("");
    const [locationShow, setLocationShow] = useState(false);
    const [keyword, setKeyWord] = useState("");
    const [timeShow, setTimeShow] = useState(false);
    const [dates, setDates] = useState([]);
    const [guestShow, setGuestShow] = useState(false);
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);







    return (
        <div className="BuyPage position-relative" style={{ marginTop: "81px" }}>
            <div style={{ marginTop: "20px" }} className="fs-5 fw-bold text-center">Coming Soon</div>

            <Row
                style={{ minHeight: "81.5vh", width: "450px" }}
                className="d-flex align-items-center justify-content-center mx-auto"
            >
                <div className="fs-5 fw-bold text-center">
                    <Image src={EmptyImg} className="w-100 mb-2" />
                    <div>No NFTs available</div>
                </div>
            </Row>

        </div>
    );
}

export default Faa;