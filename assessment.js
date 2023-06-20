const mintarray = [];
function mintNFT (Name , zipCode, Anime) {
   const NFT = {
      "Name":Name,
      "zipCode":zipCode,
      "Anime":Anime,
   }
   mintarray.push(NFT);   //inserting element inside the array
}

//print the data 
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
