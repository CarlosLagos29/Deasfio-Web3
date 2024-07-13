import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
    web3: Web3;
  }
}

let web3: Web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.error("Usuario denegado");
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.error("No se detecto ninguna billetera en el navegador, pruebe con alguna como Metamask");
}

export default web3;
