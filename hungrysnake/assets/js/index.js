// ------> Greeting to User

let username = window.prompt("Your Good Name?");
if (username != '')
    document.getElementById("greeting").textContent = "Welcome - " + username;
else
    document.getElementById("greeting").textContent = "Welcome - Guest";

document.body.title = "Thanks to Mission Helix (Coding Club India) And i have updated it with more Functionalities.";


// ------> Difficulty Level

let difficultyLevel = window.prompt("Diffculty Level -> Easy/Medium/Hard ?");
difficultyLevel = difficultyLevel.toLowerCase();
let timer = 300;

const difficultyField = document.querySelector('#difficulty');
if (difficultyLevel == 'e' || difficultyLevel == 'easy') {
    timer = 300;
    difficultyField.textContent = 'Easy';
}
else if (difficultyLevel == 'm' || difficultyLevel == 'medium') {
    timer = 200;
    difficultyField.textContent = 'Medium';
}
else if (difficultyLevel == 'h' || difficultyLevel == 'hard') {
    timer = 100;
    difficultyField.textContent = 'Hard';
}


// ------> SNAKE GAME

const arena = document.querySelector('#arena');
const ctx = arena.getContext('2d');

// Snake Initial Body
let body = [];

let width = 500;
let height = 500;


/**---------> Arena Designing <---------**/

ctx.fillStyle = '#A7D948';
ctx.fillRect(0, 0, width, height);

let score = 0;

// Cell Size 
let N = 20;
let cellSize = height / N;      // 20

for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
        // Paint Small Cells

        /** Odd-Even Concept for Cells */
        if ((i + j) % 2 == 0)
            ctx.fillStyle = '#8ECC39';
        else
            ctx.fillStyle = '#A7D948';

        /** For Alternate Color Printing */
        // x, y, width, height (Acc. to our Game width and height of cell size is 20 )
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
}


/**---------> Key Detection <---------**/

let state = 0;      // 0 -> Right, 1 -> Down, 2 -> Left, 3 -> Up
var customBtn;

const handleKey = (e) => {
    // With the help of this, we can detect which key has been pressed through the event occured on window
    e = e || window.event;
    let play = false;

    // Button When user works on Moible or iPad Systems
    document.querySelector('#upBtn').onclick = function() { customBtn = 3; };
    document.querySelector('#leftBtn').onclick = function() { customBtn = 2; };
    document.querySelector('#rightBtn').onclick = function() { customBtn = 0; };
    document.querySelector('#downBtn').onclick = function() { customBtn = 1; };

    /** state condition are mentioned bczz if already snake is moving in a particular direction
     *  then the keypress on same direction and "just" opposite direction should be ignore.
      */
    if ((e.keyCode == '38' || e.keyCode == '87' || customBtn == 3) && state != 1 && state != 3) {
        // Up Direction
        state = 3;
        play = true;
    }
    else if ((e.keyCode == '40' || e.keyCode == '83' || customBtn == 1) && state != 1 && state != 3) {
        // Down Direction
        state = 1;
        play = true;
    }
    else if ((e.keyCode == '37' || e.keyCode == '65' || customBtn == 2) && state != 2 && state != 0) {
        // Left Direction
        state = 2
        play = true;
    }
    else if ((e.keyCode == '39' || e.keyCode == '68' || customBtn == 0) && state != 2 && state != 0) {
        // Right Direction
        state = 0;
        play = true;
    }
    else if (e.keyCode == '8') {
        location.reload();
    }

    if (play)
        playAudio();

    // For Debugging on Console
    console.log(e.keyCode);
}

document.onkeydown = handleKey;

/**---------> Audio on clicking of Key and food consume <---------**/

const playAudio = () => {
    const audio = new Audio("./assets/audio/switch-1.wav");
    audio.play();
}

const playConsume = () => {
    const audio = new Audio("./assets/audio/button-3.wav");
    audio.play();
}

// Initial 3 Cells of Snake Body
body.push([1 + N / 2, N / 2]);
body.push([N / 2, N / 2]);
body.push([-1 + N / 2, N / 2]);

var eyeImage = new Image();
eyeImage.src = "https://i.imgur.com/6jLbz7l.png";

var foodImage = new Image();
foodImage.src = "https://i.imgur.com/88saChB.png";


/**---------> Randomly Generating Food <---------**/
var counter = 0;
var foodX = 0;
var foodY = 0;

function generateFood() {

    var success = false;
    while (!success) {
        foodX = parseInt(Math.random() * N);
        foodY = parseInt(Math.random() * N);

        success = true;
        for (let i = 0; i < body.length; i++) {
            if (body[i][0] == foodX && body[i][1] == foodY) {
                success = false;
            }
        }
    }
}

generateFood();

/**---------> Updating <---------**/
const scoreField = document.querySelector('#score');

function update() {

    counter++;

    var increase = false;
    if (body[0][0] == foodX && body[0][1] == foodY) {
        score++;
        scoreField.textContent = score;
        generateFood();
        playConsume();
        increase = true;
    }

    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if ((i + j) % 2 == 0)
                ctx.fillStyle = '#8ECC39';
            else
                ctx.fillStyle = '#A7D948';

            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }

    ctx.drawImage(foodImage,
        foodX * cellSize, foodY * cellSize,
        cellSize, cellSize);

    for (let i = 0; i < body.length; i++) {
        ctx.fillStyle = ("#527DF9");
        ctx.fillRect(cellSize * body[i][0], cellSize * body[i][1], cellSize, cellSize);

        if (i == 0) {
            var marginX = cellSize / 3;
            var marginY = cellSize / 3;

            if (state == 0 || state == 2) {
                marginX = 0;
            } else if (state == 1 || state == 3) {
                marginY = 0;
            }

            // For Both Eyes and Giving some margin so both eyes should show on single cell
            ctx.drawImage(eyeImage,
                0, 28 * (counter % 9),
                cellSize, cellSize,
                cellSize * body[i][0] + marginX,
                cellSize * body[i][1] + marginY,
                cellSize, cellSize);
            ctx.drawImage(eyeImage,
                0, 28 * (counter % 9),
                cellSize, cellSize,
                cellSize * body[i][0] - marginX,
                cellSize * body[i][1] - marginY,
                cellSize, cellSize);
        }
    }

    // 0->right, 1->down, 2- left, 3 is up;
    var x = 0;
    var y = 0;
    if (state == 0) {
        x++;
    }
    else if (state == 1) {
        y++;
    }
    else if (state == 2) {
        x--;
    }
    else if (state == 3) {
        y--;
    }

    var first = body[0];
    var arr = [first[0] + x, first[1] + y];
    body.splice(0, 0, arr);

    if (!increase)
        body.pop();
}

setInterval(update, timer);
