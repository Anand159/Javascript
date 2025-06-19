//************ Manipulating Style *************
// style Property 
// obj.style

let img =document.querySelector('img');

console.dir(img)

console.log(img.style)

let heading = document.querySelector('h1');

console.log(heading.style)

console.log(heading.style.color="red");
console.log(heading.style.color="green"); // change color

let links = document.querySelectorAll(".box a");

for(let i=0; i<links.length; i++){  // change color
    links[i].style.color ="green"; 
}

for (link of links){
    link.style.color ="purple"; // change color

}




