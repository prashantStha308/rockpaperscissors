const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById( "scissors" );

const bRock = document.getElementById("b-rock");
const bPaper = document.getElementById("b-paper");
const bScissors = document.getElementById( "b-scissors" );
// const botCalled = false;

const elements = [ 'rock'  , 'paper' , 'scissors'];

// Function to reset user options
const userReset = ()=>{
    rock.classList.remove("be-active");
    paper.classList.remove("be-active");
    scissors.classList.remove("be-active");
}

// functions to reset bot options
const botReset = ()=>{
    bRock.classList.remove("be-active");
    bPaper.classList.remove("be-active");
    bScissors.classList.remove("be-active");
}

function activeBotRock(){

    botReset();
    bRock.classList.add("be-active");
}
const activeUserRock = ()=>{
    rock.classList.add("be-active");
}

const activeBotPaper = ()=>{

    botReset();
    bPaper.classList.add("be-active");

}
const activeUserPaper = ()=>{
    userReset();
    paper.classList.add("be-active");
}

const activeBotScissors = ()=>{

    botReset();
    bScissors.classList.add("be-active");

}
const activeUserScissors = ()=>{
    scissors.classList.add("be-active");
}

function userSelect( element ){
    mainGame(element);
}

function mainGame(userSelect){
    const botSelect = Math.floor(Math.random() * elements.length);

    switch( userSelect ){

        case 'rock':
            activeUserRock();
            if( userSelect === elements[botSelect] ){
                activeBotRock();
                console.log( "Draw!" );
            }
            else if( elements[botSelect] === 'paper' ){
                activeBotPaper();
                console.log( "You Loose!!" );
            }
            else{
                activeBotScissors();
                console.log("You Win!!");
            }
            break;

        case 'paper':
            activeUserPaper();
            if( userSelect === elements[botSelect] ){
                activeBotPaper();
                console.log( "Draw!" );
            }
            else if( elements[botSelect] === 'scissors' ){
                activeBotScissors();
                console.log( "You Loose!!" );
            }
            else{
                activeBotRock();
                console.log("You Win!!");
            }
            break;

        case 'scissors':
            activeUserScissors();
            if( userSelect === elements[botSelect] ){
                activeBotScissors();
                console.log( "Draw!" );
            }
            else if( elements[botSelect] === 'rock' ){
                activeBotRock();
                console.log( "You Loose!!" );
            }
            else{
                activeBotPaper();
                console.log("You Win!!");
            }
            break;
        
        default:
            console.log( "Invalid option" );
    }

}
