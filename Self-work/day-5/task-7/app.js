// ********** Keyboard Events **********
let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("key = ", event.key);  // key ka name 
    console.log("code = ", event.code); // key ka code
    console.log("key was pressed");
});


