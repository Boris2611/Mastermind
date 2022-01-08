// Red == 1
// Green == 2
// Blue == 3
// Yellow = 4
// Orange == 5
// Purple == 6

var rowA = [];
var rowB = [];
var rowC = [];
var rowD = [];
var rowE = [];
var rowF = [];

var row;


var played = 0;

var test;
// This will be randomly generated
var result = []

for (var i = 0; i < 4; i++) {
    test = Math.floor(Math.random() * 5);
    test += 1;
    result.push(test);
} 

var color;
var colorValue;

// RED
function red() {
    color = "red";
    colorValue = 1;
    logic();
}
// GREEN
function green() {
    color = "green";
    colorValue = 2;
    logic();
}
// BLUE
function blue() {
    color = "blue";
    colorValue = 3;
    logic();
}
// YELLOW
function yellow() {
    color = "yellow";
    colorValue = 4;
    logic();
}
// ORANGE
function orange() {
    color = "orange";
    colorValue = 5;
    logic();
}
// PURPLE
function purple() {
    color = "purple";
    colorValue = 6;
    logic();
}


// LOGIC
function logic() {
    if (played < 4) {
        rowA.push(colorValue);
        var id = "a" + parseInt(played + 1);
        document.getElementById(id).style.backgroundColor = color;
        row = rowA;
    }
    else if (played >= 4 && played < 8) {
        rowB.push(colorValue);
        var id = "b" + parseInt(played - 3);
        document.getElementById(id).style.backgroundColor = color;
        row = rowB;
    }
    else if (played >= 8 && played < 12) {
        rowC.push(colorValue);
        var id = "c" + parseInt(played - 7);
        document.getElementById(id).style.backgroundColor = color;
        row = rowC;
    }
    else if (played >= 12 && played < 16) {
        rowD.push(colorValue);
        var id = "d" + parseInt(played - 11);
        document.getElementById(id).style.backgroundColor = color;
        row = rowD;
    }
    else if (played >= 16 && played < 20) {
        rowE.push(colorValue);
        var id = "e" + parseInt(played - 15);
        document.getElementById(id).style.backgroundColor = color;
        row = rowE;
    }
    else if (played >= 20 && played < 24) {
        rowF.push(colorValue);
        var id = "f" + parseInt(played - 19);
        document.getElementById(id).style.backgroundColor = color;
        row = rowF;
    } 

    played += 1;
    check();
}


var correct = 0;
var correctAndIncorrect = 0;

function check() {
    correct = 0;
    correctAndIncorrect = 0;

    if (played == 4 || played == 8 || played == 12 || played == 16 || played == 20 || played == 24) {
        for (var i = 0; i < 4; i++) {
            if(row[i] == result[i]){
                correct += 1;
                if (correct == 4) {
                    win();
                }
            }

            if (result[i] == row[0]) {
                correctAndIncorrect += 1;
            }
            else if (result[i] == row[1]) {
                correctAndIncorrect += 1;
            }
            else if (result[i] == row[2]) {
                correctAndIncorrect += 1;
            }
            else if (result[i] == row[3]) {
                correctAndIncorrect += 1;
            }
        } 
    }


    if (played == 4) {
        for (var n = 0; n < correctAndIncorrect; n++) {
            var id = "a" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "#666";
        }

        for (var n = 0; n < correct; n++) {
            var id = "a" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "black";
        }
    }

    if (played == 8) {
        for (var n = 0; n < correctAndIncorrect; n++) {
            var id = "b" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "#666";
        }

        for (var n = 0; n < correct; n++) {
            var id = "b" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "black";
        }
    }

    if (played == 12) {
        for (var n = 0; n < correctAndIncorrect; n++) {
            var id = "c" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "#666";
        }

        for (var n = 0; n < correct; n++) {
            var id = "c" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "black";
        }
    }

    if (played == 16) {
        for (var n = 0; n < correctAndIncorrect; n++) {
            var id = "d" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "#666";
        }

        for (var n = 0; n < correct; n++) {
            var id = "d" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "black";
        }
    }

    if (played == 20) {
        for (var n = 0; n < correctAndIncorrect; n++) {
            var id = "e" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "#666";
        }

        for (var n = 0; n < correct; n++) {
            var id = "e" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "black";
        }
    }

    if (played == 24) {
        for (var n = 0; n < correctAndIncorrect; n++) {
            var id = "f" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "#666";
        }

        for (var n = 0; n < correct; n++) {
            var id = "f" + parseInt(n + 1) + parseInt(n + 1);
            document.getElementById(id).style.backgroundColor = "black";
        }
    }



    if (played == 24) {
        lose();
    }
}



function win() {
    alert("You Won!")
}

function lose() {
    alert("Out Of Moves")
}


