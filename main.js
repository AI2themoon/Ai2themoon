document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberDivs = document.querySelectorAll('.number');

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numberDivs.forEach((div, index) => {
            div.textContent = numbers[index];
            div.style.backgroundColor = getNumberColor(numbers[index]);
        });
    }

    function getNumberColor(number) {
        if (number <= 10) {
            return '#f44336'; // Red
        } else if (number <= 20) {
            return '#ff9800'; // Orange
        } else if (number <= 30) {
            return '#ffeb3b'; // Yellow
        } else if (number <= 40) {
            return '#4caf50'; // Green
        } else {
            return '#2196f3'; // Blue
        }
    }
});
