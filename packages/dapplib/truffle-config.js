require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rifle tape protect inflict perfect flat square'; 
let testAccounts = [
"0x56b3aac9c37c354fbd677270e1642089f6ad268ef43226492168d82a1fbe841f",
"0x3d4bfe1a8dfd7f1c0bf6b4da28ec7990b189f4483d81089dc442225446789084",
"0x6ba6b2defa2c1a1f8216b936a8561ece62d52a22457a82a7732e9699c34b8082",
"0xdbd3a7865bd58ff0f7f5d68109b75de18a123ea8f3d78aecb6482018dd863b35",
"0x7f66a847116027d4b2d3d665497eb48c379796dda4256fd3eb3af93a82a56970",
"0xee708df26ba7f987e1b4fc6ffbe69ff6d8577e348656ac0d3ae131eb84100cc8",
"0xacb285420ae9b1d39a3014387b6b984690fb64044348865f83049929dc955881",
"0xc34a28940f5bffea93c9d2df14c39f5e0477f97ac8b8245008cc6edddc2aabae",
"0x5b5d18d78ed0d5456d74c50eb97a04be93f4ab379f9dfa149bd4be511532ff5c",
"0xb71bd3a958b6a0fd3bfe2cadc9832f4caab0e923b9d9cbe4da9780b32a58fc1a"
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

