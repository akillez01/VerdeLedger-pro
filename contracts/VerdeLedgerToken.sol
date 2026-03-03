// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title VerdeLedger Token (VLG)
 * @dev Token ERC-20 com suporte a votação (Governance) para a DAO VerdeLedger.
 */
contract VerdeLedgerToken is ERC20, ERC20Permit, ERC20Votes, Ownable {
    constructor(address initialOwner)
        ERC20("VerdeLedger Governance", "VLG")
        ERC20Permit("VerdeLedger Governance")
        Ownable(initialOwner)
    {
        // Mint inicial (Ex: 1.000.000 VLG)
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    // Funções necessárias para compatibilidade com ERC20Votes
    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}
