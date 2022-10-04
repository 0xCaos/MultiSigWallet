const { web3 } = require("@openzeppelin/test-helpers/src/setup");

const Wallet = artifacts.require("Wallet");

module.exports = async function(deployer, _network, accounts) {   // deployer, _network and accounts is passed to the function
                                                            // which are Ganache arguments. _network is ignored, but
                                                            // accounts contains the "fake" accounts to be used for the
                                                            // smart-contract constructor (approver accounts)
    await deployer.deploy(Wallet, [accounts[0], accounts[1], accounts[2]], 2);  // Using the deploy function, the constructor is called
                                                                        // and we pass the contract, approvers (accounts[n]) and quorum
    const wallet = await Wallet.deployed();
    web3.eth.sendTransaction({from: accounts[0], to: wallet.address, value: 10000}); // Send some Ether to the contract (10000 wei)
};