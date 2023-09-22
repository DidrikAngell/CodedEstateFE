import { Container, Image, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DashboardIcon from '../../assets/images/icons/dashboard.svg';
import PropertiesIcon from '../../assets/images/icons/properties.svg';
import MessageIcon from '../../assets/images/icons/messages.svg';
import FavoritesIcon from '../../assets/images/icons/heart.svg';
import OffersIcon from '../../assets/images/icons/dollar.svg';
import RewardsIcon from '../../assets/images/icons/gift.svg';
import HoldingIcon from '../../assets/images/icons/hand.svg';
import CodedblocksIcon from '../../assets/images/icons/codedblocks.jpg';
import Logo from '../../assets/images/Logo-white.svg';
import { RoundedMainBtn } from "../button/Buttons";
import { useState } from "react";
import { store } from '../../configs/Store';
import createSwitch, { deleteSwitch } from 'switch-button'
import 'switch-button/dist/index.css'
import SwitchIcon from '../../assets/images/icons/switch.svg';

const NavListItem = ({ icon, title, link }) => {
  return (
    <NavLink to={link} className="nav-link my-4 d-flex align-items-center">
      <Image src={icon} width="25" height="25" /><span className="fs-5 fw-semibold ms-3">{title}</span>
    </NavLink>
  )
}

const NavListData = [
  { title: "Dashboard", link: "/dashboard/overview", icon: DashboardIcon },
  { title: "YieldEstate", link: "/dashboard/fractionalizedassets", icon: CodedblocksIcon },

  { title: "My Real Estate NFTs", link: "/dashboard/buy/properties", icon: PropertiesIcon },
  { title: "Messages", link: "/dashboard/buy/message", icon: MessageIcon },
  { title: "Favorites", link: "/dashboard/buy/favorite", icon: FavoritesIcon },
  { title: "My Rewards", link: "/dashboard/buy/rewards", icon: RewardsIcon },
  { title: "My Holdings", link: "/dashboard/buy/holding", icon: HoldingIcon },
  { title: "Transactions", link: "/dashboard/buy/transactions", icon: OffersIcon },
  { title: "Bids and offers", link: "/dashboard/buy/offers", icon: OffersIcon },
];

const RentalNavListData = [
  { title: "Dashboard", link: "/dashboard/overview", icon: DashboardIcon },
  { title: "CodedBlocks", link: "/dashboard/fractionalizedassets", icon: CodedblocksIcon },
  { title: "My Real Estate NFTs", link: "/dashboard/rent/properties", icon: PropertiesIcon },
  { title: "Messages", link: "/dashboard/rent/message", icon: MessageIcon },
  { title: "Favorites", link: "/dashboard/rent/favorite", icon: FavoritesIcon },
  { title: "My Rewards", link: "/dashboard/rent/rewards", icon: RewardsIcon },
  { title: "My Holdings", link: "/dashboard/rent/holding", icon: HoldingIcon },
  { title: "Transactions", link: "/dashboard/rent/transactions", icon: OffersIcon },
  { title: "Trips", link: "/dashboard/rent/trips", icon: OffersIcon },
  { title: "Reviews", link: "/dashboard/rent/reviews", icon: OffersIcon },
];


export default function Sidebar() {

  const [mode, setMode, updateMode] = store.useState('Mode');
  const [buyMode, setBuyMode] = useState(true);

  const toggleValue = () => {
    if (mode == "BUY") {
      setMode("RENT");
    }
    else {
      setMode("BUY");
    }
  }


  return (
    <div className="Sidebar">
      <Container className="">
        <div className="Sidebar-Navlist">
          {mode == "BUY" ? (
            NavListData.map((item, idx) => (
              <NavListItem icon={item.icon} title={item.title} link={item.link} key={idx} />
            ))
          ) : (
            RentalNavListData.map((item, idx) => (
              <NavListItem icon={item.icon} title={item.title} link={item.link} key={idx} />
            ))
          )
          }
        </div>
        <Card className="shadow position-absolute w-75 bottom-0 mb-3 bg-dark-purple">
          <Card.Body className="text-center">
            <Image src={Logo} width="150" className="my-2" />
            <div className="text-center">
              <div className="text-white mb-2">{mode != "BUY" ? ("Rent Mode") : ("Buy Mode")}</div>
              <Button className='border border-gray rounded-5 bg-white fw-bold fs-6 text-dark-purple py-2 px-4' onClick={toggleValue}>Switch</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}