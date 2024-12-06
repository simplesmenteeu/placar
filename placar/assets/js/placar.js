function incrementScore(id) {
    const scoreElement = document.getElementById(id);
    let score = parseInt(scoreElement.innerText);
    scoreElement.innerText = score + 1;
}

function decrementScore(id) {
    const scoreElement = document.getElementById(id);
    let score = parseInt(scoreElement.innerText);
    if (score > 0) {
        scoreElement.innerText = score - 1;
    }
}
function resetScore(id) {
    const scoreElement = document.getElementById(id);
    let score = parseInt(scoreElement.innerText);
    scoreElement.innerText = score * 0;
}