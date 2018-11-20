
        var wins=0;
        var loses=0;
        
        //initiate the game
        theGame();

        function theGame() {
        

        var remain=9;

        // -----------computer pick a letter----------------
        var letterPool= ["a","b","c","d",
                             "e","f","g","h",
                             "i","j","k","l",
                             "m","n","o","p",
                             "q","r","s","t",
                             "u","v","w","x",
                             "y","z"]
                             
        var computerChoice=letterPool[Math.floor(Math.random()*26)]
        $("#computer-choice").text(computerChoice)

        // ------------user guess----------------------------
        
        document.onkeyup= function (event) {

           var userGuess=event.key
        //     $("#your-guess").append(userGuess + " ")
        
        // --------------set the game rule-----------------------


            var gameOver = false
        
            if ( userGuess===computerChoice ) {
                wins++
                $("#u-win").text(wins)
                gameOver = true;
                $("#endGame").text("The letter is "+computerChoice+" ! "+"Yeh! YOU WIN!")
                

        } else {
            if ( remain>0 ) {
                $("#your-guess").append(userGuess + " ")
                remain--;
                console.log(remain)
                $("#chance-left").text(remain) 
            } else if (remain===0) {
                    loses++
                    $("#u-lose").text(loses)
                    gameOver = true;
                    $("#endGame").text("Game Over Man! Game over!")
                    
            }

        }

            if (gameOver) {
                document.onkeyup
            }

        }
    }
    

        //-----------------reset the game------------------
        
        function reset(){
                      
            var remain =9;
            // var wins=0;
            // var loses=0;

            $("#chance-left").text(remain)
            $("#u-win").text(wins)
            $("#u-lose").text(loses)
            
            $("#your-guess").empty()
            $("#endGame").text("")

            theGame()
        }

        $("#clear").on("click", function(){
            reset()
        })
