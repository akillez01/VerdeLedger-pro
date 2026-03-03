// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title VerdeLedger Treasury
 * @dev Tesouraria da DAO. Em um cenário real, o "owner" seria o contrato de Governança 
 * ou um Gnosis Safe (Multisig).
 */
contract VerdeLedgerTreasury is Ownable {
    event FundsReceived(address indexed sender, uint256 amount);
    event FundsReleased(address indexed to, uint256 amount, string purpose);

    constructor(address initialOwner) Ownable(initialOwner) {}

    // Receber doações em moeda nativa (ex: MATIC/POL)
    receive() external payable {
        emit FundsReceived(msg.sender, msg.value);
    }

    // Liberar fundos para projetos aprovados (Apenas a Governança ou Multisig pode chamar)
    function releaseFunds(address payable to, uint256 amount, string memory purpose) external onlyOwner {
        require(address(this).balance >= amount, "Saldo insuficiente");
        to.transfer(amount);
        emit FundsReleased(to, amount, purpose);
    }

    // Liberar tokens ERC20 (ex: USDC ou VLG)
    function releaseERC20(address token, address to, uint256 amount, string memory purpose) external onlyOwner {
        require(IERC20(token).balanceOf(address(this)) >= amount, "Saldo insuficiente do token");
        IERC20(token).transfer(to, amount);
        emit FundsReleased(to, amount, purpose);
    }
}
