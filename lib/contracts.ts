export const GOVERNANCE_ADDRESS = "0x1234567890123456789012345678901234567890"; // Endereço fictício para testes
export const TOKEN_ADDRESS = "0x0987654321098765432109876543210987654321"; // Endereço fictício para testes

export const GOVERNANCE_ABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "proposalId", "type": "uint256" },
      { "internalType": "uint8", "name": "support", "type": "uint8" }
    ],
    "name": "castVote",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address[]", "name": "targets", "type": "address[]" },
      { "internalType": "uint256[]", "name": "values", "type": "uint256[]" },
      { "internalType": "bytes[]", "name": "calldatas", "type": "bytes[]" },
      { "internalType": "string", "name": "description", "type": "string" }
    ],
    "name": "propose",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "proposalId", "type": "uint256" }],
    "name": "state",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "proposalId", "type": "uint256" }],
    "name": "proposalVotes",
    "outputs": [
      { "internalType": "uint256", "name": "againstVotes", "type": "uint256" },
      { "internalType": "uint256", "name": "forVotes", "type": "uint256" },
      { "internalType": "uint256", "name": "abstainVotes", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
