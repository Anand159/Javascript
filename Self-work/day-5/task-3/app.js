//********* Event Listener ********
// addEventListener
// element.addEventListener(event,callback);

// dblclick double click ki hota h event me 


let btns = document.querySelectorAll('button');

for (btn of btns){ 
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayName)  
};

function sayhello(){
    alert("Hi, Good Morning")
};

function sayName(){
    alert("Anand Soni")
};





