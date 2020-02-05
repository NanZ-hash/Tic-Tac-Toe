

// count for turns 
let count =0 ; 

//set palyers : 
let playerX=[]; // store the score 
let playerO=[];
let winner=false;
let empty=false;
$('h3').hide(); 
let sound= document.getElementById('vectory');


// for validating if the spot was empty .. 
const ifEmpty= function(place)
{ 
  if ($(place).hasClass('empty'))
  {
    empty = true; 
  }
  else 
  {
    empty =false;
  }
  
}



const gamePlay = function () 
{ 
  

    // wining conditions for the Game .. using the X O class . to calculate the result.
    // row
    const playerXrow1 = $("#O-1.X , #O-2.X , #O-3.X").length === 3
    const playerXrow2 = $("#T-1.X , #T-2.X , #T-3.X").length === 3
    const playerXrow3 = $("#Th-1.X , #Th-2.X , #Th-3.X").length === 3

    //col 

    const playerXcol1 = $("#O-1.X , #T-1.X , #Th-1.X").length === 3
    const playerXcol2 = $("#O-2.X , #T-2.X , #Th-2.X").length === 3
    const playerXcol3 = $("#O-3.X , #T-3.X , #Th-3.X").length === 3
    // diagonal 
    const playerXdia1 = $("#O-1.X , #T-2.X , #Th-3.X").length === 3
    const playerXdia2 = $("#O-3.X , #T-2.X , #Th-1.X").length === 3

    // row 
    const playerOrow1 = $("#O-1.O , #O-2.O , #O-3.O").length === 3
    const playerOrow2 = $("#T-1.O , #T-2.O , #T-3.O").length === 3
    const playerOrow3 = $("#Th-1.O , #Th-2.O , #Th-3.O").length === 3

    //col 

    const playerOcol1 = $("#O-1.O , #T-1.O , #Th-1.O").length === 3
    const playerOcol2 = $("#O-2.O , #T-2.O , #Th-2.O").length === 3
    const playerOcol3 = $("#O-3.O , #T-3.O , #Th-3.O").length === 3
    // diagonal 
    const playerOdia1 = $("#O-1.O , #T-2.O , #Th-3.O").length === 3
    const playerOdia2 = $("#O-3.O , #T-2.O , #Th-1.O").length === 3

    // assigning the value to the var win 

    winX=( playerXrow1 || playerXrow2 || playerXrow3 || playerXcol1 || playerXcol2 || playerXcol3 || playerXdia1 || playerXdia2 )
    winO=( playerOrow1 || playerOrow2 || playerOrow3 || playerOcol1 || playerOcol2 || playerOcol3 || playerOdia1 || playerOdia2)
    
    let xScoreCount = playerX.length;
    let oScoreCount = playerO.length;

    // for cal.draw ...
    place=xScoreCount+oScoreCount;
    var vectory=true;
  if ( winX ) // return true if X win
  { 
    $('h2').hide();
    $('h3').show();
    $('h3').text('X player win');
    winner = true
    if (vectory ){ 
      sound.pause(); 
      sound.currentTime=0; 
      sound.play(); 
      vectory=false;
    }
    return winner;
  }
  if ( winO ) // return true if O win
  { 
    $('h2').hide();
    $('h3').show();
    $('h3').text('O player win');
    winner = true
    if (vectory ){ 
      sound.pause(); 
      sound.currentTime=0; 
      sound.play(); 
      vectory=false;
    }
    return winner;
    
  }
  if ( place === 9 &&!winX &&!winO) {  // if Draw.. 
  
    $('h2').hide();
    $('h3').show();
    $('h3').text('Tie !'); 
    winner = true
    return winner;
  }
  }

// for Players Turns. 
const playTurn = function (){ 
 
  ifEmpty(this);
  if (empty) { 
    if(count%2===0 && count< 9 )  // Even for X
  { 
  
    $(this).removeClass('empty');
    $(this).addClass("XPlay") 
    $(this).addClass("played")
    $(this).addClass("X")
     $(this).html("X")
      $('h2').text('O turn');

      // push the X value in the score index.  
      playerX.push(this);
       // break the condtion to stop playing 
      if ( gamePlay() === true)
      { 
          count =10;
      }
  }

  else if(count%2!==0 && count< 9 ) // Odd for O 
  { 
    $(this).removeClass('empty');
    $(this).addClass("O")
    $(this).addClass("OPlay") 
    $(this).addClass("played")
    $(this).html("O")
    $('h2').text('X turn');
      // push the O value in the score index
      
      playerO.push(this);
      
    
      if ( gamePlay() === true) // break the condtion to stop playing 
      { 
          count =10;
      }
  }
count++;
}


}
  


 
    $(".place").on('click', playTurn);
    
    

 
// main function...
const playGame= function() {
  
  if ( winner === true)
  { 
   
    count =10 ;
} 
  else {
   
    gamePlay(); 

  }
}



 const reset = function() {
  winner=false;
  empty=false;
  count=0; 
  $('.place').removeClass('O')
  $('.place').removeClass('X')
  $('.place').removeClass("XPlay")
  $('.place').removeClass("OPlay")
  $('.place').removeClass('played');
  $('.place').addClass('empty');
  $('.place').html(' ')
  
  playerX=[]
  playerO=[]
  
  $('h2').show();
  $('h2').html('Turns.. ')
  $('h3').hide(); 
  
  }

  $("#replay").on('click', reset);
  



/*
//  fuction play ..  for the game to start. 
const paly = function () { 
//player turn .. odd and even values ... from 1 up to less that 10 
// player 1 odd 
// player 2 even 
}
// Game bord .. 
// palyer Turns .. 
// play 
// chick win codition ... 
// reset function 
*/

