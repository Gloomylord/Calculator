function parseString(str) {
    let res = str;
    if(res.slice(0,1) == '+') res = res.slice(1, res.length);

    while (res.indexOf('*') > 0 || res.indexOf('/') > 0) {
        res = multiplyAndDivide(res);
    }

    while (res.indexOf('+') > 0 || res.indexOf('-', 1) > 0) {
        res = plusAndMinus(res);
    }
    console.log(res)
    return isNaN(+res) ? 'Error' : res
}

function plusAndMinus(str) {
    if (str.match(/^\+/) || str.match(/-$/)) return 'err'
    return str.replace(/(-?\d+(\.\d+)?)([-+])(\d+(\.\d+)?)/g, (...match) => {
        return '' + (match[3] == '+' ? +match[1] + +match[4] : +match[1] - +match[4])
    });
}

function multiplyAndDivide(str) {
    if (str.match(/^[*/]/) || str.match(/[*/]$/)) return 'err'
    return str.replace(/(\d+(\.\d+)?)([*/])(\d+(\.\d+)?)/g, (...match) => {
        return '' + (match[3] == '*' ? match[1] * match[4] : match[1] / match[4])
    });
}

module.exports = parseString;
