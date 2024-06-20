export function replaceValues(obj, targetValue, newValue) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                replaceValues(obj[key], targetValue, newValue); // Recursive call to children objects
            } else if (obj[key] === targetValue) {
                obj[key] = newValue;
            }
        }
    }
}

export function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') 
        return obj;

    let objCopy = {};
    for (let key in obj) 
        if (obj.hasOwnProperty(key)) 
            objCopy[key] = deepCopy(obj[key]);
    
    return objCopy;
}