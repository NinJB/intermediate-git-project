/********************************************************************************************************/

/* security-fix.js - makes sure that the number cannot be biased or its authenticity is reliable. */

/********************************************************************************************************/

/**
 * Generates a cryptographically secure random number between min and max.
 * Uses Web Crypto API for better security.
 * @param {number} min - The minimum value (inclusive)
 * @param {number} max - The maximum value (exclusive)
 * @returns {number} - A secure random number in the given range
 */

/********************************************************************************************************/

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

/********************************************************************************************************/

/* Example usage */
console.log(getSecureRandomNumber(1, 100)); // Secure number between 1 and 100

export { getSecureRandomNumber };

/********************************************************************************************************/
