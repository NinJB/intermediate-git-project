/********************************************************************************************************/

import { getRandomNumber } from './utils.js';
import { updateMessage } from './ui.js';

/********************************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');

    button.addEventListener('click', () => {
        const randomNumber = getRandomNumber(); // Get a secure number
        updateMessage(`Secure Random Number: ${randomNumber}`);
    });
});

/********************************************************************************************************/