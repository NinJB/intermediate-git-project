/******************************************************************************************************/

/* security-fix.js - ensures that the random number generation is secure and unbiased. */

/******************************************************************************************************/

/**
 * Generates a cryptographically secure random number between min and max.
 * Uses Web Crypto API for better security.
 * @param {number} min - The minimum value (inclusive)
 * @param {number} max - The maximum value (exclusive)
 * @returns {number} - A secure random number in the given range
 */

/******************************************************************************************************/

function getSecureRandomNumber(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        throw new Error("Invalid input: min and max must be numbers");
    }
    if (min >= max) {
        throw new Error("Invalid range: min must be less than max");
    }

    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer); // Secure random value
    const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1); // Normalize

    return Math.floor(randomNumber * (max - min) + min);
}

/******************************************************************************************************/

/* Example usage connected with user input */
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    button.addEventListener('click', () => {
        const min = parseInt(document.getElementById('minValue').value, 10);
        const max = parseInt(document.getElementById('maxValue').value, 10);

        if (isNaN(min) || isNaN(max) || min >= max) {
            console.error("Invalid input: Please enter a valid range.");
            return;
        }

        console.log(`Generated Secure Number: ${getSecureRandomNumber(min, max)}`);
    });
});

export { getSecureRandomNumber };

/******************************************************************************************************/