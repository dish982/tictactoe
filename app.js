let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;


let turnO = true; //playerX, playerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

const resetGame = ()  => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turnO) {
       box.innerText = "O";
       box.style.color = "";
       turnO = false;
       } else {
        //playerX
        box.innerText = "X";
        box.style.color = "darkcyan";
        turnO = true;
       }
       box.disabled=true;

       checkWinner();

    });
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       count++;
       console.log(count);
       if(count == 9){
        msg.innerText=`Game was draw. Play again.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
       }  
    });
});


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
} 

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", () => {
    count=0;
    resetGame();
});


newGameBtn.addEventListener("click", () => {
    count=0;
    resetGame();
});