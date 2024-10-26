let startButton = document.getElementById("start");
let endButton = document.getElementById("end");
let active_game = false;
let endGame = false;
let startTime = 0;
let elapsedTime = 0;
let successCount = parseInt(localStorage.getItem("successCount")) || 0;
let failCount = parseInt(localStorage.getItem("failCount")) || 0;

window.onload = () => {
    displayBestTime(); 
    displayGameStats(); 
};

function play() {
    if (active_game && !endGame) {
        triggerAlert();
        startTime = new Date().getTime();  
    }
}

function triggerAlert() {
    document.addEventListener("mouseover", (ev) => {
        const tar = ev.target;
        if ((tar.className == "boundary" || tar.tagName == "BODY") && active_game) {
            document.querySelectorAll(".boundary").forEach((el) => (el.style.backgroundColor = "red"));
            endGame = true;
            active_game = false;
            fail(); 
        }
    });
}

startButton.onclick = () => {
    resetBoundaries();
    active_game = true;
    endGame = false;
    play();
    console.log("start game");

   
    endButton.onmouseover = () => {
        if (!endGame) {
            endGame = true;
            active_game = false;
            elapsedTime = (new Date().getTime() - startTime) / 1000; 
            win();  
            saveBestTime(elapsedTime); 
        }
    };
};

function win() {
    successCount++;
    localStorage.setItem("successCount", successCount); 

    const win_div = document.getElementById('wingame');
    const elapsedTimeDisplay = document.getElementById('elapsedTime');
    const bestTimeDisplay = document.getElementById('bestTime');

    const bestTime = getBestTime();

    
    elapsedTimeDisplay.textContent = `You spent ${elapsedTime.toFixed(2)} seconds`;
    bestTimeDisplay.textContent = bestTime !== null ? bestTime < elapsedTime ? `Best time: ${bestTime.toFixed(2)} seconds` : `Best time: ${elapsedTime.toFixed(2)} seconds` : "No best time recorded yet.";

    win_div.style.display = "flex";
    displayGameStats();  
}


function fail() {
    failCount++;
    localStorage.setItem("failCount", failCount); 

    const lose_box = document.getElementById('losegame');
    lose_box.style.display = "flex";
    displayGameStats(); 
}


function resetBoundaries() {
    document.querySelectorAll(".boundary").forEach((el) => (el.style.backgroundColor = "#eeeeee"));
}


function saveBestTime(time) {
    const bestTime = localStorage.getItem("bestTime");

    if (bestTime === null || time < bestTime) {
        localStorage.setItem("bestTime", time);
        displayBestTime(); 
    }
}


function getBestTime() {
    const bestTime = localStorage.getItem("bestTime");
    return bestTime ? parseFloat(bestTime) : null;
}


function displayBestTime() {
    const bestTime = getBestTime();
    const bestTimeHomeDisplay = document.getElementById('bestTimeHome');
    
    if (bestTime) {
        bestTimeHomeDisplay.textContent = `Best time so far: ${bestTime.toFixed(2)} seconds`;
    } else {
        bestTimeHomeDisplay.textContent = " No best time recorded yet.";
    }
}

function displayGameStats() {
    const successCountDisplay = document.getElementById('successCountHome');
    const failCountDisplay = document.getElementById('failCountHome');    
    successCountDisplay.textContent = `Successful games: ${successCount}`;
    failCountDisplay.textContent = `Failed games: ${failCount}`;
}
