# Tic-Tac-Toe
the game is simply a 3x3 grid, the first player who marks in a horizontal or vertical m, or diagonal row wins the game. Usually the symbols X and O to return the two players. 
the project requirement in GA and Misk training program 

# User Story

- As a user I want to be able to play full round. 
- As a user I want to ba able with a second player. 
- As a user I want to be able to see WHO win the round and if it's a tie.
- As a user I should not be able to click on not empty space. 
- As a user I want to be able to reset the gam. whenever I want to.
- As a user, I should not be able to continue playing when the winner is announced. 


# technologies used

###sowftware : 
⋅⋅* visual studio code  for writing and editing the code 
⋅⋅* git bash to upload the files into GitHub 
⋅⋅* chrome developer tools for debugging  and testing the code 

 ⋅⋅* the code was written in: 
- HTML 
- CSS 
-Java script 
-JQuary

⋅⋅* the wireframes were drawn in Ipad notes


###the wireframes 
![alt text](https://www5.0zz0.com/2020/02/06/02/316634545.png "plan-1")


![alt text](https://www5.0zz0.com/2020/02/06/02/529363120.png "plan-2")


### approach taken
designing a clear plan and wireframe to satisfy the user story that given. 


⋅⋅* the first problem was whom the program will know how is player X and who is player O, there for a special ID was given, setting a count that increment in every round .. if the count is Even then the pointer will be assigned to X otherwise, it's O.

⋅⋅*the second problem was what approach was the winning conditions .. I chose to identify the places of the piece by using classes. assigning each class to the ID of the square. 

⋅⋅*writing the 8 conditions for winning for each X and O. by calling the position and the classes. 

### problem during the devlopment 
One particular problem was causing a lot of bugs was the calling and cancelling the event listener. the problem appears after resetting the game. the problem was solved by declaring a second class was checking if the space was empty or already assigned to the played class. 