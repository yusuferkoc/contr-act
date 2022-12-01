// https://eth-goerli.alchemyapi.io/v2/rFgEM_KvD5a4k7RZ2Ld1iE1byIPLog_6

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:'https://eth-goerli.alchemyapi.io/v2/rFgEM_KvD5a4k7RZ2Ld1iE1byIPLog_6',
      accounts:['fb13aa4a58fc68ffb1396cfcbc5e38c9bfb51ffb5a955cbc39b2ff48bbb4f295']
    }
  }

}