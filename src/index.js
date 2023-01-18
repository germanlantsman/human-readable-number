module.exports = function toReadable(number) {
    let result = '';
    const oneToNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numberString = String(number);

    if (number === 0) {
        result = 'zero';
        return result;
    } else if (number.toString().length === 1) {
        result = oneToNine[number];
        return result;
    } else if ((number >= 10) && (number <= 19)) {
        result = tenToNineteen[number - 10];
        return result;
    } else if ((number.toString().length === 2) && (numberString[1] === '0')) {
        result = tens[number / 10 - 1];
        return result;
    } else if ((number.toString().length === 2) && (number >= 20)) {
        result = `${tens[Math.floor(number / 10) - 1]} ${oneToNine[number % 10]}`;
        return result;
    } else if ((number.toString().length === 3) && (numberString[1] === '0') && (numberString[2] === '0')) {
        result = `${oneToNine[number / 100]} hundred`;
        return result;
    } else if ((number.toString().length === 3) && (numberString[2] === '0') && (numberString[1] != '0')) {
        result = `${oneToNine[Math.floor(number / 100)]} hundred ${tens[((number % 100) / 10) - 1]}`;
        return result;
    } else if ((number.toString().length === 3) && (numberString[1] === '0') && (numberString[2] != '0')) {
        result = `${oneToNine[Math.floor(number / 100)]} hundred ${oneToNine[number % 100]}`;
        return result;
    } else if ((number.toString().length === 3) && (number % 100 > 10) && (number % 100 <= 19)) {
        result = `${oneToNine[Math.floor(number / 100)]} hundred ${tenToNineteen[number % 100 % 10]}`;
        return result;
    } else if ((number.toString().length === 3) && (numberString[1] != 0) && (numberString[2] != 0)) {
        result = `${oneToNine[Math.floor(number / 100)]} hundred ${tens[Math.floor((number % 100) / 10) - 1]} ${oneToNine[number % 100 % 10]}`;
        return result;
    }
    return result;
}
