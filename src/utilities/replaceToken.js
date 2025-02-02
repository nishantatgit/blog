function replaceToken(template, ...values) {
    return template.replace(/{(\d+)}/g, (match, index) => values[index] ?? match);
}

export default replaceToken;