import { useState, useEffect } from "react";

import logo from "../../../assets/images/sei.png";
import nft from "../../../assets/images/nft.jpg";

import { WalletConnectButton } from "@sei-js/react";
import {
  useWallet,
  useCosmWasmClient,
  useSigningCosmWasmClient,
} from "@sei-js/react";
import { calculateFee, GasPrice, coin } from "@cosmjs/stargate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const chainId = 'atlantic-2'
// const restUrl = 'https://sei-testnet-2-rest.brocha.in:443'
// const rpcUrl = 'https://sei-testnet-2-rpc.brocha.in:443'
const contractAddress =
  "sei10y50fh280l66em52mjxclh8cgchh6n7lsdpaa7fu3ham70rrv33qjwvcpe";
const prevContract =
  "sei1l6c37a5xenquyjxjvsehcn4j97tca94k4yk2uzfmpeamu2vw350qmypwq4";

function MintPage() {
  // const [count, setCount] = useState(0)
  const { connectedWallet, offlineSigner, accounts } = useWallet();

  const { cosmWasmClient } = useCosmWasmClient();
  const { signingCosmWasmClient } = useSigningCosmWasmClient();
  const [flag, setflag] = useState(false);
  const [mintedCount, setCount] = useState(0);
  const [tokenImg, setTokenImg] = useState("");

  function mintCount() {
    const query = {
      num_tokens: {},
      // nft_info: {
      // token_id: '31',
      /// unset or false will filter out expired approvals, you must set to true to see them
      // include_expired: false
      // }
    };
    cosmWasmClient
      ?.queryContractSmart(contractAddress, query)
      .then((res) => {
        cosmWasmClient
          ?.queryContractSmart(prevContract, query)
          .then((r) => {
            setCount(res.count + r.count);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    // console.log('mint asdf')
    mintCount();
  }, [flag, cosmWasmClient]);

  const imageShow = (token_uri) => {
    console.log(token_uri);
    fetch(token_uri).then((res) => {
      res.json().then((res) => {
        console.log(res.properties.image.description);
        setTokenImg(res.properties.image.description);
      });
    });
  };

  function generateRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const mintNFT = async () => {
    // if (!accounts[0]?.address) {
    //     toast(<div className='text-red-600'>Wallet not connected!</div>)
    //     return
    // }

    // if (1) {
    //     toast.error('Sorry, NFT minting is paused now.')
    //     return
    // }

    const fee = calculateFee(200000, "0.1usei");

    const amount = [{ amount: "100000", denom: "usei" }];
    const query = {
      num_tokens: {},
    };

    cosmWasmClient
      ?.queryContractSmart(contractAddress, query)
      .then((res) => {
        var tokenId = ((res.count + 1) % 10000).toString();

        if (tokenId == "0") tokenId = "1";

        console.log(tokenId);
        const OwnerQuery = {
          owner_of: {
            token_id: tokenId,
          },
        };

        // cosmWasmClient?.queryContractSmart(contractAddress, OwnerQuery).then(res => {
        //     console.log(res)
        // }).catch

        const randomId = generateRandomString(10);

        const CONTRACT_MESSAGE = {
          mint: {
            token_id: tokenId + randomId,
            owner: accounts[0]?.address,
            //bafybeiff7qheqlovhmz5t4dhu3q6zjijm7uxlfbhu4r6syx3fcu4i7f6wy
            //bafybeicv2dvbxcq72pzfbxjuhivxnljyzttyfcxs3djrl6abaax56s5be4
            //bafybeicfjlcheitcxxaf6g53rmnprwfb6kuzjgbawj5krjvn7rckm5koum
            // https://nftstorage.link/ipfs/bafybeiabagyfklfquemzy2bkf4zeiled75izpay5g6phdn7ct4ouraccgq
            //https://nftstorage.link/ipfs/bafybeiabagyfklfquemzy2bkf4zeiled75izpay5g6phdn7ct4ouraccgq/
            //bafybeighcbxvtbli2tcuvsi5uavjmttjow4rtsi4qng4rpzl6ybzqn6oka

            token_uri:
              "https://nftstorage.link/ipfs/bafybeighcbxvtbli2tcuvsi5uavjmttjow4rtsi4qng4rpzl6ybzqn6oka/" +
              tokenId +
              ".json",
            extension: {},
          },
          // transfer_nft: { recipient: 'sei166v9p8yfca65um5p3vp05h648ufmtu33zd0d8e', token_id: '31' },
        };

        // const msg = {
        //     typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        //     value: {
        //         sender: accounts[0]?.address,
        //         contract: contractAddress,
        //         msg: CONTRACT_MESSAGE,
        //         sent_funds: amount,
        //     },
        // };

        // signingCosmWasmClient.signAndBroadcast(accounts[0]?.address, [msg], fee).then(r => {

        signingCosmWasmClient
          ?.execute(accounts[0].address, contractAddress, CONTRACT_MESSAGE, fee)
          .then((r) => {
            console.log(r);
            setflag(true);
            imageShow(CONTRACT_MESSAGE.mint.token_uri);
            toast.success(`Mint Successful! Tx hash:${r.transactionHash}}`);
          })
          .catch((err) => {
            console.log(err);
            toast.error(`${err.toString()}`);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.toString()}`);
      });

    // signingCosmWasmClient.sendTokens(accounts[0].address, 'sei12wd704w8sts0jud4mrplq2j9j0y8366dxn4395', amount, fee).then((r) => {
    //     toast.success(`Sent sei Successfully! Tx hash:${r.transactionHash}}`)
    //     console.log(r)

    // }).catch((err) => {
    //     consoles.log(err)
    //     toast.error(`${err.toString()}`)
    // })
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="text-left fw-bold fs-5">Mint Your Token</div>
      {/* <div>
                NFTs drop April 15th, at 2:00 PM UTC
            </div> */}
      <div class="d-flex justify-content-center" style={{ marginTop: "50px" }}>
        <div
          class="border border-gray rounded-2 d-flex justify-content-around p-2 bd-highlight"
          style={{ width: "400px" }}
        >
          <div className="flex-column">
            <div className="d-flex flex-row">
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: "green",
                  marginTop: "10px",
                }}
              ></div>
              <div>Status</div>
            </div>
            <div className="fw-bold fs-5">Live</div>
          </div>
          <div className="flex-column">
            <div className="d-flex flex-row">
              <img
                src={logo}
                style={{ width: "20px", height: "20px", marginTop: "3px" }}
              ></img>
              <div>Price</div>
            </div>
            <div className="fw-bold fs-5">Free</div>
          </div>
          <div className="flex-column">
            <div>Minted</div>
            <div className="fw-bold fs-5">{mintedCount}</div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center" style={{ marginTop: "100px" }}>
        <img
          style={{ width: "300px", height: "300px", borderRadius: "150px" }}
          src={nft}
        ></img>
      </div>
      <div class="d-flex justify-content-center" style={{ marginTop: "100px" }}>
        <div
          className="mintbtn"
          onClick={() => {
            mintNFT();
          }}
        >
          Mint Your NFT
        </div>
      </div>
      {flag && (
        <div>
          <div class="d-inline-flex p-2 fs-5 fw-bold mt-6">Your NFT</div>
          <div
            class="d-flex justify-content-center"
            style={{ marginBottom: "100px" }}
          >
            <img
              style={{ width: "300px", height: "300px" }}
              src={tokenImg}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default MintPage;
