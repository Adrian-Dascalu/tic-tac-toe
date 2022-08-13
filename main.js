let numar = 0;

let victorie = 0;

let message = "";

var c = [0,0,0,0,0,0,0,0,0,0];

var messaget = document.getElementById("message-t");

messaget.textContent = "X turn";

function restart() {
    victorie = 0;
    c = [0,0,0,0,0,0,0,0,0,0];
    messaget.textContent = "X turn";
    numar = 0;
    
    messageEl = document.getElementById("message-e");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-1");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-2");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-3");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-4");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-5");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-6");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-7");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-8");
    messageEl.textContent = "";

    messageEl = document.getElementById("message-el-9");
    messageEl.textContent = "";
}

function calcul(v) {
    if (victorie == 0) {
        if (v == 1) {
            var messageEl = document.getElementById("message-el-1");
        }
        else if (v == 2) {
            var messageEl = document.getElementById("message-el-2");
        }
        else if (v == 3) {
            var messageEl = document.getElementById("message-el-3");
        }
        else if (v == 4) {
            var messageEl = document.getElementById("message-el-4");
        }
        else if (v == 5) {
            var messageEl = document.getElementById("message-el-5");
        }
        else if (v == 6) {
            var messageEl = document.getElementById("message-el-6");
        }
        else if (v == 7) {
            var messageEl = document.getElementById("message-el-7");
        }
        else if (v == 8) {
            var messageEl = document.getElementById("message-el-8");
        }
        else if (v == 9) {
            var messageEl = document.getElementById("message-el-9");
        }

        if (c[v] == 0)
        {
            if (numar == 0) {
                messageEl.textContent = "X";

                numar = 1;

                c[v] = 1;

                messaget.textContent = "O turn";
            }
            else {
                messageEl.textContent = "O";

                numar = 0;

                c[v] = 2;

                messaget.textContent = "X turn"
            }

            if (((c[1] == c[2]) && (c[1] == c[3]) && (c[1] != 0)) || ((c[4] == c[5]) && (c[4] == c[6]) && (c[4] != 0)) || ((c[7] == c[8]) && (c[7] == c[9]) && (c[7] != 0)) || ((c[1] == c[4]) && (c[1] == c[7]) && (c[1] != 0)) || ((c[2] == c[5]) && (c[2] == c[8]) && (c[2] != 0)) || ((c[3] == c[6]) && (c[3] == c[9]) && (c[3] != 0)) || ((c[1] == c[5]) && (c[1] == c[9]) && (c[1] != 0)) || ((c[3] == c[5]) && (c[3] == c[7]) && (c[3] != 0))) {
                victorie = 1;
                
                if (numar == 0) {
                    message = "O e castigatorul suprem!";
                }
                else {
                    message = "X e castigatorul suprem!";
                }
            }
        }
    }

    if (victorie == 1) {
        messageEl = document.getElementById("message-e");

        messageEl.textContent = message;
    }
    else {
        for(i = 1; i <= 10; i++) {
            if (c[i] == 0) {
                break;
            }
            else if (i == 10) {
                messageEl = document.getElementById("message-e");

                messageEl.textContent = "Egalitatee!!";
            }

        }
    }
}