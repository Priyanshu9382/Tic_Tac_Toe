let boxes=document.querySelectorAll(".box");
let resetGame=document.querySelector("#resetGame");
let newGameBtn = document.querySelector("#New_Game_Btn");
let msgContainer = document.querySelector(".msg_box");
let msg = document.querySelector("#msg");

let turnO=true;
let count=0;
const winningPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            count++;
        }else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        box.disabled=true;
        checkWinner();
    
    })
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
    }
}
const showWinner = (winner) =>{
    msg.innerText=`winner is player ${winner}!!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const drawMatch = () =>{
    msg.innerText=`Match is draw`;
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winningPattern){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val != ""&& pos2Val != "" && pos3Val != ""){
                if (pos1Val=== pos2Val&& pos2Val===pos3Val){
                    let winner= pos1Val;
                    showWinner(winner);
                    count=0;
                }
            }
            if(count==9){
                drawMatch();
            }
    }
}
resetGame.addEventListener("click",() =>{
   turnO=true;
   count=0;
    for(let box of boxes){
        box.innerText="";
    }
    enableBoxes();
})
newGameBtn.addEventListener("click",()=>{
    turnO=true;
    count=0;
    for(let box of boxes){
        box.innerText="";
    }
    enableBoxes();
    msgContainer.classList.add("hide");
})