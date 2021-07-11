'use strict';

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can drive')
// const interface = 'Audio';


/*-----------------------Function-----------------------*/

// function logger() {
//     console.log('My name is Mark')
// }

// logger();
// function cutFruitPieces(fruit) {
//     return fruit * 4
// }
// function foodProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} apples and 
//     ${orangePieces} oranges.`
//     return juice
// }
// const appleJuice = foodProcessor(5, 0)
// console.log(appleJuice)

// function calcAge1(bithYear) {
//     return 2037 - bithYear
// }
// const age1 = calcAge1(1991)
// const calcage2 = function (bithYear) {
//     return 2037 - bithYear
// }
// const age2 = calcage2(1991)
// console.log(age1, age2)

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearUntilRetirement(1991, 'Mark'))


/*-----------------------Coding Challenge #1-----------------------*/

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console,
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//   } else {
//     console.log('No team wins....')
//   }
// }

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);



/*-----------------------Array-----------------------*/

// const friends = ['Mark', 'Steve', 'Dave']
// const y = new Array(1990, 2020, 2030)

// console.log(friends.length)
// console.log(friends[friends.length - 1])
// friends[2] = 'Jay'

// const years = [1990, 1991, 1992, 1993]
// const calcAge = function (birthYear) {
//   return 2037 - birthYear
// }
// console.log(calcAge(years[0]))
// console.log(calcAge(years[years.length - 1]))

// const ages = [calcAge[0], calcAge[1], calcAge[years[years.length - 1]]]


// const friends = ['Mark', 'Steve', 'Peter']

// // add and remove elements
// friends.push('Jay')
// friends.unshift('Tomo')

// friends.pop()
// friends.shift()
// console.log(friends)
// console.log(friends.indexOf('Steve'))
// console.log(friends.indexOf('Bob'))

// console.log(friends.includes('Mark'))
// console.log(friends.includes('Bob'))


/*-----------------------Coding Challenge #2-----------------------*/

/*
Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different,
the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge
  if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function
you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = billValue => {
//   return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2
// }

// const bill = [125, 555, 44]
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// const total = bill + tips

// console.log(bill, tips, total)

/*-----------------------Object-----------------------*/
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Mark',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Micheal', 'Peter', 'Steven']
// }

// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// const nameKey = 'Name'
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestIn = prompt('What do you want to know about Jonas?')

// if (jonas[interestIn]) {
//   console.log(jonas[interestIn])
// } else {
//   console.log('wrong request')
// }
// jonas.location = 'Portugal'
// jonas['twitter'] = '@findme.mark'
// console.log(jonas)
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)




// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Mark',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Micheal', 'Peter', 'Steven'],
//   hasDriverLicense: true,
// calcAge: function (birthYear) {
//   return 2037 - birthYear
// }

// calcAge: function () {
//   return 2037 - this.birthYear
// }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear
//     return this.age
//   }
// }
// console.log(jonas.calcAge())
// console.log(jonas.age)

// console.log(jonas['calcAge'](1990))

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time,
let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter)

1. For each of them, create an object with properties for their full name,
mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI
(the same method on both objects). Store the BMI value to a property,
and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name
and the respective BMI. Example: "John Smith's BMI (28.3) is higher than
Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀

*/

// const Marks = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   }
// }


// const John = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   }
// }

// Marks.calcBMI()
// John.calcBMI()

// console.log(Marks.bmi, John.bmi)



/*-----------------------Loop-----------------------*/

// const years = [1991, 2007, 1969, 2020]
// const ages = []
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i])
// }
// console.log(ages)

// const jonas = [
//   'Jonas',
//   'Mark',
//   2037 - 1991,
//   'teacher',
//   ['Micheal', 'Peter', 'Steven']
// ]
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i])
// }

/*-----------------------While Loop-----------------------*/
// let rep = 1
// while (rep <= 10) {
//   console.log(`Count rep ${rep}`)
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
//   if (dice === 6) console.log(`Loop finish`)
// }

/*-----------------------Coding Challenge #4-----------------------*/

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat)
to calculate tips and total values (bill + tip) for every bill value in
the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to
the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr'
as an argument. This function calculates the average of all numbers
in the given array. This is a DIFFICULT challenge (we haven't done this
before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array.
  To do the addition, start by creating a variable 'sum' that starts at 0.
  Then loop over the array using a for loop. In each iteration,
  add the current value to the 'sum' variable. This way, by the end
  of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before
  by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let total = []

const calcTip = bill => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i])
  total.push(tip + bills[i])
}

let sum = 0
const calcAverage = total => {
  for (let i = 0; i < total.length; i++) {
    sum += total[i]
  }
  return sum / total.length
}
console.log(calcAverage(total))

