import { useState } from "react";
import { Container, Button, Image, Row, Col, Card, ListGroup, Form, ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import SBanner1 from '../../assets/images/verify/sbanner-1.png';
import SBanner2 from '../../assets/images/verify/sbanner-2.png';
import SBanner3 from '../../assets/images/verify/sbanner-3.png';
import Banner1 from '../../assets/images/verify/banner-1.png';
import Banner2 from '../../assets/images/verify/banner-2.png';
import Banner3 from '../../assets/images/verify/banner-3.png';
import UploadBanner from '../../assets/images/verify/upload.png';
import Building from '../../assets/images/building/13.webp';
import { BiHome } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FileUploader } from "react-drag-drop-files";
import NetIcon from '../../assets/images/verify/net.svg';
import Icon1 from '../../assets/images/icons/swimming-pool.svg';
import Icon2 from '../../assets/images/icons/star-border.svg';
import Icon3 from '../../assets/images/icons/heart-outline.svg';
import { Link } from "react-router-dom";
import { store } from "../../configs/Store";
import HouseIcon from '../../assets/images/verify/icons/house.svg';
import ApartmentIcon from '../../assets/images/verify/icons/apartment.svg';
import BarnIcon from '../../assets/images/verify/icons/barn.svg';
import TeaIcon from '../../assets/images/verify/icons/tea.svg';
import BoatIcon from '../../assets/images/verify/icons/boat.svg';
import CabinIcon from '../../assets/images/verify/icons/cabin.svg';
import CamperIcon from '../../assets/images/verify/icons/camper.svg';
import CasaIcon from '../../assets/images/verify/icons/casa.svg';
import CastleIcon from '../../assets/images/verify/icons/castle.svg';
import CaveIcon from '../../assets/images/verify/icons/cave.svg';
import ContainerIcon from '../../assets/images/verify/icons/container.svg';
import CycladicIcon from '../../assets/images/verify/icons/cycladic.svg';
import DammusoIcon from '../../assets/images/verify/icons/dammuso.svg';
import DomeIcon from '../../assets/images/verify/icons/dome.svg';
import EarthIcon from '../../assets/images/verify/icons/earth.svg';
import FarmIcon from '../../assets/images/verify/icons/farm.svg';
import GuestHouseIcon from '../../assets/images/verify/icons/guesthouse.svg';
import HotelIcon from '../../assets/images/verify/icons/hotel.svg';
import PrivateRoomIcon from '../../assets/images/verify/icons/privateroom.svg';
import ShareRoomIcon from '../../assets/images/verify/icons/sharedroom.svg';
import DedicatedIcon from '../../assets/images/verify/icons/dedicated.svg';
import WifiIcon from '../../assets/images/verify/icons/wifi.svg';
import TVIcon from '../../assets/images/verify/icons/tv.svg';
import KitchenIcon from '../../assets/images/verify/icons/kitchen.svg';
import WasherIcon from '../../assets/images/verify/icons/washer.svg';
import FreeParkingIcon from '../../assets/images/verify/icons/fparking.svg';
import PaidParkingIcon from '../../assets/images/verify/icons/pparking.svg';
import AirIcon from '../../assets/images/verify/icons/air.svg';
import PoolIcon from '../../assets/images/verify/icons/pool.svg';
import HotTubIcon from '../../assets/images/verify/icons/hottub.svg';
import PatioIcon from '../../assets/images/verify/icons/patio.svg';
import BBQIcon from '../../assets/images/verify/icons/bbq.svg';
import DiningIcon from '../../assets/images/verify/icons/dining.svg';
import FireIcon from '../../assets/images/verify/icons/fire.svg';
import PoolTableIcon from '../../assets/images/verify/icons/pooltable.svg';
import FirePlaceIcon from '../../assets/images/verify/icons/fireplace.svg';
import SmokeIcon from '../../assets/images/verify/icons/smoke.svg';
import AidKitIcon from '../../assets/images/verify/icons/aidkit.svg';
import ExtinguisherIcon from '../../assets/images/verify/icons/exitinguisher.svg';
import CarbonIcon from '../../assets/images/verify/icons/carbon.svg';
import PeacefulIcon from '../../assets/images/verify/icons/peaceful.svg';
import UniqueIcon from '../../assets/images/verify/icons/unique.svg';
import FamilyIcon from '../../assets/images/verify/icons/family.svg';
import StylishIcon from '../../assets/images/verify/icons/stylish.svg';
import CentralIcon from '../../assets/images/verify/icons/central.svg';
import SpaciousIcon from '../../assets/images/verify/icons/spacious.svg';

import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton, UploadDropzone } from "react-uploader";


const placeData = [
    { value: 1, title: "House", icon: HouseIcon },
    { value: 2, title: "Apartment", icon: ApartmentIcon },
    { value: 3, title: "Barn", icon: BarnIcon },
    { value: 4, title: "Tea", icon: TeaIcon },
    { value: 5, title: "BoatIconHouse", icon: BoatIcon },
    { value: 6, title: "Cabin", icon: CabinIcon },
    { value: 7, title: "Camper", icon: CamperIcon },
    { value: 8, title: "Casa", icon: CasaIcon },
    { value: 9, title: "Castle", icon: CastleIcon },
    { value: 10, title: "Cave", icon: CaveIcon },
    { value: 11, title: "Container", icon: ContainerIcon },
    { value: 12, title: "Cycladic", icon: CycladicIcon },
    { value: 13, title: "Dammuso", icon: DammusoIcon },
    { value: 14, title: "Earth", icon: EarthIcon },
    { value: 15, title: "Farm", icon: FarmIcon },
    { value: 16, title: "GuestHouse", icon: GuestHouseIcon },
    { value: 18, title: "Hotel", icon: HotelIcon },
];

const Step9Data = {
    publish: [
        { value: 1, title: "Wifi", icon: WifiIcon },
        { value: 2, title: "TV", icon: TVIcon },
        { value: 3, title: "Kitchen", icon: KitchenIcon },
        { value: 4, title: "Washer", icon: WasherIcon },
        { value: 5, title: "Free Parking", icon: FreeParkingIcon },
        { value: 6, title: "Paid Parking", icon: PaidParkingIcon },
        { value: 7, title: "Air Conditioning", icon: AirIcon },
        { value: 8, title: "Dedicated workspace", icon: DedicatedIcon },
    ],
    standout: [
        { value: 1, title: "Pool", icon: PoolIcon },
        { value: 2, title: "Hot tub", icon: HotTubIcon },
        { value: 3, title: "Patio", icon: PatioIcon },
        { value: 4, title: "BBQ grill", icon: BBQIcon },
        { value: 5, title: "Outdoor dinning area", icon: DiningIcon },
        { value: 6, title: "Fire pit", icon: FireIcon },
        { value: 7, title: "Pool table", icon: PoolTableIcon },
        { value: 8, title: "Indoor fireplace", icon: FirePlaceIcon },
    ],
    safety: [
        { value: 1, title: "Smoke alarm", icon: SmokeIcon },
        { value: 2, title: "First aid kit", icon: AidKitIcon },
        { value: 3, title: "Fire extinguisher", icon: ExtinguisherIcon },
        { value: 4, title: "Carbon monoxide alarm", icon: CarbonIcon },
    ],

};

const Step12Data = [
    { value: 1, title: "Peaceful", icon: PeacefulIcon },
    { value: 2, title: "Unique", icon: UniqueIcon },
    { value: 3, title: "Family-friendly", icon: FamilyIcon },
    { value: 4, title: "Stylish", icon: StylishIcon },
    { value: 5, title: "Central", icon: CentralIcon },
    { value: 6, title: "Spacious", icon: SpaciousIcon },
];

export default function VerifyMode() {
    const steps = [
        { label: "Step0", stepNumber: 0, element: <Step0 /> },
        { label: "Step1", stepNumber: 1, element: <Step1 /> },
        { label: "Step2", stepNumber: 2, element: <Step2 /> },
        { label: "Step3", stepNumber: 3, element: <Step3 /> },
        { label: "Step4", stepNumber: 4, element: <Step4 /> },
        { label: "Step5", stepNumber: 5, element: <Step5 /> },
        { label: "Step6", stepNumber: 6, element: <Step6 /> },
        { label: "Step7", stepNumber: 7, element: <Step7 /> },
        { label: "Step8", stepNumber: 8, element: <Step8 /> },
        { label: "Step9", stepNumber: 9, element: <Step9 /> },
        { label: "Step10", stepNumber: 10, element: <Step10 /> },
        { label: "Step11", stepNumber: 11, element: <Step11 /> },
        { label: "Step12", stepNumber: 12, element: <Step12 /> },
        { label: "Step13", stepNumber: 13, element: <Step13 /> },
        { label: "Step14", stepNumber: 14, element: <Step14 /> },
        { label: "Step15", stepNumber: 15, element: <Step15 /> },
        { label: "Step16", stepNumber: 16, element: <Step16 /> },
        { label: "Step17", stepNumber: 17, element: <Step17 /> },
        { label: "Step18", stepNumber: 18, element: <Step18 /> },
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");

    const goToNextStep = () => {
        if (currentStep < (steps.length - 1) && currentStep < 18) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="VerifyMode position-relative" style={{ height: "65vh" }}>

            {steps.map((item, idx) => (
                <div key={idx} className={`step p-3 bg-white-custom h-100  ${item.stepNumber === currentStep ? "d-block" : "d-none"}`} style={{ maxHeight: '60vh', overflowY: 'scroll' }}>
                    <Container className="h-100">{item.element}</Container>
                </div>
            ))

            }
            <div className="position-absolute bottom-0 w-100">
                <ProgressBar percent={5.3 * currentStep} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                <div className="bg-white pt-1">

                    <Container>
                        {currentStep == 0 ? (
                            <div className="d-flex align-items-center justify-content-end">
                                <Button className="bg-dark-purple text-white border-dark-purple fw-bold px-4 py-1 " onClick={goToNextStep}>Get Started</Button>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center justify-content-between">
                                <Button className="bg-white text-dark-purple border-white  px-2 py-1" onClick={goToPreviousStep}><u>Back</u></Button>
                                {currentStep == 18 ? (
                                    <Link to="/dashboard/buy/properties" onClick={(e) => setTabKey(1)}><Button className="bg-dark-purple text-white border-dark-purple fw-bold px-3 py-1" onClick={goToNextStep}>Let's get started</Button></Link>
                                ) : (
                                    <Button className="bg-dark-purple text-white border-dark-purple fw-bold px-4 py-1" onClick={goToNextStep}>Next</Button>
                                )}
                            </div>
                        )}
                    </Container>
                </div>
            </div>
        </div>
    )
}

export const Step0 = () => {
    return (
        <div className="Step0 h-100">
            <Row className="align-items-center h-100">
                <Col sm={6} md={6} className="">
                    <div className="fs-3 fw-bold w-50 mx-auto">Get Your NFT</div>
                    <div className="fs-3 fw-bold w-50 mx-auto">ready for rental</div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="py-4 border-bottom d-flex align-items-center justify-content-between">
                        <div className="">
                            <div className="fs-5 fw-semibold">1 Tell us about your place</div>
                            <div className="text-gray ms-3">Share some basic info, like where it is and how many guests can stay.</div>
                        </div>
                        <Image src={SBanner1} />
                    </div>
                    <div className="py-4 border-bottom d-flex align-items-center justify-content-between">
                        <div className="">
                            <div className="fs-5 fw-semibold">2 Make it stand out</div>
                            <div className="text-gray ms-3">Add 5 or more photos plus a title and description - we’ll help you out.</div>
                        </div>
                        <Image src={SBanner2} />
                    </div>
                    <div className="py-4 border-bottom d-flex align-items-center justify-content-between">
                        <div className="">
                            <div className="fs-5 fw-semibold">3  Finish up and publish</div>
                            <div className="text-gray ms-3">Choose if you’d like to start with an experienced guest, set a starting price, and publish your listing.</div>
                        </div>
                        <Image src={SBanner3} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export const Step1 = () => {
    return (
        <div className="Step1 h-100">
            <Row className="align-items-center h-100">
                <Col sm={6} md={6}>
                    <div className="w-75 mx-auto">
                        <div className="fs-6 fw-semibold mb-2">Step 1</div>
                        <div className="fs-3 fw-bold mb-2">Tell us about your place</div>
                        <div className="">In this step, we’ll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how may guests that can stay.</div>
                    </div>
                </Col>
                <Col sm={6} md={6} className="text-center">
                    <Image src={Banner1} width="400" />
                </Col>
            </Row>
        </div>
    )
}

export const Step2 = () => {
    return (
        <div className="Step2 h-100 w-75 mx-auto">
            <div className="fs-5 fw-bold">Which of these best describes <br />your place ?</div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="row">
                {placeData.map((item, idx) => (
                    <Col sm={6} md={4}>
                        <ToggleButton id={`step2-radio-${item.value}`} value={item.value} className="my-3 py-3 rounded w-100">
                            <Image src={item.icon} />
                            <div>{item.title}</div>
                        </ToggleButton>
                    </Col>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export const Step3 = () => {
    return (
        <div className="Step3 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold">What type of place will guests have?</div>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="row GuestButtonGroup">
                    <ToggleButton id="tbg-radio-1" value={1} className="my-3 py-3 rounded">
                        <div className="d-flex align-items-center justify-content-between text-start">
                            <div>
                                <div className="fw-semibold">An entire place</div>
                                <div className="text-gray">Guest have the whole place to themselves</div>
                            </div>
                            <Image src={HouseIcon} width="50" />
                        </div>
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} className="my-3 py-3 rounded">
                        <div className="d-flex align-items-center justify-content-between text-start">
                            <div>
                                <div className="fw-semibold">A private room</div>
                                <div className="text-gray">Guest sleep in a private room but some areas may be shared with you or others</div>
                            </div>
                            <Image src={PrivateRoomIcon} width="50" />
                        </div>
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} className="my-3 py-3 rounded">
                        <div className="d-flex align-items-center justify-content-between text-start">
                            <div>
                                <div className="fw-semibold">A shared room</div>
                                <div className="text-gray">Guests sleep in a room or common area that may be shared with you or others</div>
                            </div>
                            <Image src={ShareRoomIcon} width="50" />
                        </div>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    )
}

export const Step4 = () => {
    return (
        <div className="Step4 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Pinpoint Location</div>
                <div className="text-gray mb-2">Move the pin to the location of your property</div>
                <Card className="mt-4 mb-1">
                    <iframe className="w-100 rounded" style={{ height: "310px" }} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
                </Card>
            </div>
        </div>
    )
}

export const Step5 = () => {
    return (
        <div className="Step5 h-100 py2">
            <div className="w-50 mx-auto h-100">
                <div className="fs-5 fw-bold mb-2">Confirm your address</div>
                <div className="text-gray mb-2">Your address is only shared with guests after they’ve made a reservation</div>
                <ListGroup>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">Street</Form.Text>
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted"> </Form.Text>
                            <Form.Control type="text" placeholder="" className="border-0 mt-3" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">City</Form.Text>
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">State (Optional)</Form.Text>
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">Zip coded (Optional)</Form.Text>
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">Country / Regenon</Form.Text>
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                </ListGroup>
                <hr />
                <div className="fs-5 fw-semibold">Show your specific location</div>
                <div className="d-flex align-items-center justify-content-between">
                    <small className="text-gray">Make it clear to guests where your place is located. We’ll only share your address after they’ve made a reservation. <strong><u>Learn more</u></strong></small>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                    />
                </div>
                <Card className="mt-4 m5-1">
                    <iframe className="w-100 rounded" style={{ height: "310px" }} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
                </Card>
            </div>
        </div>
    )
}

export const Step6 = () => {
    return (
        <div className="Step6 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Is the pin in the right spot?</div>
                <div className="text-gray mb-2">Your address is only shared with guests after they’ve made a reservation.</div>
                <Card className="mt-4 mb-1">
                    <iframe className="w-100 rounded" style={{ height: "310px" }} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
                </Card>
            </div>
        </div>
    )
}

export const Step7 = () => {
    const [guest, setGuest] = useState(1);
    const [bed, setBed] = useState(1);
    const [bedRoom, setBedRoom] = useState(1);
    const [bath, setBathRoom] = useState(1);

    return (
        <div className="Step7 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Share some basic about your place</div>
                <div className="text-gray mb-2">You’ll add more details later, like bed type</div>
                <div className="mt-2">
                    <div className="d-flex align-items-center py-3 justify-content-between my-2 guest-stepper border-bottom">
                        <div className="guest-content">
                            <div className="guest-title">Guests</div>
                        </div>
                        <div className="stepper">
                            <ButtonGroup className="align-items-center ">
                                {guest > 0 ? (<Button onClick={() => setGuest(guest - 1)}><FaMinus /></Button>) : (<Button className="opacity-50"><FaMinus /></Button>)}
                                <span className="px-3">{guest}</span>
                                <Button onClick={() => setGuest(guest + 1)}><FaPlus /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex align-items-center  py-3 justify-content-between my-2 guest-stepper border-bottom">
                        <div className="guest-content">
                            <div className="guest-title">Bedrooms</div>
                        </div>
                        <div className="stepper">
                            <ButtonGroup className="align-items-center ">
                                {bedRoom > 0 ? (<Button onClick={() => setBedRoom(bedRoom - 1)}><FaMinus /></Button>) : (<Button className="opacity-50"><FaMinus /></Button>)}
                                <span className="px-3">{bedRoom}</span>
                                <Button onClick={() => setBedRoom(bedRoom + 1)}><FaPlus /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-3 justify-content-between my-2 guest-stepper border-bottom">
                        <div className="guest-content">
                            <div className="guest-title">Beds</div>
                        </div>
                        <div className="stepper">
                            <ButtonGroup className="align-items-center ">
                                {bed > 0 ? (<Button onClick={() => setBed(bed - 1)}><FaMinus /></Button>) : (<Button className="opacity-50"><FaMinus /></Button>)}
                                <span className="px-3">{bed}</span>
                                <Button onClick={() => setBed(bed + 1)}><FaPlus /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-3 justify-content-between my-2 guest-stepper">
                        <div className="guest-content">
                            <div className="guest-title">Bathrooms</div>
                        </div>
                        <div className="stepper">
                            <ButtonGroup className="align-items-center ">
                                {bath > 0 ? (<Button onClick={() => setBathRoom(bath - 1)}><FaMinus /></Button>) : (<Button className="opacity-50"><FaMinus /></Button>)}
                                <span className="px-3">{bath}</span>
                                <Button onClick={() => setBathRoom(bath + 1)}><FaPlus /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Step8 = () => {
    return (
        <div className="Step8 h-100">
            <Row className="align-items-center h-100">
                <Col sm={6} md={6}>
                    <div className="w-75 mx-auto">
                        <div className="fs-6 fw-semibold mb-2">Step 2</div>
                        <div className="fs-3 fw-bold mb-2">Make your place stand out</div>
                        <div className="">In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then, you’ll create a title and description.</div>
                    </div>
                </Col>
                <Col sm={6} md={6} className="text-center">
                    <Image src={Banner2} width="400" />
                </Col>
            </Row>
        </div>
    )
}

export const Step9 = () => {
    return (
        <div className="Step9 h-100 w-75 mx-auto">
            <div className="fs-5 fw-bold mb-2">Tell guests what your place has to offer</div>
            <div className="text-gray mb-2">You can add more amenities after you publish your listing.</div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="row">
                {Step9Data.publish.map((item, idx) => (
                    <Col sm={6} md={4}>
                        <ToggleButton id={`pub-radio-${item.value}`} value={item.value} className="my-3 py-3 rounded w-100 text-start">
                            <Image src={item.icon} />
                            <div>{item.title}</div>
                        </ToggleButton>
                    </Col>
                ))}
            </ToggleButtonGroup>
            <div className="fw-bold my-2">Do you have any standout amenities?</div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="row">
                {Step9Data.standout.map((item, idx) => (
                    <Col sm={6} md={4}>
                        <ToggleButton id={`stand-radio-${item.value}`} value={item.value} className="my-3 py-3 rounded w-100 text-start">
                            <Image src={item.icon} />
                            <div>{item.title}</div>
                        </ToggleButton>
                    </Col>
                ))}
            </ToggleButtonGroup>
            <div className="fw-bold my-2">Do you have any of these safety items?</div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="row">
                {Step9Data.safety.map((item, idx) => (
                    <Col sm={6} md={4}>
                        <ToggleButton id={`sat-radio-${item.value}`} value={item.value} className="my-3 py-3 rounded w-100 text-start">
                            <Image src={item.icon} />
                            <div>{item.title}</div>
                        </ToggleButton>
                    </Col>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export const Step10 = () => {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    const uploader = Uploader({
        apiKey: "free" // Get production API keys from Upload.io
    });

    const options = { multi: true };

    return (
        <div className="Step10 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Add some photos of your house</div>
                <div className="text-gray mb-2">You’ll need 5 photos to get started. You can add more or make changes later</div>
                <div className="position-relative p-2 rounded-2 border-dark-purple" >
                    <UploadDropzone uploader={uploader}
                        options={options}
                        onUpdate={files => alert(files.map(x => x.fileUrl).join("\n"))}
                        width="600px"
                        height="375px" />

                </div>
            </div>
        </div>
    )
}

export const Step11 = () => {
    return (
        <div className="Step11 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Now, let’s give your house a title</div>
                <div className="text-gray mb-2">Short titles work best. Have fun with it - you can always change it later.</div>
                <Form.Group className="mt-1 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={11} />
                    <Form.Label><small className="text-gray">11 / 32</small></Form.Label>
                </Form.Group>
            </div>
        </div>
    )
}

export const Step12 = () => {
    return (
        <div className="Step12 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Next, let’s describe your house</div>
                <div className="text-gray mb-2">Choose up to 2 highlights. We’ll use these to get your description started.</div>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="row">
                    {Step12Data.map((item, idx) => (
                        <Col sm={6} md={4}>
                            <ToggleButton id={`step12-radio-${item.value}`} value={item.value} className="my-1 py-1 rounded-5 w-100 text-start">
                                <Image src={item.icon} width="20" className="me-2 mb-1" /><small>{item.title}</small>
                            </ToggleButton>
                        </Col>
                    ))}
                </ToggleButtonGroup>
            </div>
        </div>
    )
}

export const Step13 = () => {
    return (
        <div className="Step13 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Create your description</div>
                <div className="text-gray mb-2">Share what makes your place special.</div>
                <Form.Group className="mt-1 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={11} />
                    <Form.Label><small className="text-gray">11 / 32</small></Form.Label>
                </Form.Group>
            </div>
        </div>
    )
}

export const Step14 = () => {
    return (
        <div className="Step14 h-100">
            <Row className="align-items-center h-100">
                <Col sm={6} md={6}>
                    <div className="w-75 mx-auto">
                        <div className="fs-6 fw-semibold mb-2">Step 3</div>
                        <div className="fs-3 fw-bold mb-2">Finish up and publish</div>
                        <div className="">Finally, you’ll choose if you’d like to start with an experienced guest, then you’ll set your nightly price. Answer a few quick questions and publish when you’re ready.</div>
                    </div>
                </Col>
                <Col sm={6} md={6} className="text-center">
                    <Image src={Banner3} width="400" />
                </Col>
            </Row>
        </div>
    )
}

export const Step15 = () => {
    return (
        <div className="Step15 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Choose who to welcome for your first reservation</div>
                {/* <div className="text-gray mb-2">Short titles work best. Have fun with it - you can always change it later.</div> */}
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="row">
                    <ToggleButton id={`step15-radio-1`} value={1} className="my-1 py-1 rounded w-100 text-start d-flex">
                        <Form.Check
                            type="radio"
                            id="1"
                            className="mt-1"
                        />
                        <div className="ms-3">
                            <div className="fs-5 fw-semibold">Any Coded Estate Guest</div>
                            <small cls="text-gray">Get reservations faster when you welcome anyone from the Coded Estate community</small>
                        </div>
                    </ToggleButton>
                    <ToggleButton id={`step15-radio-2`} value={2} className="my-1 py-1 rounded w-100 text-start d-flex">
                        <Form.Check
                            type="radio"
                            id="2"
                            className="mt-1"
                        />
                        <div className="ms-3">
                            <div className="fs-5 fw-semibold">An experienced guest</div>
                            <small cls="text-gray">For your first guest, welcome someone with a good track record on Coded estate who can offer tips for how to be a great Host</small>
                        </div>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    )
}

export const Step16 = () => {
    const [price, setPrice] = useState(891);
    return (
        <div className="Step16 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Now, set your price</div>
                <div className="text-gray mb-2">You can change it anytime.</div>
                <Card className="my-3">
                    <Card.Body className="d-flex align-items-start">
                        <div className="mx-auto">
                            <div className="stepper">
                                <div className="d-flex align-items-center justify-content-around w-100">
                                    <Button className="bg-white border-gray text-dark-purple rounded-circle py-2" onClick={() => setPrice(price - 1)}><FaMinus /></Button>
                                    <Form.Control type="text" value={price} className="border-gray fs-5 fw-semibold mx-5 text-center" />
                                    <Button className="bg-white border-gray text-dark-purple rounded-circle py-2" onClick={() => setPrice(price + 1)}><FaPlus /></Button>
                                </div>
                            </div>
                            <div className="text-gray text-center my-2">Per night</div>
                            <div className="text-gray text-center my-2 w-75 mx-auto">Places like yours in your area usually range from 671 Sei to 1,118 Sei</div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="my-3">
                    <Card.Body>
                        <div className="fs-6 fw-bold text-gray my-2">Get booked faster</div>
                        <div className="fs-6 text-gray my-2">Offer 20% off to your first 3 guests to help your place stand out.</div>
                        <div className="fs-6 fw-bold text-gray my-2"><u>Learn more</u></div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export const Step17 = () => {
    return (
        <div className="Step16 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Just one last step!</div>
                <div className="fs-6 fw-bold mb-2">How are you hosting on Coded Estate ? </div>
                <Form.Check
                    type="radio"
                    id="1"
                    label="I’m hosting as a private individual"
                    className="mb-2"
                />
                <Form.Check
                    type="radio"
                    id="1"
                    label="I’m hosting as a business"
                    className="mb-2"
                />
                <div className="fs-6 fw-bold my-2">Required info to inform about</div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="">Security camera (s)</div>
                    <Form.Check
                        disabled
                        type="checkbox"
                        id="3"
                    />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="">Weapons</div>
                    <Form.Check
                        disabled
                        type="checkbox"
                        id="3"
                    />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="">Dangerous animals</div>
                    <Form.Check
                        disabled
                        type="checkbox"
                        id="3"
                    />
                </div>
                <hr />
                <Button className="bg-dark-purple border-dark-purple text-white py-2 px-2 mb-3">Verify ownership</Button>
                <div className="fs-6 fw-bold mb-2">Important things to know</div>
                <div className="fs-6 text-gray">Be sure to comply with your local laws and review Coded Estates nondiscrimination policy and guest and Host fees.</div>
            </div>
        </div>
    )
}

export const Step20 = () => {
    return (
        <div className="Step18 h-100">
            <div className="w-50 mx-auto h-100 d-flex flex-column justify-content-center">
                <div className="fs-5 fw-bold mb-2">Yay ! It’s time to publish.</div>
                <div className="text-gray mb-2">Here’s what we’ll show to gests. Before you publish, make sure to review the details.</div>
                <div className="my-3">
                    <Row>
                        <Col sm={12} md={5}>
                            <Image src={Building} height="100%" width="100%" style={{ objectFit: "cover" }} />
                        </Col>
                        <Col sm={12} md={7}>
                            <div className="fs-6 fw-bold mb-2">What’s next?</div>
                            <div className="my-2 pb-2">
                                <div className="d-flex my-2">
                                    <Image src={Icon1} className="me-3" />
                                    <div className="">
                                        <div className="text-dark-purple fw-bold fs-5">Dive right in</div>
                                        <small className="text-gray">This is one of the few place in the area with a pool.</small>
                                    </div>
                                </div>
                                <div className="d-flex my-2">
                                    <Image src={Icon2} className="me-3" />
                                    <div className="">
                                        <div className="text-dark-purple fw-bold fs-5">Experienced host</div>
                                        <small className="text-gray">Bookiply has 1429 reviews for other places</small>
                                    </div>
                                </div>
                                <div className="d-flex my-2">
                                    <Image src={Icon3} className="me-3" />
                                    <div className="">
                                        <div className="text-dark-purple fw-bold fs-5">Highly rated Host</div>
                                        <small className="text-gray">Bookily has recieved 5-star ratings from 100% of recent guests.</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export const Step18 = () => {
    return (
        <div className="Step19 h-100">
            <div className="w-50 mx-auto d-flex flex-column justify-content-center h-100">
                <div className="fs-5 fw-bold mb-3">Congratulations, sei14zd...0qzk!</div>
                <div className="text-gray">From one Host to another -welcome aboard. Thanks you for sharing your home and helping to create incredible experieces for out case.</div>
            </div>
        </div>
    )
}




