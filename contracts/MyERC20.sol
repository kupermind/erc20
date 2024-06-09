// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {ERC20} from "../lib/solmate/src/tokens/ERC20.sol";

/// @title MyERC20 - Smart contract for generic ERC20 token.
/// @author Aleksandr Kuperman - <shurik.asa@gmail.com>
contract MyERC20 is ERC20 {
    constructor()
        ERC20("My ERC20 Token", "MyERC20", 18)
    {}

    /// @dev Mints MyERC20 tokens.
    /// @param account Account address.
    /// @param amount MyERC20 token amount.
    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    /// @dev Burns MyERC20 tokens.
    /// @param amount MyERC20 token amount to burn.
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}