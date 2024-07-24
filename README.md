# ERC20
Generic solmate ERC20 token

## Development

### Prerequisites
- This repository follows the standard [`Hardhat`](https://hardhat.org/tutorial/) development process.
- The code is written on Solidity starting from version `0.8.25`.
- The standard versions of Node.js along with Yarn are required to proceed further (confirmed to work with Yarn `1.22.17` and npx/npm `10.7.0` and node `v20.14.0`).

### Install the dependencies
The project has submodules to get the dependencies. Make sure you run `git clone --recursive` or init the submodules yourself.
The dependency list is managed by the `package.json` file, and the setup parameters are stored in the `hardhat.config.js` file.
Simply run the following command to install the project:
```
yarn
```

### Core components
The contracts, deployment scripts and tests are located in the following folders respectively:
```
contracts
scripts
test
```

### Compile the code and run
Compile the code:
```
npx hardhat compile
```
Run the tests:
```
npx hardhat test
```

### Deployment
In order to be able to deploy contracts, copy env file, fill out sensitive data fields and source it:
```
cp env .env
source .env
```

## Acknowledgements
The contracts were inspired and based on the following sources:
- [Rari-Capital](https://github.com/Rari-Capital/solmate). Last known audited version: `a9e3ea26a2dc73bfa87f0cb189687d029028e0c5`;