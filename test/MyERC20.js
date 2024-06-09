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
            // Check token name
            expect(await token.name()).to.equal("My ERC20 Token");

            // Check token symbol
            expect(await token.symbol()).to.equal("MyERC20");

            // Check token decimals
            expect(await token.decimals()).to.equal(18);
        });

        it("Mint tokens", async () => {
            // Mint initial supply of tokens
            await token.mint(deployer.address, initSupply);
        });

        it("Burn tokens", async () => {
            // Try to burn tokens without them being minted
            await expect(
                token.burn(100)
            ).to.be.reverted;

            // Mint tokens first
            await token.mint(deployer.address, initSupply);
            // Now it's possible to burn
            await token.burn(100);
        });
    });
});