var turns = 0;

var playerOScore = 0;
var playerXScore = 0;

var wins = [7, 56, 448, 73, 146, 292, 273, 84];

var playerTurn = null;



$(".quadrant0").click(afterTurn);
$(".quadrant1").click(afterTurn);
$(".quadrant2").click(afterTurn);
$(".quadrant3").click(afterTurn);
$(".quadrant4").click(afterTurn);
$(".quadrant5").click(afterTurn);
$(".quadrant6").click(afterTurn);
$(".quadrant7").click(afterTurn);
$(".quadrant8").click(afterTurn);


// *turn + 1 , *playerX + 2^index, player-turn updates, **run loop to check score
function afterTurn() {
    if (turns % 2 == 0) {
        playerTurn = 'X';
        power = (parseInt($(this).attr("data-index")));
        turns += 1;
        playerXScore += (2 ** power);
        $(this).css("color", "blue");
        $(this).html(playerTurn);
        $(".player-turn").html("O's Turn");
    
        if (turns >= 3) {
            for (var x = 0; x <= wins.length; x++) {
                if (playerXScore == wins[x]) {
                    $(".game-status").html("Player X Wins!!!!");
                }
            }
        }
    } else {
        playerTurn = 'O'; 
        power = (parseInt($(this).attr("data-index")));
        turns += 1;
        playerOScore += (2 ** power);
        $(this).css("color", "red");
        $(this).html(playerTurn);
        $(".player-turn").html("X's Turn");
        
    if (turns >= 3) {
        for (var x = 0; x <= wins.length; x++) {
            if (playerOScore == wins[x]) {
                $(".game-status").html("Player O Wins!!!!");
            };
        }
    }
    }
}