/******************************************************************************************************/

import { updateMessage } from './ui.js';
import { getRandomNumber } from './utils.js';

/******************************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');

    button.addEventListener('click', () => {
        const min = parseInt(document.getElementById('minValue').value, 10);
        const max = parseInt(document.getElementById('maxValue').value, 10);

        if (isNaN(min) || isNaN(max) || min >= max) {
            updateMessage("Invalid input: Please enter a valid range.");
            return;
        }

        const randomNumber = getRandomNumber(min, max);
        updateMessage(`Secure Random Number: ${randomNumber}`);
    });
});

/******************************************************************************************************/
