const validateInput = {
    text : validateTextInput,
    textArea : validateTextInput
}

function validateTextInput(inputValue){
    if(inputValue.trim() === ""){
        return false;
    }
    return true;
}

export { validateInput };