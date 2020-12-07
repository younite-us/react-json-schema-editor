let childItems = [];
export function traverse(jsonObj) {
    // childItems = [];
    if (jsonObj !== null && typeof jsonObj == "object") {
        Object.entries(jsonObj).forEach(([key, value]) => {
            // key is either an array index or object key
            if (checkIfArray(value)) {
                // addArrayChildItem(key, value);
            } else {
                addArrayChildItem(key, value);
            }
        });
    }
    else {
        // jsonObj is a number or string
        // console.log('this is String ', jsonObj);
    }
    return childItems;
}

function addArrayChildItem(key, value) {
    // traverse(value);
    // if(Object.keys(value).includes('type')){
        childItems.push({[key]:value});
    // }
}

function checkIfArray(json) {
    if (json instanceof Array) {
        // get JSON array
        return true;
    } else {
        // get JSON object
        return false;
    }
}