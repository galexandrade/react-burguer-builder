export const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    };
}

export const checkValidaty = (value, rules) => {
    let isValid = true;

    if(!rules)
        return true;

    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
}