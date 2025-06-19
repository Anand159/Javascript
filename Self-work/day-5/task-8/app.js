//************ form Event ********


let form = document.querySelector('form');

form.addEventListener("submit",function(event){
    event.preventDefault(); // submit hone se rokna
    alert("form submitted");

});

