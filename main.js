// 1.Use a do...while loop to console.log the numbers from 1 to 1000.
let counter = 0

do {
    counter++
    console.log(counter)
} while (counter < 1000)


// 2. Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


// 3.Create a function that logs out the keys of the object using Object.keys().

const logKeys = (object) => {
    console.log(Object.keys(object))
}

logKeys(person)


// 4. Create a function that logs out the keys and values of the object using Object.entries().

const logKeysAndValues = (object) => {
    console.log(Object.entries(object))
}

logKeysAndValues(person)


// 5.Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above 
// multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    {firstName: "Daniel",
    lastName: "Harder",
    birthDate: "Aug 26, 1989",
    gender: "male"},

    {firstName: "Marli",
    lastName: "Harder",
    birthDate: "Jul 12, 2010",
    gender: "female"},

    {firstName: "Truly",
    lastName: "Alvarenga",
    birthDate: "Jan 27, 1986",
    gender: "female"},

    {firstName: "Layne",
    lastName: "Schulz",
    birthDate: "Oct 15, 2010",
    gender: "male"},

    {firstName: "Ariana",
    lastName: "Celeste",
    birthDate: "Nov 1, 2000",
    gender: "female"},

    {firstName: "Sonia",
    lastName: "Lara",
    birthDate: "Apr 13, 1970",
    gender: "female"},

    {firstName: "Andy",
    lastName: "Garcia",
    birthDate: "Dec 25, 1967",
    gender: "male"},

    {firstName: "Lucy",
    lastName: "Dog",
    birthDate: "Mar 20, 1999",
    gender: "female"
    }
]


// 6. Create a function that uses a for...of loop and an if statement to console.log the value associated with 
// the key birthDate of each object if the birth year is an odd number.

const getOddballs = (array) => {
    for (let person of array) {
        let birthYear = Number(person.birthDate.slice(-4))
        if ((birthYear % 2) != 0) {
            console.log(`${person.firstName} was born in the odd year ${birthYear}.`)
        }
    }
}

getOddballs(arrayOfPersons)



// 7. Use .map() to map over the arrayOfPersons and console.log() their information.

const personMap = arrayOfPersons.map(x => x)
console.log(personMap)


// 8. Use .filter() to filter the persons array and console.log only males in the array.

const onlyMales = arrayOfPersons.filter(person => person.gender == "male")
console.log(onlyMales)


// 9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const bornBefore = (array, date) => {
    let beforeDate = Number(date.slice(-4))
    for (let person of array) {
        let birthYear = Number(person.birthDate.slice(-4))
        if(birthYear < beforeDate) {
            console.log(`${person.firstName} was born in ${birthYear}, which is before ${date}`)
            // return true
        }
    }
}

bornBefore(arrayOfPersons, 'Jan 1, 1990')


// 10. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const before1990 = arrayOfPersons.filter(person => Number(person.birthDate.slice(-4)) < 1990)
console.log(before1990)

