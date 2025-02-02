function  sanitizeInput(inputValue){
    return inputValue.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;");
}

export default sanitizeInput;