const convertToAccountingFormat = (num) => {
  // ADVANCED
  // if (typeof num === 'number') {
  //   return num < 0 ? `(${Math.abs(num)})` : num.toString()
  // } else {
  //   return undefined
  // }

  // MINE
  // if (num == null) return
  // return num < 0 ? `(${Math.abs(num)})` : num.toString()

  // PRO
  if (num == null) return
  if (num < 0) return `(${Math.abs(num)})`
  return num.toString()
}

// TEST CASES
// console.log(convertToAccountingFormat(0))
// console.log(convertToAccountingFormat(10))
// console.log(convertToAccountingFormat(-5))
// console.log(convertToAccountingFormat(undefined))
// console.log(convertToAccountingFormat('things'))

const TAX_RATE = 1.1
const SHIPPING_RATE_DEFAULT = 5

const calculateOptions = (
  subTotal,
  { shipping = SHIPPING_RATE_DEFAULT, discount = 0 } = {}
) => {
  subTotal -= subTotal * discount
  subTotal *= TAX_RATE
  subTotal += shipping

  return subTotal
}

const calculateTotal = (items, options = {}) => {
  if (items == null || items.length === 0) return 0

  let total = 0
  items.forEach((item) => {
    total += item.price * item.quantity
  })

  return calculateOptions(total, options)
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
]

// console.log(calculateTotal({}))
console.log(calculateTotal(testItems))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping: 0 }))
console.log(calculateTotal(testItems, { discount: 0.75 }))
console.log(calculateTotal(testItems, { shipping: 12 }))
