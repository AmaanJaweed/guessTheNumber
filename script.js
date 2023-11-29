
const answer = generateNumber(); 

document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
    //const answer = generateNumber();
    var guess = document.querySelector('.guess').value;
    console.log(answer);
    
    if(guess == answer){
        document.querySelector(".message").textContent = "Right Answer";
    }

    if(guess < answer){
        console.log("guess higher");
        document.querySelector(".message").textContent = "Guess higher";
        document.querySelector('.guess').value = "";
    }

    if(guess > answer){
        console.log("guess lower");
        document.querySelector(".message").textContent = "Guess lower";
        document.querySelector('.guess').value = "";
    }
});


function generateNumber(){
    const answer = Math.floor(Math.random()*20);
    return(Math.floor(Math.random()*20));
}



/*

//if(right){
    document.querySelector('.message').textContent = "Yep";
//}
//if (wrong){
    document.querySelector('.message').textContent = "Nope";
//}

console.log(document.querySelector('.number').textContent);
*/



