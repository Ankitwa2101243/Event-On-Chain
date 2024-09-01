require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config();
module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    bitfinity: {
      url: 'https://testnet.bitfinity.network',
      accounts: [process.env.BITINFINITY_PRIVATE_KEY],
      chainId: 355113,
    },
    // sepolia: {
    //   url: process.env.SEPOLIA_RPC_URL, // Sepolia RPC URL from .env
    //   accounts: [process.env.SEPOLIA_PRIVATE_KEY], // Sepolia Private Key from .env
    //   chainId: 11155111, // Sepolia Chain ID
    // },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
