/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const mintarray = [];
function mintNFT (Name , zipCode, Anime) {
   const NFT = {
      "Name":Name,
      "zipCode":zipCode,
      "Anime":Anime,
   }
   mintarray.push(NFT);   //inserting element inside the array
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let j=0; j<mintarray.length; j++){
      console.log("\nUID " + (j+1));
      console.log("Name: " + mintarray[j].Name);
      console.log("zipCode: "+ mintarray[j].zipCode);
      console.log("Anime: " + mintarray[j].Anime);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log(mintarray.length);
}
// call your functions below this line
mintNFT("MRADUL", "261001", "One_piece");
mintNFT("Sanji", "261002", "Naruto");
mintNFT("Zoro", "261003", "Bleach");
mintNFT("Ichigo", "261004", "Tokyo Ghoul");
mintNFT("Issei", "261005", "Blue Lock");
listNFTs();
getTotalSupply()
