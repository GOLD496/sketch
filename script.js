let size =Number( prompt("Enter gris size:"));
let container = document.getElementById("container");
let row;
let column;

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