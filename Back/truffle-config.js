require('dotenv').config()
const { MNEMONIC } = process.env

const PROJECT_ID = "09c273b97f3e4365b0a5ad9e6a68e377"; //Este campo deberia de estar dentro del .env pero al ser una prueba lo dejo aqui para evitar errores a la hora de la correccion
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://sepolia.infura.io/v3/${PROJECT_ID}`),
      confirmations: 2,
      network_id: 11155111,
      timeoutBlocks: 200,
      skipDryRun: true
    },

  },

  compilers: {
    solc: {
      version: "0.8.21",

      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  },
};
