const box=document.getElementById("box");

let x=0;
let y=0;
let move = 30;
document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        box.textContent="😮";
        box.style.backgroundColor="tomato";
    }
});

document.addEventListener("keyup",event =>{
    box.textContent="😊";
    box.style.backgroundColor="lightgreen";
})
document.addEventListener("keydown",event =>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
            case "ArrowRight":
                x += move;
                break;  
        }

        box.style.top=`${y}px`;
        box.style.left=`${x}px`;
    }
});