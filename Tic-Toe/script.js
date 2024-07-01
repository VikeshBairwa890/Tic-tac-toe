let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGamebtn=document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let massage=document.querySelector("p");
let turno = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const enablegame =()=>{
    for(let box of  boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turno=true;
    enablegame();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
       if(turno){
        box.innerText="O";
        turno=false;
       }else{
        box.innerText="X";
        turno=true;
       }
       box.disabled=true;
       chechwinner();
    });
});
const chechwinner=()=>{
    for(let  pattern of winPattern){
        let pas1val=boxes[pattern[0]].innerText;
        let pas2val=boxes[pattern[1]].innerText;
        let pas3val=boxes[pattern[2]].innerText;
        if(pas1val !="" && pas2val !="" && pas3val !=""){
            if(pas1val===pas2val && pas2val===pas3val){
                showwinner(pas1val);
            }
        }
    }
}
const disablebox=()=>{
    for(let box of  boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    massage.innerText=`congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
}

newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);