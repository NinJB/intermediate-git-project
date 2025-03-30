import { getRandomNumber } from './utils.js';

console.log('UI module loaded');

function updateMessage() {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = `Random Number: ${getRandomNumber()}`;
    } else {
        console.error('Element with id "message" not found!');
    }
}

export { updateMessage };
