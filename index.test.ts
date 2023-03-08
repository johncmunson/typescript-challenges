import {
  compact,
  // sumValues,
  // addOrRemove,
  // chunk,
  // arrayDifference,
  // isPalindrome,
  // getAllKeys,
  // Calculator,
  // sleep,
  // memoize,
} from './index'

// describe('1. compact', () => {
//   it('takes an array with falsy values and returns a new array with the falsy values removed', () => {
//     const before = ['a', false, 0, '', null, undefined, NaN, 'b']
//     const after = ['a', 'b']
//     expect(compact(before)).toEqual(after)
//   })
// })

// describe('2. sumValues', () => {
//   it('sums the numbers in an array', () => {
//     expect(sumValues([1, 2, 3])).toEqual(6)
//     expect(sumValues([0, -1, 2, -3])).toEqual(-2)
//     expect(sumValues([])).toEqual(0)
//   })
// })

// describe('3. addOrRemove', () => {
//   it("adds an item to an array if it doesn't already exist", () => {
//     expect(addOrRemove(5, ['a', true, 3])).toEqual(['a', true, 3, 5])
//   })

//   it('removes an item from an array if it already exists', () => {
//     expect(addOrRemove(7, ['a', true, 7])).toEqual(['a', true])
//   })
// })

// describe('4. chunk', () => {
//   it('takes an array and chunks it into pieces of the given size', () => {
//     const size = 3
//     const before = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const after = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ]
//     expect(chunk(before, size)).toEqual(after)
//   })

//   it("leaves the last chunk shorter if the array can't be split evenly", () => {
//     const size = 3
//     const before = [1, 2, 3, 4, 5, 6, 7, 8]
//     const after = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8],
//     ]
//     expect(chunk(before, size)).toEqual(after)
//   })

//   it('returns a single chunk if the array is smaller or equal to the given size', () => {
//     const size1 = 3
//     const size2 = 4
//     const before = [1, 2, 3]
//     const after = [[1, 2, 3]]
//     expect(chunk(before, size1)).toEqual(after)
//     expect(chunk(before, size2)).toEqual(after)
//   })
// })

// describe('5. arrayDifference', () => {
//   it('calculates the difference between the first array and all the others', () => {
//     expect(arrayDifference([1, 2, 3, 4, 5], [2, 3, 9], [5, 7])).toEqual([1, 4])
//   })
// })

// describe('6. isPalindrome', () => {
//   it('returns true if a string is a palindrome', () => {
//     expect(isPalindrome('Racecar')).toBe(true)
//   })

//   it('returns false if a string is not a palindrome', () => {
//     expect(isPalindrome('Animal')).toBe(false)
//   })
// })

// describe('7. getAllKeys', () => {
//   it('returns all the keys of a nested object', () => {
//     const nestedObj = {
//       abc: 123,
//       xyz: true,
//       foo: {
//         bar: {
//           baz: [4, 5, 6],
//         },
//       },
//     }
//     const expectedKeys = ['abc', 'xyz', 'foo', 'bar', 'baz', '0', '1', '2']
//     expect(getAllKeys(nestedObj)).toEqual(expectedKeys)
//   })

//   it('returns all the keys of a flat object', () => {
//     const flatObj = { a: 1, b: 2, c: 3 }
//     const expectedKeys = ['a', 'b', 'c']
//     expect(getAllKeys(flatObj)).toEqual(expectedKeys)
//   })
// })

// describe('8. Calculator', () => {
//   it('initializes the calculator with zero in the register by default', () => {
//     const myCalc = new Calculator()
//     expect(myCalc.calculate()).toEqual(0)
//   })

//   it('accepts an initializer', () => {
//     const myCalc = new Calculator(5)
//     expect(myCalc.calculate()).toEqual(5)
//   })

//   it('adds', () => {
//     const myCalc = new Calculator()
//     myCalc.add(2)
//     expect(myCalc.calculate()).toEqual(2)
//   })

//   it('subtracts', () => {
//     const myCalc = new Calculator()
//     myCalc.subtract(2)
//     expect(myCalc.calculate()).toEqual(-2)
//   })

//   it('multiplies', () => {
//     const myCalc = new Calculator(2)
//     myCalc.multiply(3)
//     expect(myCalc.calculate()).toEqual(6)
//   })

//   it('divides', () => {
//     const myCalc = new Calculator(8)
//     myCalc.divide(4)
//     expect(myCalc.calculate()).toEqual(2)
//   })

//   it('has a fluent API', () => {
//     const myCalc1 = new Calculator()
//     expect(myCalc1.add(1)).toEqual(myCalc1)
//     expect(myCalc1.subtract(1)).toEqual(myCalc1)
//     expect(myCalc1.multiply(1)).toEqual(myCalc1)
//     expect(myCalc1.divide(1)).toEqual(myCalc1)
//     expect(myCalc1.clear()).toEqual(myCalc1)

//     const myCalc2 = new Calculator()
//     const result1 = myCalc2.add(3).subtract(1).multiply(5).divide(2).calculate()
//     expect(result1).toEqual(5)
//     const result2 = myCalc2.clear().calculate()
//     expect(result2).toEqual(0)
//   })

//   it('clears the register', () => {
//     const myCalc = new Calculator(1)
//     myCalc.clear()
//     expect(myCalc.calculate()).toEqual(0)
//   })
// })

// describe('9. sleep', () => {
//   it('awaits the given number of milliseconds before resolving', async () => {
//     const t1 = Date.now()
//     await sleep(5)
//     const t2 = Date.now()
//     expect(t2).toBeGreaterThanOrEqual(t1 + 5)
//   })
// })

// describe('10. memoize', () => {
//   it('memoizes a given function and returns it', () => {
//     const mockFn = jest.fn(() => {})
//     const add = (a: number, b: number) => {
//       mockFn()
//       return a + b
//     }
//     const memoizedAdd = memoize(add)

//     const res1 = add(1, 2)
//     const res2 = add(1, 2)
//     const res3 = add(3, 4)
//     expect(res1).toEqual(3)
//     expect(res2).toEqual(3)
//     expect(res3).toEqual(7)
//     expect(mockFn).toHaveBeenCalledTimes(3)

//     mockFn.mockClear()

//     const memoRes1 = memoizedAdd(1, 2)
//     const memoRes2 = memoizedAdd(1, 2)
//     const memoRes3 = memoizedAdd(3, 4)
//     expect(memoRes1).toEqual(3)
//     expect(memoRes2).toEqual(3)
//     expect(memoRes3).toEqual(7)
//     expect(mockFn).toHaveBeenCalledTimes(2)
//   })
// })
