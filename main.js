console.log("OUTPUT"); 



// count for turns 
let count =0 ; 

//set palyers : 
let playerX=[]; // store the score 
let playerO=[];
let winner=false;
$('h3').hide(); 




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

    winX=( playerXrow1 || playerXrow2 || playerXrow3 || playerXcol1 || playerXcol2 || playerXcol3 || playerXdia1 || playerXdia2 )
    winO=( playerOrow1 || playerOrow2 || playerOrow3 || playerOcol1 || playerOcol2 || playerOcol3 || playerOdia1 || playerOdia2)
    
    let xScoreCount = getOCount()
    let oScoreCount = getXCount()

    place=xScoreCount+oScoreCount;

  if ( winX )
  { 
    $('h2').hide();
    $('h3').show();
    $('h3').text('X player win');
    
    return winner = true;
  }
  if ( winO )
  { 
    $('h2').hide();
    $('h3').show();
    $('h3').text('O player win');
    console.log(winO); 
    return winner = true;
    
  }
  if ( place === 9 &&!winX &&!winO) { 
    console.log('Tie game!')
    $('h2').hide();
    $('h3').show();
    $('h3').text('Tie !'); 
    return winner = true;
  }
  }




  const playTurn = function (event){
    console.log("88 : reset")
    $(".place").click(function(event) {
       console.log(count)
        if(count%2===0 && count< 9 )  
        { 
          $(this).removeClass("O")
          $(this).addClass("X")
          $(this).addClass("XPlay") // just to make sure there is no bugs..
           $(this).html("X")
         //
            $('h2').text('O turn');  
            console.log("98 : X")
            playerX.push(this);
            if ( playGame() === true)
            { 
                count =9;
            }
        }

        else if(count%2!==0 && count< 9 )
        { 
          $(this).removeClass("X")
          $(this).addClass("O")
          $(this).addClass("OPlay") // just to make sure there is no bugs..
            $(this).html("O")
            // push the O value in the score index.
         
            $('h2').text('X turn');
            playerO.push(this);
            console.log("113 : O")
            if ( playGame() === true)
            { 
                count =9;
            }
        }
        $( this ).off( event )
    count++;
    })
    
  }
  playTurn(event)
 
// main function...

function getXCount() {
  let x = playerX.length
  return x;
}

function getOCount() {
  let o = playerO.length
  return o;
} 

const playGame= function() {

  console.log('play game!')
  if ( winner === true)
  { 
    reset();
} 
  else {
    console.log('no winner yet...')
    gamePlay(); 

  }
}



 const reset = function() {
  count=0; 
  $('.place').removeClass('O')
  $('.place').removeClass('X')
  $('.place').html(' ')
  $('.place').removeClass("XPlay")
  $('.place').removeClass("OPlay")
    console.log("21 : reset")
  winner=false;
  playerX=[]
  playerO=[]
  
  $('h2').show();
  $('h2').html('Turns.. ')
  $('h3').hide(); 
  console.log(count)
   // location.reload();
  
   playTurn(event)
   
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
// color attr. ... 
// reset function 
*/

