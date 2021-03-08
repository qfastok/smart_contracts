const Add = artifacts.require("Add");

module.exports = async(deployer, _network, accounts)  => {
    deployer.deploy(Add, 0);
};
