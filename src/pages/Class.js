// class Invoice {
//   constructor(client, details, amount) {
//     this.client = client
//     this.details = details
//     this.amount = amount
//   }
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`
//   }
// }
// const invOne = new Invoice("mario", "work on the mario website", 250)
// const invTwo = new Invoice("luigi", "work on the luigi website", 300)
// console.log("🚀 || file: test.js:22 || invOne:", invOne.client)

// function displayName(arg) {
//   console.log("the name is", this.client)
//   console.log("arg", arg)
// }

// // displayName.call(invOne, "hi")
// // displayName.apply(invOne, ["hi"])

// const displayLuigi = displayName.bind(invTwo, "binddd")

// displayLuigi()

function first(arg1) {
  return function (arg2) {
    return function () {
      return arg1 + arg2
    }
  }
}

const sceond = (arg1) => (arg2) => arg1 + arg2
