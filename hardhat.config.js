/*global process*/

require("hardhat-contract-sizer");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY_MAINNET = process.env.ALCHEMY_API_KEY_MAINNET;
const ALCHEMY_API_KEY_SEPOLIA = process.env.ALCHEMY_API_KEY_SEPOLIA;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
let TESTNET_MNEMONIC = process.env.TESTNET_MNEMONIC;

const accounts = {
    mnemonic: TESTNET_MNEMONIC,
    path: "m/44'/60'/0'/0",
    initialIndex: 0,
    count: 20,
};

if (!TESTNET_MNEMONIC) {
    // Generated with bip39
    accounts.mnemonic = "velvet deliver grief train result fortune travel voice over subject subject staff nominee bone name";
    accounts.accountsBalance = "100000000000000000000000000";
}

module.exports = {
    networks: {
        local: {
            url: "http://localhost:8545",
        },
        hardhat: {
            allowUnlimitedContractSize: true
        },
        mainnet: {
            url: "https://eth-mainnet.g.alchemy.com/v2/" + ALCHEMY_API_KEY_MAINNET,
            accounts: accounts,
            chainId: 1,
        },
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/" + ALCHEMY_API_KEY_SEPOLIA,
            accounts: accounts,
            chainId: 11155111,
        }
    },
    etherscan: {
        apiKey: {
            mainnet: ETHERSCAN_API_KEY,
            sepolia: ETHERSCAN_API_KEY
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.25",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000000,
                    },
                    evmVersion: "cancun"
                },
            }
        ]
    },
    gasReporter: {
        enabled: false
    }
};