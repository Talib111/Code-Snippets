// 1 ALLOW ONLY POSITIVE NUMBER INPUT
export const allowNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b]+$/;     //number
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}

// 2 ALLOW ONLY A TO Z CHARACTER INPUT + SPACE
export const allowCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z\s]*$/;  //character + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}

// 3 ALLOW ONLY CHARACTER AND NUMBER INPUT WITHOUT SPACE
export const allowCharacterNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z0-9]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}

// 4 ALLOW NUMBER AND COMMA INPUT
export const allowNumberCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}

// 5 ALLOW A TO Z AND COMMA WITH SPACE
export const allowCharacterSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z, ]*$/; //character + space + comma
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}

// 6 ALLOW CHARACTER AND NUMBER WITH SPACE INPUT
export const allowCharacterNumberSpaceInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[\.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[\a-zA-Z0-9 ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}

// 7 RETURNS THE CAPITALIZE VALUE
export const returnCapitalize = (currentValue) => {
    let capitalizeValue = currentValue.toUpperCase()
    return capitalizeValue
}

// 8 RETURNS CAPITALIZE VALUE WITH LENGTH RESTRICTION
export const returnCapitalizeWithLength = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    let capitalizeValue = currentValue.toUpperCase()
    return capitalizeValue
}

// 9 RESTRICT LENGTH ONLY
export const restrictLength = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max) {
        return oldValue
    } else {
        return currentValue
    } //stop if max value and return oldvalue
}
