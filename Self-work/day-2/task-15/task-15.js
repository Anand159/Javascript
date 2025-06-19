let list=[];

let req = prompt("please Enter the choice");

while(true){
    if(req=="quit"){
        console.log("quit todo")
        break

    };
    if(req=="list"){
        console.log("-------------");
        for (let i=0; i<list.length; i++){
            console.log(i, list[i])
        }
        console.log("--------------");   

    }else if(req=="add"){
        let task = prompt("please Enter the task you want to add");
        list.push(task);
        console.log(` task added ${task}`);

    }else if(req=="delete"){
        let idx = prompt("please Enter the task index");

        list.splice(idx,1);
        console.log(`task deleted ${idx}`);
    }else{
        console.log("wrong request");
    } 
    req = prompt("please enter your request");

};
















// delete name ka logic

// let taskName = prompt("Please enter the task name to delete:");
// let idx = todo.findIndex(task => task === taskName)
// if (idx !== -1) {
//     todo.splice(idx, 1);
//     console.log(`Task deleted: ${taskName}`);
// } else {
//     console.log(`Task not found: ${taskName}`);
// }