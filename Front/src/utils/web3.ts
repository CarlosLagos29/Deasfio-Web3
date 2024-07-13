import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
    web3: Web3;
  }
}

let web3: Web3 = null ; // Sirve para verificar con los if si el usuario tiene aguna billetera en el navegador

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    window.alert("Usuario denegado");
    console.error("Usuario denegado");
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  window.alert("No se detecto ninguna billetera en el navegador, pruebe con alguna como Metamask"); //Lanza una alerta al navegador para que el usuario sepa porque no funciona la pagina 
  console.error("No se detecto ninguna billetera en el navegador, pruebe con alguna como Metamask");
}

export default web3;
