require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config()

const GOERLI_URL = process.env.GOERLI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
// const PRIVATE_KEY ='9a75f34bef9b60937aa265d5e3619e08bea739b7f46fe00ee2127818359d93e1'
// const GOERLI_URL = 'https://eth-goerli.g.alchemy.com/v2/0Fb-ugUcBN0x00SNbi1p9F36kUqTpLpf'
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
