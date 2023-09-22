import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SeiWalletProvider } from "@sei-js/react";

const chainId = 'atlantic-2'
const rpcUrl = 'https://sei-testnet-rpc.polkachu.com'
const restUrl = 'https://rest.atlantic-2.seinetwork.io'

// const restUrl = 'https://demo.codedestate.com:8080/https://sei-testnet-2-rest.brocha.in:443'
// const rpcUrl = 'https://demo.codedestate.com:8080/https://sei-testnet-2-rpc.brocha.in:443'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<SeiWalletProvider chainConfiguration={{ chainId, restUrl, rpcUrl }}>
		<App />
	</SeiWalletProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
