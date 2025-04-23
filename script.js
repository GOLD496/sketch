
let container = document.getElementById("container");
let row;
let column;

function grid(size){
    for(let i=0;i<size;i++){

        column=  document.createElement("div");
        column.classList.add("column");
    
        for(let j=0;j<size;j++){
        row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        }
        container.appendChild(column);
    }
}

grid(16);


const hovers = document.querySelectorAll(".row");
hovers.forEach( hover =>{
    hover.addEventListener("mouseover",()=>{
        hover.style.backgroundColor="black";
    })
})

function newgrid(){
    location.reload(); // Reloads the current page
    let n;
    do{
        n =Number(prompt("Enter gris size:"));

    }while(n<0 && n>100);
    grid(n);
}
document.querySelector("button").addEventListener("click",newgrid);