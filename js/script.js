console.log("script.js connected!");

const questionBlocks = document.querySelectorAll('.question-block');
const resultButton = document.getElementById('show-result');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

let answers = [];

questionBlocks.forEach((block, index) => {
    const buttons = block.querySelectorAll('.answer-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');

            answers[index] = parseInt(button.dataset.answer);
        });
    });
});

function displayResult() {
    let total = answers.reduce((sum, value) => sum + value, 0);

    if (total <= 7) {
        resultText.textContent = "You are Stephen Curry! 🏀 Strategic, calm under pressure, and always finds the best shot.";
    } else if (total <= 10) {
        resultText.textContent = "You are Giannis Antetokounmpo! 🏀 Versatile, balanced, and adapts to every challenge on the court.";
    } else {
        resultText.textContent = "You are LeBron James! 🏀 Bold, decisive, a natural leader who takes charge in every game.";
    }

    resultContainer.style.display = 'block';
}

resultButton.addEventListener('click', displayResult);