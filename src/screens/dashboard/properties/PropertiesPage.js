import { Container, Tab, Tabs, Row, InputGroup, Form } from "react-bootstrap";
import { BidPropertyCard, ListPropertyCard, PropertyInfoCard, UnVerifyPropertyCard, MListPropertyCard } from "../../../components/card/card";
import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';
import { store } from "../../../configs/Store";
import { MyBidData, MyListingData, UnVerifyNFTData, VerifyNFTData, } from "../../../utils/data";

function PropertiesPage() {
  const [tabKey, setTabKey, updateTabKey] = store.useState("PropertiesTabActiveNum");
  const [mode, setMode, updateMode] = store.useState("Mode");

  return (
    <div className="PropertiesPage my-2">
      <div className="fs-4 fw-bold">My Real Estate NFTs</div>
      <div className="fs-6 opacity-50">Welcome to your Coded Estate NFT overview</div>
      <PropertyInfoCard />
      <Tabs
        id="uncontrolled-tab-example"
        className="mt-5"
        activeKey={tabKey} onSelect={(e) => setTabKey(e)}
      >
        <Tab eventKey={1} title="Verified NFTs">
          <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                <Form.Control
                  placeholder="Search NFT"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <Row>
              {VerifyNFTData.map((item, idx) => (
                <ListPropertyCard title={item.title} price={item.price} currency={item.currency} images={item.images} />
              ))}
            </Row>
          </div>
        </Tab>
        <Tab eventKey={2} title="Unverified NFTs">
          <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                <Form.Control
                  placeholder="Search NFT"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <Row>
              {UnVerifyNFTData.map(((item, idx) => (
                <UnVerifyPropertyCard title={item.title} images={item.images} />
              )))}
            </Row>
          </div>
        </Tab>
        <Tab eventKey={3} title="My Listings">
          <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                <Form.Control
                  placeholder="Search NFT"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <Row>
              {MyListingData.map(((item, idx) => (
                <MListPropertyCard title={item.title} price={item.price} currency={item.currency} images={item.images} />
              )))}
            </Row>
          </div>
        </Tab>
        {mode != "BUY" ? (
          <Tab eventKey={4} title="My Booking">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
              <div className="SearchPropertiesBar position-absolute ">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                  <Form.Control
                    placeholder="Search NFT"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <Row>
                {MyBidData.map((item, idx) => (
                  <BidPropertyCard title={item.title} price={item.price} currency={item.currency} images={item.images} bPrice={item.bPrice} />
                ))}
              </Row>
            </div>
          </Tab>
        ) : (
          <Tab eventKey={4} title="My Bids">
            <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
              <div className="SearchPropertiesBar position-absolute ">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                  <Form.Control
                    placeholder="Search NFT"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <Row>
                {MyBidData.map((item, idx) => (
                  <BidPropertyCard title={item.title} price={item.price} currency={item.currency} images={item.images} bPrice={item.bPrice} />
                ))}
              </Row>
            </div>
          </Tab>
        )}

      </Tabs>
    </div>
  );
}

export default PropertiesPage;
