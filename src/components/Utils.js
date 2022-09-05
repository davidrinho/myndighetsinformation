


/**
 * Capitalizes the first letter of the given string input
 * @param {*} string - String to be modified
 */
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Parses the JSON object coming from FHM fetch
 * @param {json} json - JSON object to be parsed
 * @returns {Array} results - Returns array of objects to be displayed
 */
const parseFHM = (json) => {
    let results = [];
    for (let i=0; i<json.features.length; i++) {
        results.push(json.features[i].properties)
    };
    return results;
}

/**
 * Parses the JSON object coming from SKR fetch
 * @param {json} json - JSON object to be parsed
 * @returns {Array } results - Returns array of objects to be displayed
 */
const parseSKR = (json) => {
    // const resultCount = json.resultCount;
    // let next = json.next;
    return json.results;
}

/**
 * Dispatch function - parses according to source
 * @param {string} myndighet - Source string
 * @param {json} json - JSON object to be parsed
 * @returns {Array} Returns results of parsing functions
 */
export const jsonParser = (myndighet, json) => {
    switch (myndighet) {
        case "sveriges kommuner och regioner":
            return parseSKR(json);
        case "folkhälsomyndigheten":
            return parseFHM(json);
        default:
            break;
    }
}

/**
 * Sanitizes string with capitalized first letter and removal of any underscores used
 * @param {string} string - String to be sanitized
 */
export const sanitizeString = (string) => {
    return capitalizeFirstLetter(string.replace(/_/g, ' '));
}