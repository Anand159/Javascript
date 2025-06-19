// ************ Selecting Element ************
// ->(getElementByTagName)
// Returns the Element as an HTML Collection or empty collection (if not found).

console.log(document.getElementsByTagName("p")); 
console.log(document.getElementsByTagName("p")[0]);
console.log(document.getElementsByTagName("p")[1]);

console.log(document.getElementsByTagName("p")[1].innerText="abc"); // change txt
console.log(document.getElementsByTagName("p")[1]);








