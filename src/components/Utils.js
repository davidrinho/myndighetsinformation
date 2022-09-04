



export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const parseFHM = (json) => {
    let results = [];
    for (let i=0; i<json.features.length; i++) {
        results.push(json.features[i].properties)
    };
    return results;
}

const parseSKR = (json) => {
    console.log(json);
    const resultCount = json.resultCount;
    let next = json.next;
    return json.results;
}


export const jsonParser = (myndighet, json) => {
    console.log(myndighet);
    switch (myndighet) {
        case "sveriges kommuner och regioner":
            return parseSKR(json);
        case "folkhälsomyndigheten":
            return parseFHM(json);
        default:
            break;
    }
}

export const sanitizeString = (string) => {
    return capitalizeFirstLetter(string.replace(/_/g, ' '));
}