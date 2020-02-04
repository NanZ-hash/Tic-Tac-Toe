console.log("OUTPUT"); 



// check if not empty first ... 
let count =0 ; 

//set palyers : 
let playerX=[]; // store the score 
let playerO=[];
let winner=false;




const gamePlay = function () 
{ 
    // chick WHo win .. 
    console.log("checking for winner...")
   

    // wining conditions for the Game .. using the color attr. to calculate the result.
    // row
    const playerXrow1 = $("#O-1.pink , #O-2.pink , #O-3.pink").length === 3
    const playerXrow2 = $("#T-1.pink , #T-2.pink , #T-3.pink").length === 3
    const playerXrow3 = $("#Th-1.pink , #Th-2.pink , #Th-3.pink").length === 3

    //col 

    const playerXcol1 = $("#O-1.pink , #T-1.pink , #Th-1.pink").length === 3
    const playerXcol2 = $("#O-2.pink , #T-2.pink , #Th-2.pink").length === 3
    const playerXcol3 = $("#O-3.pink , #T-3.pink , #Th-3.pink").length === 3
    // diagonal 
    const playerXdia1 = $("#O-1.pink , #T-2.pink , #Th-3.pink").length === 3
    const playerXdia2 = $("#O-3.pink , #T-2.pink , #Th-1.pink").length === 3

    // row 
    const playerOrow1 = $("#O-1.red , #O-2.red , #O-3.red").length === 3
    const playerOrow2 = $("#T-1.red , #T-2.red , #T-3.red").length === 3
    const playerOrow3 = $("#Th-1.red , #Th-2.red , #Th-3.red").length === 3

    //col 

    const playerOcol1 = $("#O-1.red , #T-1.red , #Th-1.red").length === 3
    const playerOcol2 = $("#O-2.red , #T-2.red , #Th-2.red").length === 3
    const playerOcol3 = $("#O-3.red , #T-3.red , #Th-3.red").length === 3
    // diagonal 
    const playerOdia1 = $("#O-1.red , #T-2.red , #Th-3.red").length === 3
    const playerOdia2 = $("#O-3.red , #T-2.red , #Th-1.red").length === 3


    let xScoreCount = getOCount()
    let oScoreCount = getXCount()
    
    

  if ( xScoreCount === playerXrow1 || playerXrow2 || playerXrow3 || playerXcol1 || playerXcol2 || playerXcol3 || playerXdia1 || playerXdia2 )
  { 
    console.log('X player win')
    $('h2').hide();
    $('h3').text('X player win'); 
    return winner = true;
  }
  if ( oScoreCount === playerOrow1 || playerOrow2 || playerOrow3 || playerOcol1 || playerOcol2 || playerOcol3 || playerOdia1 || playerOdia2 )
  { 
    console.log('O player win')
    $('h2').hide();
    $('h3').text('O player win'); 
    return winner = true;
  }
    else {
      console.log('game on...')
    }
  }


  function reset() {
      /*
    console.log("reset")
    $(".place").removeClass("pink red")
    playerX=[]; // store the score 
    playerO=[];
    */
    
    location.reload();
 }



 $("#replay").on('click', reset);


function playTurn(event) {
    $(".place").click(function(event) {
      console.log("0. this is: ", this)
      console.log("0. you clicked: ")//thingClicked)
       
        if(count%2===0 && count<9 )  
        { 
            $(this).css("background-color", "pink")
            $(this).html("X")
            $(this).addClass("pink") 
            playerX.push(this);
            $('h2').text('O turn');  

            if ( playGame() === true)
            { 
                count =10;
            }

        }

        if(count%2 !==0 && count<9) 
        { 
            $(this).css("background-color", "red")
            $(this).html("O")
            // push the O value in the score index. 
            $(this).addClass("red") 
            playerO.push(this);
            $('h2').text('X turn');
            if ( playGame() === true)
            { 
                count =10;
            }

        }
        $( this ).off( event )
        
    count++;
    playGame()
    })
    
  }
  playTurn(event)
   
 
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
        count=10;
    return count;
} 
    if (count === 9 ) {
        console.log('Tie game!')
        $('h2').hide();
        $('h3').text('Tie !'); 
        return winnewinner = true;
      } 
    else {
      console.log('no winner yet...')
      gamePlay(); 

    }
}



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

