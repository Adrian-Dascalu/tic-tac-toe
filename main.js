let turn = 0;

let win = 0;

let text_result = "";

var c = [0,0,0,0,0,0,0,0,0,0];

var text_turn = document.getElementById("text-turn");

text_turn.textContent = "X turn";

function restart() {
    win = 0;
    c = [0,0,0,0,0,0,0,0,0,0];
    text_turn.textContent = "X turn";
    turn = 0;
    
    text_match_result = document.getElementById("result");
    text_match_result.textContent = "";

    text_box = document.getElementById("box-1");
    text_box.textContent = "";

    text_box = document.getElementById("box-2");
    text_box.textContent = "";

    text_box = document.getElementById("box-3");
    text_box.textContent = "";

    text_box = document.getElementById("box-4");
    text_box.textContent = "";

    text_box = document.getElementById("box-5");
    text_box.textContent = "";

    text_box = document.getElementById("box-6");
    text_box.textContent = "";

    text_box = document.getElementById("box-7");
    text_box.textContent = "";

    text_box = document.getElementById("box-8");
    text_box.textContent = "";

    text_box = document.getElementById("box-9");
    text_box.textContent = "";
}

function calcul(v) {
    if (win == 0) {
        if (v == 1) {
            var text_box = document.getElementById("box-1");
        }
        else if (v == 2) {
            var text_box = document.getElementById("box-2");
        }
        else if (v == 3) {
            var text_box = document.getElementById("box-3");
        }
        else if (v == 4) {
            var text_box = document.getElementById("box-4");
        }
        else if (v == 5) {
            var text_box = document.getElementById("box-5");
        }
        else if (v == 6) {
            var text_box = document.getElementById("box-6");
        }
        else if (v == 7) {
            var text_box = document.getElementById("box-7");
        }
        else if (v == 8) {
            var text_box = document.getElementById("box-8");
        }
        else if (v == 9) {
            var text_box = document.getElementById("box-9");
        }

        if (c[v] == 0)
        {
            if (turn == 0) {
                text_box.textContent = "X";

                turn = 1;

                c[v] = 1;

                text_turn.textContent = "O turn";
            }
            else {
                text_box.textContent = "O";

                turn = 0;

                c[v] = 2;

                text_turn.textContent = "X turn"
            }

            if (((c[1] == c[2]) && (c[1] == c[3]) && (c[1] != 0)) || ((c[4] == c[5]) && (c[4] == c[6]) && (c[4] != 0)) || ((c[7] == c[8]) && (c[7] == c[9]) && (c[7] != 0)) || ((c[1] == c[4]) && (c[1] == c[7]) && (c[1] != 0)) || ((c[2] == c[5]) && (c[2] == c[8]) && (c[2] != 0)) || ((c[3] == c[6]) && (c[3] == c[9]) && (c[3] != 0)) || ((c[1] == c[5]) && (c[1] == c[9]) && (c[1] != 0)) || ((c[3] == c[5]) && (c[3] == c[7]) && (c[3] != 0))) {
                win = 1;
                
                if (turn == 0) {
                    text_result = "O is the great chicken winner!";
                    text_turn.textContent = "End";
                }
                else {
                    text_result = "X is the great chicken winner!";
                    text_turn.textContent = "End";
                }
            }
        }
    }

    if (win == 1) {
        text_match_result = document.getElementById("result");

        text_match_result.textContent = text_result;
    }
    else {
        for(i = 1; i <= 10; i++) {
            if (c[i] == 0) {
                break;
            }
            else if (i == 10) {
                text_box = document.getElementById("result");

                text_match_result.textContent = "Liberte, Egalite, Incendie!!!";
                text_turn.textContent = "End";
            }
        }
    }
}