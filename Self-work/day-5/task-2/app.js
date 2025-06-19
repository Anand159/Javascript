// ********** DOM Events **********
//-> Event are signal that something has occurred. (user input/action).

// onclick(when an element is clicked).
// onmouseenter(when mouse enters an element).

// let bt1= document.querySelector('button');

// btn1.onclick = function(){
//     console.log("button was clicked");
// }

let btns = document.querySelectorAll('button');


for (btn of btns){
    btn.onclick = sayhello;
    btn.onmouseenter = function(){     
        console.log("you entered a button")  // hover karege tap print hoga
    };
}

function sayhello(){
    alert("hello !");
}




