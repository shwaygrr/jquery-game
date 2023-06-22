var turns = 0;

var win1 = new Set([0,1,2]); 
var win2 = new Set([0,3,6]);
var win3 = new Set([6,7,8]);
var win4 = new Set([2,5,8]);
var win5 = new Set([0,4,8]); 
var win6 = new Set([2,4,6]); 
var win7 = new Set([1,4,7]);
var win8 = new Set([3,4,5])
var wins = [win1, win2, win3, win4, win5, win6, win7, win8];

var playerTurn = null;

var turnsListX =  new Set()
var turnsListO =  new Set();

var element;

$("#quadrant0").click(afterTurn);
$("#quadrant1").click(afterTurn);
$("#quadrant2").click(afterTurn);
$("#quadrant3").click(afterTurn);
$("#quadrant4").click(afterTurn);
$("#quadrant5").click(afterTurn);
$("#quadrant6").click(afterTurn);
$("#quadrant7").click(afterTurn);
$("#quadrant8").click(afterTurn);

function afterTurn() {
    var element = $(this);
    if (turns % 2 == 0) {
        updatePlayer(element, 'X', "blue", turnsListX, "O's turn", "X wins!!!");
    } else {
        updatePlayer(element, 'O', "red", turnsListO, "X's turn", "O wins!!!");
    }
}



function updatePlayer(element, player, color, turnsList, new_turn, winner) {
    playerTurn = player;
    turnsList.add(parseInt($(element).attr("data-index")));
    $(".x-score").html($(element).attr("data-index"));
    
    $(element).css("color", color);
    $(element).html(playerTurn);
    
    turns++;
    $(".player-turn").html(new_turn);

    if (turns > 4) {
        for (var i = 0; i <= wins.length; i++) {
            isSubset(turnsList, wins[i]) ? $(".game-status").html(winner) : null;
            }
    }
}



//checks if winning set is a subset
function isSubset(turnsList, list) {
    var has = 0;
    list.forEach((value) => {
        turnsList.has(value) ? has++ : null;
        });

    return (has == 3) ? true : false;
}