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
    if((v == 1) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-1");

        if (c[1] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[1] = 1;

                messaget.textContent = "O turn"

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[1] == c[4]) && (c[1] == c[7])) || ((c[1] == c[5]) && (c[1] == c[9])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[1] = 2;

                messaget.textContent = "X turn"

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[1] == c[4]) && (c[1] == c[7])) || ((c[1] == c[5]) && (c[1] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if((v == 2) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-2");

        if (c[2] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[2] = 1;

                messaget.textContent = "O turn"

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[2] = 2;

                messaget.textContent = "X turn"

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if((v == 3) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-3");

        if (c[3] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[3] = 1;

                messaget.textContent = "O turn"

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[3] == c[6]) && (c[3] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[3] = 2;

                messaget.textContent = "X turn"

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[3] == c[6]) && (c[3] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if((v == 4) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-4");

        if (c[4] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[4] = 1;

                messaget.textContent = "O turn"

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[4] = 2;

                messaget.textContent = "X turn"

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if((v == 5) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-5");

        if (c[5] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[5] = 1;

                messaget.textContent = "O turn"

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[5] = 2;

                messaget.textContent = "X turn"

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if((v == 6) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-6");

        if (c[6] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[6] = 1;

                messaget.textContent = "O turn"

                if (((c[4] == c[5]) && (c[4] == c[6])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[6] = 2;

                messaget.textContent = "X turn"

                if (((c[4] == c[5]) && (c[4] == c[6])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if((v == 7) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-7");

        if (c[7] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[7] = 1;

                messaget.textContent = "O turn"

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[7] == c[5]) && (c[7] == c[3])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[7] = 2;

                messaget.textContent = "X turn"

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[7] == c[5]) && (c[7] == c[3])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if((v == 8) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-8");

        if (c[8] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[8] = 1;

                messaget.textContent = "O turn"

                if (((c[7] == c[8]) && (c[7] == c[9])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[8] = 2;

                messaget.textContent = "X turn"

                if (((c[7] == c[8]) && (c[7] == c[9])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if ((v == 9) && (victorie == 0))
    {
        var messageEl = document.getElementById("message-el-9");

        if (c[9] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[9] = 1;

                messaget.textContent = "O turn"

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[9] = 2;

                messaget.textContent = "X turn"

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }

    if (victorie == 1)
    {
        messageEl = document.getElementById("message-e");

        messageEl.textContent = message;
    }
}