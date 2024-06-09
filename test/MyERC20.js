/*global describe, context, beforeEach, it*/
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MyERC20", function () {
    let signers;
    let deployer;
    let token;
    const initSupply = "5" + "0".repeat(26);

    beforeEach(async function () {
        // Accounts
        signers = await ethers.getSigners();
        deployer = signers[0];

        // Contracts
        const MyERC20 = await ethers.getContractFactory("MyERC20");
        token = await MyERC20.deploy();
        await token.deployed();
    });

    context("Initialization", async function () {
        it("Correctly constructs ERC20 token", async () => {
            expect(await token.name()).to.equal("My ERC20 Token");
            expect(await token.symbol()).to.equal("MyERC20");
            expect(await token.decimals()).to.equal(18);
        });

        it("Mint tokens", async () => {
            await token.mint(deployer.address, initSupply);
        });
    });
});