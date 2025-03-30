import { updateMessage } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    button.addEventListener('click', updateMessage);
});
