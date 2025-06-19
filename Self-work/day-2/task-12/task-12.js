// Nested Loops with Nested Arrays

let heroes = [["iroman","spiderman","thor"], ["superman", "wonder woman", "flash"]];

// console.log(heroes[0][1])

for (let i=0 ; i<heroes.length; i++){
    console.log(i, heroes[i]);
    for(let j=0; j<heroes[i].length; j++){
        console.log(j, heroes[i][j]);
    };
};




let student =[["Anand",95],["Khushi",94.4],["Nisha",85]];

for (let i=0; i<student.length; i++){
    console.log(`info of Student #${i+1}`);
    for (let j=0; j<student[i].length; j++){
        console.log(student[i][j]);

    };
};


