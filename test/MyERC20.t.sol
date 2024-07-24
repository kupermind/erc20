pragma solidity =0.8.25;

import {Test} from "forge-std/Test.sol";
import {Utils} from "./utils/Utils.sol";
import {MyERC20} from "../contracts/MyERC20.sol";

contract BaseSetup is Test {
    Utils internal utils;
    MyERC20 internal erc20;

    address payable[] internal users;
    address internal deployer;
    address internal dev;
    uint256 internal initialMint = 10_000_000_000e18;

    function setUp() public virtual {
        utils = new Utils();
        users = utils.createUsers(2);
        deployer = users[0];
        vm.label(deployer, "Deployer");
        dev = users[1];
        vm.label(dev, "Developer");

        erc20 = new MyERC20();
    }
}

contract MyERC20Test is BaseSetup {
    function setUp() public override {
        super.setUp();
    }

    function testAmount() public {
        erc20.mint(deployer, initialMint);
        vm.prank(deployer);

        // Check that the requested minted amount of ERC20 corresponds to its total supply
        assertEq(erc20.totalSupply(), initialMint);
    }
}