export const sum = (...args) => {
  alert(args.reduce((a, b) => a + b, 0))
}
