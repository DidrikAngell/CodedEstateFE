import { Button, Container, Image, Nav, Navbar, Modal, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Logo from "../../assets/images/Logo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../configs/ThemeProvider";
import { THEME_TYPE } from "../../configs/Constants";
import { AiOutlineClose } from "react-icons/ai";
import Wallet1 from '../../assets/images/wallet/keplr.png';
import Wallet2 from '../../assets/images/wallet/leap.png';
import Wallet3 from '../../assets/images/wallet/coin.png';
import Wallet4 from '../../assets/images/wallet/faicon.png';
import Wallet5 from '../../assets/images/wallet/compass.png';
import { store } from "../../configs/Store";
import { useWallet } from '@sei-js/react';
import { WalletConnectButton } from '@sei-js/react';
import { SeiWalletContext } from "@sei-js/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {
  const { connectedWallet, offlineSigner, accounts } = useWallet();
  const {
    supportedWallets,
    connect,
    disconnect,
    installedWallets
  } = useContext(SeiWalletContext);

  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const [connected, setConnected, updateConnected] = store.useState('Connected');
  const [realConnected, setRealConnected, updateRealConnected] = store.useState('RealConnected');
  // const [connected, setConnected] = useState(false)

  const [account, setAccount] = store.useState('Account')
  const [walletModalShow, setWalletModalShow, updateWalletModalShow] = store.useState("WalletModalShow");
  const [header, setHeader, updateHeader] = store.useState('Header');

  const [show, setShow] = useState(false);

  const [walletStr, setwalletStr] = useState('Connect')

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

  const tryConnectWallet = (wallet) => {
    localStorage.setItem('wallet', wallet)
    try {
      connect(wallet);
      setRealConnected(true);

    } catch (error) {
      toast.error(error.toString())
      console.log(error)
      return
    }
    handleClose();
  }




  const handleThemeChange = (e) => {
    if (themeMode.theme === THEME_TYPE.LIGHT) {
      setThemeMode({ theme: THEME_TYPE.DARK });
    }
    else {
      setThemeMode({ theme: THEME_TYPE.LIGHT });
    }
  }

  const handleWallet = () => {
    if (accounts.length) {
      console.log(accounts.length)
      localStorage.setItem('connected', true)
      setwalletStr(accounts[0].address.slice(0, 4) + '...' + accounts[0].address.slice(-4))
      setConnected(true)
    }
    else {

      if (localStorage.getItem('connected') == 'true') {
        console.log('connecting again...')
        connect(localStorage.getItem('wallet'))
        return
      }

      localStorage.setItem('connected', false)
      setwalletStr('Connect')
      setConnected(false)
    }
  }

  useEffect(() => {
    handleWallet()
  }, [accounts])


  return (
    <div className="Header">

      <Navbar collapseOnSelect expand="lg">
        <Container fluid className="py-2">
          <Navbar.Brand>
            <Link to="/">
              <Image src={Logo} width="120" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {header == "FA" ? (
                <NavLink to="/fractionalizedassets" className="nav-link fw-bold active" onClick={() => setHeader('FA')}>
                  Fractionalized Assets
                </NavLink>
              ) : (
                <NavLink to="/fractionalizedassets" className="nav-link fw-bold" onClick={() => setHeader('FA')}>
                  Fractionalized Assets
                </NavLink>
              )}
              {header == "BUY" ? (
                <NavLink to="/buy" className="nav-link fw-bold active" onClick={() => setHeader('BUY')}>
                  Buy
                </NavLink>
              ) : (
                <NavLink to="/buy" className="nav-link fw-bold" onClick={() => setHeader('BUY')}>
                  Buy
                </NavLink>
              )}

              {header == "RENT" ? (
                <NavLink to="/rent" className="nav-link fw-bold active" onClick={() => setHeader('RENT')}>
                  Rent
                </NavLink>
              ) : (
                <NavLink to="/rent" className="nav-link fw-bold" onClick={() => setHeader('RENT')}>
                  Rent
                </NavLink>
              )
              }

              {!connected ? ("") : (
                <span>
                  {header == "DASHBOARD" ? (
                    <NavLink to="/dashboard/overview" className="nav-link fw-bold active" onClick={() => { setHeader('DASHBOARD') }}>
                      Dashboard
                    </NavLink>
                  ) : (
                    <NavLink to="/dashboard/overview" className="nav-link fw-bold" onClick={() => { setHeader('DASHBOARD') }}>
                      Dashboard
                    </NavLink>
                  )}

                </span>

              )}

              <div>

                {
                  walletStr == 'Connect' ? (<div className="connectbtn" onClick={handleShow}>{walletStr}</div>) : (
                    <div className="connectbtn" onClick={() => setShow(true)}>{walletStr}</div>
                  )
                }
                {
                  show ? (<div className="headerdiv">
                    <div className="divitem" onClick={() => { setShow(false) }}>Copy address</div>
                    <div className="divitem" onClick={() => { setShow(false); handleShow() }}>Change wallet</div>
                    <div className="divitem" onClick={() => { setShow(false); localStorage.setItem('connected', false); disconnect(); }}>Disconnect</div>
                  </div>) : (<></>)
                }

              </div>
              <div>

              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Modal show={walletModalShow} onHide={handleClose} centered>
        <Modal.Body>
          <div className="text-end"><AiOutlineClose onClick={handleClose} /></div>
          <div className="fs-4 text-center fw-semibold mb-3">Connect Wallet</div>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2" onClick={() => tryConnectWallet('compass')}><Image src={Wallet5} className="me-3" /><span className="fw-bold text-dark-purple">Compass</span></Button>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2" onClick={() => tryConnectWallet('leap')}><Image src={Wallet2} className="me-3" /><span className="fw-bold text-dark-purple">Leap</span></Button>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2" onClick={() => tryConnectWallet('keplr')}><Image src={Wallet1} className="me-3" /><span className="fw-bold text-dark-purple">Keplr</span></Button>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2" onClick={() => tryConnectWallet('coin98')}><Image src={Wallet3} className="me-3" /><span className="fw-bold text-dark-purple">Coin98</span></Button>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2" onClick={() => tryConnectWallet('falcon')}><Image src={Wallet4} className="me-3" /><span className="fw-bold text-dark-purple">Faicon</span></Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
