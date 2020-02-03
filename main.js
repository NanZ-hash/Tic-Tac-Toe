console.log("OUTPUT"); 



// check if not empty first ... 
let count =0 ; 

//set palyers : 
const palyerXScore=[]; // store the score 
const palyerOScore=[]; 


const player = function (id)
{ 
    // check if the value is empty or ... click once .. 


       // for ( let i=0 ; i<9 ;i++) { 
            if(count%2===0)
            { 
                document.getElementById(id).style.backgroundColor = "red";
                document.getElementById(id).innerHTML="X"; 
                // push the x value in the score index. 
                palyerXScore.push(id); // add the value 10 times ...!
            }
        
            else { 
                document.getElementById(id).style.backgroundColor = "blue";
                document.getElementById(id).innerHTML="O"; 
                // push the O value in the score index. 
                palyerOScore.push(id); 
            }
        
        //}
        count++; 

    
   
}

// switch players DONE 




const play = function()
{ 

    // check who is the winner. 
    // 

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

// arry win ? 2D.
*/

