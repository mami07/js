'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 * @next multiply-recursive
 */

// Your code :
<<<<<<< Updated upstream
const multiply = (a, b) => {
  let resultat = 0
  let count = 0

  while (count < Math.abs(b)) {
    resultat = resultat + Math.abs(a)
    count++
  }
  resultat = Math.sign(a) === Math.sign(b) ? resultat : -resultat

  return resultat
}
=======
const multiply = (a, b) => math.imul(a, b)
>>>>>>> Stashed changes

const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
