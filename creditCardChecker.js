// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]


const cardChecker = inputId => {
    let cardDigit = inputId.length - 2
    let checkSum = 0
    let lenCheck = inputId.length % 2
    let len2 = lenCheck === 1 ? 0 : 1;

    while (cardDigit != -1) {
        const checkFormula = ((inputId[cardDigit] * 2) < 9) ? inputId[cardDigit] * 2 : ((inputId[cardDigit] * 2) - 9)

        if (cardDigit % 2 === lenCheck) {
            checkSum += checkFormula
            cardDigit--
        } else if (cardDigit % 2 === len2) {
            checkSum += inputId[cardDigit]
            cardDigit--
        }
    }
    if (cardDigit === -1) {
        checkSum += inputId[inputId.length - 1]
        return checkSum % 10 === 0 ? 'Valid number.' : 'Invalid number.. '

    }
}


const getCompany = list => {
    switch (list[0]) {
        case 3:
            return 'Amex'
        case 4:
            return 'Visa'
        case 5:
            return 'Mastercard'
        case 6:
            return 'Discover'
        default:
            return 'Unknown company'
    }
}

const checker = (input, num) => {
    let counter = 1
    let companies = ['Companies with invalid numbers:']

    while (counter < num + 1) {
        console.log('Card: ' + counter)
        let inputId = eval(input + counter)
        let results = cardChecker(inputId, num)
        if (results === 'Invalid number.. ' && companies.includes(getCompany(inputId)) != true) {
            companies.push(getCompany(inputId))
        } else {
            getCompany(inputId)
        }
        console.log(getCompany(inputId))
        console.log(results)
        console.log(`Number: ${inputId}`)
        console.log('-------------------------------------->')
        console.log('')
        counter += 1;

    }
    if (counter === num + 1) {
        console.log(companies)
        return console.log('Check complete...')
    }
}

checker('invalid', 5)