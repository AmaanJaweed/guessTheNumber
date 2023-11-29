
var answer = generateNumber(); 
var highscore = 0


function guessed(){
    console.log(document.querySelector('.guess').value);
    //const answer = generateNumber();
    var guess = document.querySelector('.guess').value;
    console.log(answer);
    
    if(guess == answer){
        document.querySelector(".message").textContent = "Right Answer";
        document.body.style.backgroundColor = "green";
        if(document.querySelector(".score").textContent > document.querySelector(".highscore").textContent){
            highscore = document.querySelector(".score").textContent;
            document.querySelector(".highscore").textContent = highscore;
        }
        document.querySelector(".number").textContent = answer;
    }

    if(guess < answer){
        console.log("guess higher");
        document.querySelector(".message").textContent = "Guess higher";
        document.querySelector('.guess').value = "";
        document.querySelector(".score").textContent =  Number(document.querySelector(".score").textContent)-1;
    }

    if(guess > answer){
        console.log("guess lower");
        document.querySelector(".message").textContent = "Guess lower";
        document.querySelector('.guess').value = "";
        document.querySelector(".score").textContent =  Number(document.querySelector(".score").textContent)-1;
    }

    if(document.querySelector(".score").textContent == 0){
        document.body.style.backgroundColor = "red";
    }
}
document.querySelector('.check').addEventListener('click', function(){
    guessed();
});

document.addEventListener("keydown", function(event) {
    // Check if the pressed key is the "Enter" key (key code 13)
    if (event.key === "Enter") {
      guessed();
    }
  });


document.querySelector('.again').addEventListener('click', function(){
    document.body.style.backgroundColor = "black";
    document.querySelector(".score").textContent = 20;
    document.querySelector('.guess').value = "";
    answer = generateNumber(); 


});

function utility(){
    //document.body.style.backgroundColor = "green";
}

function generateNumber(){
    const answer = Math.floor(Math.random()*20);
    return(Math.floor(Math.random()*20));
}

utility();

/*

//if(right){
    document.querySelector('.message').textContent = "Yep";
//}
//if (wrong){
    document.querySelector('.message').textContent = "Nope";
//}

console.log(document.querySelector('.number').textContent);
*/



