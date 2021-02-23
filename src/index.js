const numbersReadable = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}

function search(number) {
    for (let key in numbersReadable) {
        if (number === +key) {
            return numbersReadable[key];
        }
    }
}

module.exports = function toReadable (number) {
    let units = 0;
    let tens = 0;
    let hundreds = 0;
    switch (true) {
        case (number < 21
            || number < 100 && number % 10 === 0):
            return search(number);
        case (number < 100):
            units = number % 10;
            tens = Math.floor(number / 10) * 10;
            return `${search(tens)} ${search(units)}`;
        case (number >= 100):
            hundreds = Math.floor(number / 100);
            let tmp = number % 100;
            if (tmp === 0) {
                return `${search(hundreds)} hundred`;
            } else if (tmp < 21 || tmp % 10 === 0) {
                return `${search(hundreds)} hundred ${search(tmp)}`;
            } else {
                units = tmp % 10;
                tens = Math.floor(tmp / 10) * 10;
                return `${search(hundreds)} hundred ${search(tens)} ${search(units)}`;
            }
    }
}