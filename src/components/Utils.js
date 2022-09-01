



export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const getFeaturesFHM = (json) => {
    let objectArr = [];
    for (let i=0; i<json.features.length; i++) {
        objectArr.push(json.features[i]);
    }
    console.log(typeof(objectArr));
    return objectArr;
}

export const sanitizeString = (string) => {
    return capitalizeFirstLetter(string.replace(/_/g, ' '));
}