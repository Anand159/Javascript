let btn = document.querySelector('button');

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomcolor = getRandomColor();
    h3.innerText = randomcolor;

    let div = document.querySelector(".box");
    div.style.backgroundColor = randomcolor;

    console.log("color updated");
    
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color =`rgb(${red},${green},${blue})`
    return color;
}



