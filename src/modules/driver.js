import { createPlayer } from "./player.js";
import { getId, makeInteractive } from "./domHelper.js";
import { createBoardComponent } from "../components/boardComponent.js";

//Names from fields are assigned to variables
//-> default to "computer" (eg type=1) for second player
//Hide name input container
//Game area is un-hidden
//"Start game" and "Switch Orientation" button is placed

//SHIP PLACEMENT
//Player names are used to create players, assigned to variables
//-> if computer, generate ship placement
//Player1 board is generated in DOM
//Player1 is able to hover board, ships placements are highlighted
//As the player clicks, ships are placed. Next (smaller) ship is now highlighted
//Once all ships are placed:

//GAMEPLAY
//Computer board is shown
//Player attacks
//computer attacks (random)
//...
//Check each time that board reports that they have not lost, if they have a message declaring the winner is displayed
//"Reset" button appears

//RESET
