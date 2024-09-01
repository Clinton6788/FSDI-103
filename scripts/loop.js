// for(let i=1;i<13;i++){
//     console.log("i=" + i);
// }

// function multTable(){
//     for(let i=1;i<=10;i++){
//         console.log(3*i);
//     }
// }

function foundIt(numToFind){
    for(let i=1;i<=100;i++){
        if(i==numToFind){
            document.write('I Found It!');
        }else{
            document.write(` <p> ${i} </p> `);
            
        }
    }
};

// Arrays

let names = ["a", "b", "c", "d", "e", "f"];

let age = [30,28,56,21,54,34]

console.log(names[2]);

// "array.length" works like count

for(let i=0;i<names.length;i++){
    document.getElementById("studentList").innerHTML+=`
        <div class="student">
        <h6> Student ${i+1} </h6>
        <img src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1">
            <p> Name: ${names[i]} </p>
            <p> Age: ${age[i]} </p>
        </div>`;
}