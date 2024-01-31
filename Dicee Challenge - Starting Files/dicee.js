// let player1Img = document.querySelector(".img1");
// let player2Img = document.querySelector(".img2");
// let button = document.getElementsByClassName("click");


// // let diceNum1 = Math.floor((Math.random() * 6) + 1);
// // let diceNum2 = Math.floor((Math.random() * 6) + 1);

// function diceRolling1() {
//     let player1 = Math.floor((Math.random() * 6) + 1);
//     player1Img = player1Img.src = "../Dicee Challenge - Starting Files/images/"+ player1 + ".png"
// }

// function diceRolling2() {
//     let player2 = Math.floor((Math.random() * 6) + 1);
//     player2Img = player2Img.src = "../Dicee Challenge - Starting Files/images/"+ player2 + ".png"
// }

// button.addEventListener('onclick', diceRolling1());
// button.addEventListener('onclick', diceRolling2);

// // let x = Math.floor((Math.random() * 6) + 1);

// // console.log("../.././"+ x);



// let diceRolling = () => {

//     let diceNum1 = Math.floor(Math.random() * 6) + 1;
//     let player1Img = "../Dicee Challenge - Starting Files/images/dice" + diceNum1 + ".png";
//     document.querySelector("img1").setAttribute("src", player1Img);

//     let button = document.getElementsByClassName("click");

//     let diceNum2 = Math.floor(Math.random() * 6) + 1;
//     let player2Img = "../Dicee Challenge - Starting Files/images/dice" + diceNum2 + ".png";
//     document.querySelector("img2").setAttribute("src", player2Img);

//     if (diceNum1 > diceNum2) {
//         document.querySelector("h1").innerHTML = "Player1 Wins!!!";
//     } else if (diceNum2 > diceNum1) {
//         document.querySelector("h1").innerHTML = "Player2 Wins!!!";
//     } else {
//         document.querySelector("h1").innerHTML = "Draw!!!"
//     }
// };

function diceRolling() {
        let diceNum1 = Math.floor(Math.random() * 6) + 1;
        let player1Img = "../Dicee Challenge - Starting Files/images/dice" + diceNum1 + ".png";
        document.querySelector(".img1").setAttribute("src", player1Img);

        let button = document.getElementsByClassName("click")[0];

        let diceNum2 = Math.floor(Math.random() * 6) + 1;
        let player2Img = "../Dicee Challenge - Starting Files/images/dice" + diceNum2 + ".png";
        document.querySelector(".img2").setAttribute("src", player2Img);

        if (diceNum1 > diceNum2) {
            document.querySelector("h1").innerHTML = "Player1 Wins!!!";
        } else if (diceNum2 > diceNum1) {
            document.querySelector("h1").innerHTML = "Player2 Wins!!!";
        } else {
            document.querySelector("h1").innerHTML = "Draw!!!"
        }
};

