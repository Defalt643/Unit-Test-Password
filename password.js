const checkLength = function (password) {
  return password.length >= 8 && password.length <= 25
}
const checkAlphabet = function (password) {
  // const alphabets = 'abcdefghjklmnopqrstuvwxyz'
  // for (const ch of password) {
  //   if (alphabets.includes(ch.toLowerCase())) return true
  // }
  // return false
  return /[a-zA-Z]/.test(password)
}
const checkDigits = function (password) {
  return /[0-9]/.test(password)
}
const checkSymbol = function (password) {
  const symbol = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
  for (const sy of password) {
    if (symbol.includes(sy.toLowerCase())) return true
  }
  return false
}
const checkPassword = function (password) {
  return checkAlphabet(password) && checkDigits(password) && checkLength(password) && checkSymbol(password)
}
module.exports = {
  checkAlphabet,
  checkLength,
  checkDigits,
  checkSymbol,
  checkPassword
}
