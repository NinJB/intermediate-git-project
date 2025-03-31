/******************************************************************************************************/

import { getSecureRandomNumber } from '../hotfix/security-fix.js';
import { getSecureRandomFloat, generateSecureUUID } from '../external-library/library.js';

/******************************************************************************************************/

/**
 * Returns a secure random integer between min and max.
 * Uses the main secure function from security-fix.js.
 */

function getRandomNumber(min, max) {
    return getSecureRandomNumber(min, max); // Use the secure generator
}

/******************************************************************************************************/

/**
 * Returns a secure random float between 0 and 1.
 * Uses the external library.
 */

function getRandomFloat() {
    return getSecureRandomFloat(); // Use library.js function
}

/******************************************************************************************************/

/**
 * Generates a secure UUID (v4).
 * Uses the external library.
 */

function getUUID() {
    return generateSecureUUID(); // Use library.js function
}

/******************************************************************************************************/

export { getRandomNumber, getRandomFloat, getUUID };

/******************************************************************************************************/
