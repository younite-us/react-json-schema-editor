let width = 80;
let height = 50;

let unit = 'rem';

export function setWidthAndHeight(widthProp, heightProp, unitProp) {
    width = widthProp;
    height = heightProp;
    unit = unitProp;
}

export function wp(percentProp) {
    let num = percentProp.split('%')[0];
    if (num !== '100') {
        const firstW = width * parseInt(num);
        const finalWidthPercent = firstW / 100;
        return finalWidthPercent + unit;
    } else {
        return width + unit;
    }
}

export function hp(percentProp) {
    let num = percentProp.split('%')[0];
    if (num !== '100') {
        const firstH = height * parseInt(num);
        const finalHeightPercent = firstH / 100;
        return finalHeightPercent + unit;
    } else {
        return height + unit;
    }
}