const cards = [6, 7, 8, 9, 10, 2, 3, 4, 11];
const userNameInput = prompt("Введіть своє ім'я:");
const userName = userNameInput && userNameInput.trim() !== '' ? userNameInput : 'Йеннифер із Венгербергу';
let computerScore = 0;
let userScore = 0;
let rounds = 0;
let counter = 3;
document.getElementById('playerName').textContent = userName;
function resetGame() {
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    counter = 3;
    document.getElementById('computer-score').textContent = "Очки: 0";
    document.getElementById('user-score').textContent = "Очки: 0";
    document.getElementById('result').textContent = "";
    document.getElementById('counterPlace').textContent = "Cпроб залишилось: " + counter;
    document.getElementById('draw-card').disabled = false;
    clearCards();
}
function clearCards() {
    document.getElementById('player-cards').innerHTML = '';
    document.getElementById('computer-cards').innerHTML = '';
}
function displayCard(cardValue, divId) {
    const cardDisplay = document.getElementById(divId);
    const img = document.createElement('img');
    img.src = "img/" + cardValue + ".png";
    img.alt = "Card " + cardValue;
    img.className = 'card-image';
    cardDisplay.appendChild(img);
}
function drawCard() {
    counter--;
    document.getElementById('counterPlace').textContent = "Cпроб залишилось: " + counter;
    if (rounds < 3) {
        const computerCard = cards[Math.floor(Math.random() * cards.length)];
        const userCard = cards[Math.floor(Math.random() * cards.length)];
        displayCard(userCard, 'player-cards');
        displayCard(computerCard, 'computer-cards');

        computerScore += computerCard;
        userScore += userCard;

        document.getElementById('computer-score').textContent = "Очки: " + computerScore;
        document.getElementById('user-score').textContent = "Очки: " + userScore;

        rounds++;
    }
    if (rounds === 3) {
        const resultMessage = computerScore > userScore
            ? "Геральт із Рівії виграв!"
            : computerScore < userScore
                ? userName + " виграв(ла)!"
                : "Нічия!";

        document.getElementById('counterPlace').textContent = resultMessage;
        document.getElementById('draw-card').disabled = true;
        setTimeout(() => {
            clearCards();
            resetGame();
        }, 3000);
    }
}

