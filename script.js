
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
    hoverEffect();
}

grid(16);

function hoverEffect(){
const hovers = document.querySelectorAll(".row");
hovers.forEach( hover =>{
    hover.addEventListener("mouseover",()=>{
        hover.style.backgroundColor= randomColor();
        // Get the current opacity or default to 0
        let currentOpacity = parseFloat(hover.style.opacity) || 0;

        // Cap the opacity at 1 to avoid going over
        let newOpacity = Math.min(currentOpacity + 0.1, 1);

        hover.style.opacity = newOpacity;
    })
})

}

function newgrid(){
    let n;
    do{
        n =Number(prompt("Enter gris size:"));

    }while(n<0 && n>100);
    container.innerHTML="";
    grid(n);
}

function randomColor(){
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
    return colors[Math.floor(Math.random() * 10)];
}
document.querySelector("button").addEventListener("click",newgrid);