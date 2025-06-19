// addEventListener se btn only nahi sab element ko kar skte h (p,a,div,etc)

let p = document.querySelector('p');
p.addEventListener("click",function(){
    console.log("para was clicked");  // click
});

let box =document.querySelector(".box");
box.addEventListener("mouseenter",function(){ // mouse hover
    console.log("mouse inside box");
});


