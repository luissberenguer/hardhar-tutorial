const { ethers } = require("hardhat");

async function main() {
  // Contract Factory
  const whitelistFactory = await ethers.getContractFactory("Whitelist");
  //Instance
  const deployedWhitelistContract = await whitelistFactory.deploy(10);
  // Await
  await deployedWhitelistContract.deployed();
  // Log the contract address
  console.log(
    "WhiteList Contract deployed at address ",
    deployedWhitelistContract.address
  );
}

// Call main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
