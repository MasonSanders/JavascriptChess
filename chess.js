const canvas = document.getElementById("chessboard");
const ctx = canvas.getContext("2d");

// class for the chess board
class Square {
    constructor(rank, file, color, pos) {
        this._name = rank + file;
        this._rank = rank;
        this._file = file;
        this._color = color;
        this._width = 70;
        this._height = 70;
        this._x = pos[0];
        this._y = pos[1];
    }

    get name() {
        return this._name;
    }

    get rank() {
        return this._rank;
    }

    get file() {
        return this._file;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getSize() {
        var size = [this._width, this._height];
        return size;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    getPosition() {
        var pos = [this._x, this._y];
        return pos;
    }

    setPosition(xpos, ypos) {
        this._x = xpos;
        this._y = ypos;
    }

    get color() {
        return this._color;
    }
}


class ChessBoard {
    constructor() {
        this._ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
        this._files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        // squares is a 2d array that represents each square on the board.
        this._squares = [];
        // build the ranks and files one by one
        var pos = [0, 490];
        for (let i = 0; i < 8; i++) {
            var rank = [];
            // reset the x position of a square to 0 at the start of each rank
            pos[0] = 0;
            // determine the color of the square light or dark, false is light true is dark.
            var color = false;
            if (i % 2 == 0) color = true;
            for(let j = 0; j < 8; j++) {
                var sq = new Square(this._ranks[i], this._files[j], color, pos);
                rank.push(sq);
                pos[0] = pos[0] + 70;
                color = !color;
            }
            this._squares.push(rank);
            pos[1] = pos[1] - 70;
        }
    }

    get squares() {
        return this._squares;
    }

    get ranks() {
        return this._ranks;
    }

    get files() {
        return this._files;
    }

    set ranks(ranks) {
        this._ranks = ranks;
    }

    set files (files) {
        this._files = files;
    }


}

function drawChessBoard(board) {
    // draw the the chess board on the canvas
    var sq = board.squares;
    for (let i = 0; i < sq.length; i++) {
        for(let j = 0; j < sq[i].length; j++) {
            if (sq[i][j].color == false) {
                ctx.fillStyle = "white";
            }
            else {
                ctx.fillStyle = "blue";
            }
            console.log("draw square" + i + ", " + j);
            ctx.fillRect(sq[i][j].x, sq[i][j].y, sq[i][j].width, sq[i][j].height);

        }
    }
}


function main() {
    var cb = new ChessBoard();

    drawChessBoard(cb);
}


window.addEventListener("load", main);