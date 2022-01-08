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
    test = Math.floor(Math.random() * 6);
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
                    final();
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
    }




    if (played == 24) {
        final();
    }
}





function final() {
    // Displaying The Answer
    
    if (result[0] == 1) {
        document.getElementById("an1").style.backgroundColor = "red";
    }
    else if (result[0] == 2) {
        document.getElementById("an1").style.backgroundColor = "green";
    }
    else if (result[0] == 3) {
        document.getElementById("an1").style.backgroundColor = "blue";
    }
    else if (result[0] == 4) {
        document.getElementById("an1").style.backgroundColor = "yellow";
    }
    else if (result[0] == 5) {
        document.getElementById("an1").style.backgroundColor = "orange";
    }
    else if (result[0] == 6) {
        document.getElementById("an1").style.backgroundColor = "purple";
    }

    if (result[1] == 1) {
        document.getElementById("an2").style.backgroundColor = "red";
    }
    else if (result[1] == 2) {
        document.getElementById("an2").style.backgroundColor = "green";
    }
    else if (result[1] == 3) {
        document.getElementById("an2").style.backgroundColor = "blue";
    }
    else if (result[1] == 4) {
        document.getElementById("an2").style.backgroundColor = "yellow";
    }
    else if (result[1] == 5) {
        document.getElementById("an2").style.backgroundColor = "orange";
    }
    else if (result[1] == 6) {
        document.getElementById("an2").style.backgroundColor = "purple";
    }

    if (result[2] == 1) {
        document.getElementById("an3").style.backgroundColor = "red";
    }
    else if (result[2] == 2) {
        document.getElementById("an3").style.backgroundColor = "green";
    }
    else if (result[2] == 3) {
        document.getElementById("an3").style.backgroundColor = "blue";
    }
    else if (result[2] == 4) {
        document.getElementById("an3").style.backgroundColor = "yellow";
    }
    else if (result[2] == 5) {
        document.getElementById("an3").style.backgroundColor = "orange";
    }
    else if (result[2] == 6) {
        document.getElementById("an3").style.backgroundColor = "purple";
    }

    if (result[3] == 1) {
        document.getElementById("an4").style.backgroundColor = "red";
    }
    else if (result[3] == 2) {
        document.getElementById("an4").style.backgroundColor = "green";
    }
    else if (result[3] == 3) {
        document.getElementById("an4").style.backgroundColor = "blue";
    }
    else if (result[3] == 4) {
        document.getElementById("an4").style.backgroundColor = "yellow";
    }
    else if (result[3] == 5) {
        document.getElementById("an4").style.backgroundColor = "orange";
    }
    else if (result[3] == 6) {
        document.getElementById("an4").style.backgroundColor = "purple";
    }
 }


function returnMove() {
    if (played < 4) {
        played = 0;
        document.getElementById("a1").style.backgroundColor = "gainsboro";
        document.getElementById("a2").style.backgroundColor = "gainsboro";
        document.getElementById("a3").style.backgroundColor = "gainsboro";
        document.getElementById("a4").style.backgroundColor = "gainsboro";
        rowA = [];
    }

    if (played < 8 && played > 4) {
        played = 4;
        document.getElementById("b1").style.backgroundColor = "gainsboro";
        document.getElementById("b2").style.backgroundColor = "gainsboro";
        document.getElementById("b3").style.backgroundColor = "gainsboro";
        document.getElementById("b4").style.backgroundColor = "gainsboro";
        rowB = [];
    }

    if (played < 12 && played > 8) {
        played = 8;
        document.getElementById("c1").style.backgroundColor = "gainsboro";
        document.getElementById("c2").style.backgroundColor = "gainsboro";
        document.getElementById("c3").style.backgroundColor = "gainsboro";
        document.getElementById("c4").style.backgroundColor = "gainsboro";
        rowC = [];
    }

    if (played < 16 && played > 12) {
        played = 12;
        document.getElementById("d1").style.backgroundColor = "gainsboro";
        document.getElementById("d2").style.backgroundColor = "gainsboro";
        document.getElementById("d3").style.backgroundColor = "gainsboro";
        document.getElementById("d4").style.backgroundColor = "gainsboro";
        rowD = [];
    }

    if (played < 20 && played > 16) {
        played = 16;
        document.getElementById("e1").style.backgroundColor = "gainsboro";
        document.getElementById("e2").style.backgroundColor = "gainsboro";
        document.getElementById("e3").style.backgroundColor = "gainsboro";
        document.getElementById("e4").style.backgroundColor = "gainsboro";
        rowE = [];
    }

    if (played < 24 && played > 20) {
        played = 20;
        document.getElementById("f1").style.backgroundColor = "gainsboro";
        document.getElementById("f2").style.backgroundColor = "gainsboro";
        document.getElementById("f3").style.backgroundColor = "gainsboro";
        document.getElementById("f4").style.backgroundColor = "gainsboro";
        rowF = [];
    }

}

function playAgain() {
   
        played = 0;

        document.getElementById("a1").style.backgroundColor = "gainsboro";
        document.getElementById("a2").style.backgroundColor = "gainsboro";
        document.getElementById("a3").style.backgroundColor = "gainsboro";
        document.getElementById("a4").style.backgroundColor = "gainsboro";
        rowA = [];
        document.getElementById("b1").style.backgroundColor = "gainsboro";
        document.getElementById("b2").style.backgroundColor = "gainsboro";
        document.getElementById("b3").style.backgroundColor = "gainsboro";
        document.getElementById("b4").style.backgroundColor = "gainsboro";
        rowB = [];
        document.getElementById("c1").style.backgroundColor = "gainsboro";
        document.getElementById("c2").style.backgroundColor = "gainsboro";
        document.getElementById("c3").style.backgroundColor = "gainsboro";
        document.getElementById("c4").style.backgroundColor = "gainsboro";
        rowC = [];
        document.getElementById("d1").style.backgroundColor = "gainsboro";
        document.getElementById("d2").style.backgroundColor = "gainsboro";
        document.getElementById("d3").style.backgroundColor = "gainsboro";
        document.getElementById("d4").style.backgroundColor = "gainsboro";
        rowD = [];
        document.getElementById("e1").style.backgroundColor = "gainsboro";
        document.getElementById("e2").style.backgroundColor = "gainsboro";
        document.getElementById("e3").style.backgroundColor = "gainsboro";
        document.getElementById("e4").style.backgroundColor = "gainsboro";
        rowE = [];
        document.getElementById("f1").style.backgroundColor = "gainsboro";
        document.getElementById("f2").style.backgroundColor = "gainsboro";
        document.getElementById("f3").style.backgroundColor = "gainsboro";
        document.getElementById("f4").style.backgroundColor = "gainsboro";
        rowF = [];

        document.getElementById("a11").style.backgroundColor = "gainsboro";
        document.getElementById("a22").style.backgroundColor = "gainsboro";
        document.getElementById("a33").style.backgroundColor = "gainsboro";
        document.getElementById("a44").style.backgroundColor = "gainsboro";
        
        document.getElementById("b11").style.backgroundColor = "gainsboro";
        document.getElementById("b22").style.backgroundColor = "gainsboro";
        document.getElementById("b33").style.backgroundColor = "gainsboro";
        document.getElementById("b44").style.backgroundColor = "gainsboro";
        
        document.getElementById("c11").style.backgroundColor = "gainsboro";
        document.getElementById("c22").style.backgroundColor = "gainsboro";
        document.getElementById("c33").style.backgroundColor = "gainsboro";
        document.getElementById("c44").style.backgroundColor = "gainsboro";
       
        document.getElementById("d11").style.backgroundColor = "gainsboro";
        document.getElementById("d22").style.backgroundColor = "gainsboro";
        document.getElementById("d33").style.backgroundColor = "gainsboro";
        document.getElementById("d44").style.backgroundColor = "gainsboro";
      
        document.getElementById("e11").style.backgroundColor = "gainsboro";
        document.getElementById("e22").style.backgroundColor = "gainsboro";
        document.getElementById("e33").style.backgroundColor = "gainsboro";
        document.getElementById("e44").style.backgroundColor = "gainsboro";
       
        document.getElementById("f11").style.backgroundColor = "gainsboro";
        document.getElementById("f22").style.backgroundColor = "gainsboro";
        document.getElementById("f33").style.backgroundColor = "gainsboro";
        document.getElementById("f44").style.backgroundColor = "gainsboro";

        document.getElementById("an1").style.backgroundColor = "gainsboro";
        document.getElementById("an2").style.backgroundColor = "gainsboro";
        document.getElementById("an3").style.backgroundColor = "gainsboro";
        document.getElementById("an4").style.backgroundColor = "gainsboro";
       
        
        result = []

        for (var i = 0; i < 4; i++) {
            test = Math.floor(Math.random() * 6);
            test += 1;
            result.push(test);
        } 
        
        
    }

