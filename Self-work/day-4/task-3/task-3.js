// ********* Selecting Element *********
// -> (getElementByClassName)
// Return the Element as an HTML Collection or empty collection (if not found).
// worng class element input hoga to htmlcollection empty hoga


console.log(document.getElementsByClassName("oldImg")); // img html collection
console.log(document.getElementsByClassName("oldImg")[0]); // assest img 
console.log(document.getElementsByClassName("oldImg")[1]);
console.log(document.getElementsByClassName("oldImg")[2]);


let smallImages = document.getElementsByClassName("oldImg");

for (let i=0; i<smallImages.length; i++){
    console.log(smallImages);
};

for (let i=0; i<smallImages.length; i++){
    console.log(smallImages[i]);
};

for (let i=0; i<smallImages.length; i++){
    console.log(smallImages[i].src);
};


for (let i=0; i<smallImages.length; i++){
    smallImages[i].src="./assets/spiderman_img.png"
    console.log(`value of image no. ${i} is changed`); // change img
};




