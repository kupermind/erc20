/*global process*/

const { ethers } = require("hardhat");

async function main() {
    const providerName = "sepolia";
    const provider = await ethers.providers.getDefaultProvider(providerName);
    const signers = await ethers.getSigners();

    EOA = signers[0];
    // EOA address
    const deployer = await EOA.getAddress();
    console.log("EOA is:", deployer);

    // Transaction signing and execution
    console.log("1. EOA to deploy MyERC20 token");
    console.log("You are signing the following transaction: MyERC20.connect(EOA).deploy()");
    const MyERC20 = await ethers.getContractFactory("MyERC20");
    const myERC20 = await MyERC20.connect(EOA).deploy();
    const result = await myERC20.deployed();

    // Transaction details
    console.log("Contract deployment: MyERC20");
    console.log("Contract address:", myERC20.address);
    console.log("Transaction:", result.deployTransaction.hash);

    // Contract verification
    const execSync = require("child_process").execSync;
    execSync("npx hardhat verify --network " + providerName + " " + myERC20.address, { encoding: "utf-8" });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });