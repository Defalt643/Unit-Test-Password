const { checkLength } = require('./password')
describe('Test Password Length', () => {
  test('should 8 characters to be true', () => {
    expect(checkLength('12345678')).toBe(true)
  })
  test('should 7 characters to be false', () => {
    expect(checkLength('1234567')).toBe(false)
  })
  test('should 25 characters to be true', () => {
    expect(checkLength('0123456701234567898901234')).toBe(true)
  })
  test('should 26 characters to be true', () => {
    expect(checkLength('01234567890123456789012345')).toBe(false)
  })
})
const { checkAlphabet } = require('./password')
describe('Test Alphabet', () => {
  test('should has alphabet in password', () => {
    expect(checkAlphabet('m')).toBe(true)
  })
  test('should has not alphabet in password', () => {
    expect(checkAlphabet('1111')).toBe(false)
  })
})
const { checkDigits } = require('./password')
describe('Test Digits', () => {
  test('should has digits in password', () => {
    expect(checkDigits('123456')).toBe(true)
  })
  test('should has not digits in password', () => {
    expect(checkDigits('abcdefg')).toBe(false)
  })
  test('should has alphabet and digits in password', () => {
    expect(checkDigits('a1b2c3d4e5')).toBe(true)
  })
})
const { checkSymbol } = require('./password')
describe('Test Symbol', () => {
  test('should has symbol in password', () => {
    expect(checkSymbol('+!#$(*')).toBe(true)
  })
  test('should has not symbol in password', () => {
    expect(checkSymbol('123asd')).toBe(false)
  })
  test('should has alphabet, digits and symbol in password', () => {
    expect(checkSymbol('1a#2b%3c&')).toBe(true)
  })
})
const { checkPassword } = require('./password')
describe('Test Password with all conditions', () => {
  test('should Password pass all conditions', () => {
    expect(checkPassword('123456abcdefg!@#$')).toBe(true)
  })
  test('should Password does not contain alphabet', () => {
    expect(checkPassword('123456@#$%')).toBe(false)
  })
  test('should Password does not contain digits', () => {
    expect(checkPassword('abcde@#$%')).toBe(false)
  })
  test('should Password does not contain symbol', () => {
    expect(checkPassword('123456asbfkasbdihb')).toBe(false)
  })
  test('should Password has length less than 8', () => {
    expect(checkPassword('a1$')).toBe(false)
  })
  test('should Password has length greater than 25', () => {
    expect(checkPassword('1234567890abcdefghjk!@#$%^&*()yasvdashuhdiasd!@#$%^&*(864654')).toBe(false)
  })
})
