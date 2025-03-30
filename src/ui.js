import { getRandomNumber } from './utils.js';

function updateMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = `Random Number: ${getRandomNumber()}`;
}

export { updateMessage };
