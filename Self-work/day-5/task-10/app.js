// ******** More Events *********

// (change event)
// The change event occurs when the value of an element has been changed
// (only work on <input>, <textarea> and <select> element )

// (input event)
// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.


let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change",function(){
    console.log("change event"); 
    console.log("final value =",this.value);
});

user.addEventListener("input",function(){
    console.log("input event"); // ek ek input ko tigger karna 
    console.log("final value =",this.value);
});
