require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { MNEMONIC, APOTHEM_RPC_URL } = process.env;

const DEFAULT_MNEMONIC =
  "disorder pizza plate good dream delay cave broom width gaze glove fossil";

const sharedNetworkConfig = {
  accounts: {
    mnemonic: MNEMONIC ?? DEFAULT_MNEMONIC,
  },
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    apothem: {
      ...sharedNetworkConfig,
      url: APOTHEM_RPC_URL,
    },
  },
};
