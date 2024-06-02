/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// Define the NFT object constructor
function NFT(name, eyeColor, shirtType, bling, background) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.shirtType = shirtType;
    this.bling = bling;
    this.background = background;
}

// Create an array to store all NFTs
let nftCollection = [];

// Function to add an NFT to the collection
function addNFT(name, eyeColor, shirtType, bling, background) {
    const newNFT = new NFT(name, eyeColor, shirtType, bling, background);
    nftCollection.push(newNFT);
}

// Function to print all NFT details
function printNFTDetails() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Bling: ${nft.bling}`);
        console.log(`Background: ${nft.background}`);
        console.log('----------------------');
    });
}

// Adding some NFTs to the collection
addNFT('Epic Dragon', 'Red', 'Armor', 'Golden Necklace', 'Fiery Mountains');
addNFT('Mystic Unicorn', 'Blue', 'Silk Robe', 'Diamond Crown', 'Enchanted Forest');
addNFT('Cyber Tiger', 'Green', 'Leather Jacket', 'Silver Chain', 'Neon City');

// Print details of all NFTs
printNFTDetails();
