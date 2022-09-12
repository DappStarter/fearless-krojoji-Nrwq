require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember hour hunt fat surround stable'; 
let testAccounts = [
"0x6b2e310edee3a2c5b1ba2b68004fc2884b6ff5ccc8a588baa29817a1c18488c5",
"0xb6a798d98c160683516d4efbf4e1fe49662bbce8e4f519b0e2f96efff9644698",
"0x82362bf4295083f6df31cf80adba7f3992773f6c06a3824651d6e431c9962b61",
"0x2ac6c114aa9cb37b9130a724c7005506c1443062745a4ab83532375aa20be2cc",
"0xc9c44430fd301d97a3e9854350899ebc02300b002ae6228cf899406a2665b444",
"0xe138682803e741d18d6f5d2e25b0155fc250a8254a4310dd74584a0149e22d15",
"0x5ecf0aa9530319bfb7c79c237b7d65362154d30403e83a08666c203b5dea7ccf",
"0x29282d81a61e86cbc765ad047377dcb13a5eabffbbd6bd723dd4094e21555509",
"0x1697128139187644338e4ec1590649f453b8160e030097d3f90d128e15e1aea9",
"0x682a3e8b8cc29726fe7db413bb4b7281e8588057014852652e5dafc7bc0cd54f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

