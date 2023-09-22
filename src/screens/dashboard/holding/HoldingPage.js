import { Card, Image, Tabs, Tab, Form, InputGroup, Row } from "react-bootstrap";
import SEIIcon from "../../../assets/images/crypto/sei.svg";
import SolanaIcon from "../../../assets/images/crypto/solana.svg";
import { MyNFTCard } from "../../../components/card/card";
import { FaSearch } from "react-icons/fa";
import {
  useWallet,
  useCosmWasmClient,
  useSigningCosmWasmClient,
  useQueryClient,
} from "@sei-js/react";
import { useState, useEffect } from "react";

function HoldingPage() {
  const contractAddress =
    "sei10y50fh280l66em52mjxclh8cgchh6n7lsdpaa7fu3ham70rrv33qjwvcpe";
  const prevContract =
    "sei1l6c37a5xenquyjxjvsehcn4j97tca94k4yk2uzfmpeamu2vw350qmypwq4";

  const { accounts } = useWallet();
  const { cosmWasmClient } = useCosmWasmClient();
  const [tokenIds, setTokenIds] = useState([]);
  const [prevtokenIds, setPrevTokenIds] = useState([]);
  const { queryClient } = useQueryClient();

  let Ids = [];

  useEffect(() => {
    setNFTs();
  }, [cosmWasmClient]);

  function showNFTs(start_after) {
    const query = {
      tokens: {
        owner: accounts[0]?.address,
        limit: 50,
        start_after: start_after,
      },
    };

    cosmWasmClient
      .queryContractSmart(contractAddress, query)
      .then((res) => {
        if (res.tokens.length == 50) {
          Ids = Ids.concat(res.tokens);
          showNFTs(res.tokens[49]);
        }
        console.log(Ids.length);
        setTokenIds(Ids);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setNFTs() {
    const prevquery = {
      tokens: {
        owner: accounts[0]?.address,
        limit: 100,
      },
    };
    cosmWasmClient
      ?.queryContractSmart(prevContract, prevquery)
      .then((res) => {
        console.log(res.tokens);
        setPrevTokenIds(res.tokens);
      })
      .catch((err) => {
        console.log(err);
      });

    const query = {
      tokens: {
        owner: accounts[0]?.address,
        limit: 50,
      },
    };

    cosmWasmClient
      ?.queryContractSmart(contractAddress, query)
      .then((res) => {
        setTokenIds(res.tokens);
        console.log(res.tokens);
        if (res.tokens.length == 50) {
          Ids = res.tokens;
          showNFTs(res.tokens[49]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="HoldingPage mt-2">
      <div className="fs-4 fw-bold mb-3">My Holdings</div>
      <Card className="mb-3">
        <Card.Body className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image src={SEIIcon} className="me-3" width="50" />
            <div>
              <div className="fs-6 fw-bold">SEI Network</div>
              <div className="text-gray">SEI</div>
            </div>
          </div>
          <div className="">
            <div className="text-success">
              <small>+0.80%</small>
            </div>
            <div className="">SEI 524.24</div>
          </div>
        </Card.Body>
      </Card>
      <Tabs
        defaultActiveKey="nfts"
        id="uncontrolled-tab-example"
        className="mt-5"
      >
        <Tab eventKey="nfts" title="My NFTs">
          <div className="PropertiesTabContent p-2 border border-1 border-top-0 shadow position-relative">
            <div className="SearchPropertiesBar position-absolute ">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search NFT"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <Row>
              {prevtokenIds.map((item) => {
                return (
                  <MyNFTCard tokenId={item} contractAddress={prevContract} />
                );
              })}

              {tokenIds.map((item) => {
                return (
                  <MyNFTCard tokenId={item} contractAddress={contractAddress} />
                );
              })}
            </Row>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default HoldingPage;
