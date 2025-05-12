//* Problem:1 Print only Male Names.
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Boby", age: 30, gender: "male" },
  { name: "Charlie", age: 29, gender: "female" },
  { name: "Roy", age: 45, gender: "male" },
  { name: "Cherry", age: 28, gender: "female" },
  { name: "Hurcules", age: 42, gender: "male" },
  { name: "Robert", age: 56, gender: "male" },
];

function maleNames(people) {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}
console.log(maleNames(people));

//* Problem:2 Print all Books title.
const books = [
  { title: "Book A", author: "Author A", year: 2001 },
  { title: "Book c", author: "Author B", year: 2005 },
  { title: "Book f", author: "Author B", year: 2005 },
  { title: "Book d", author: "Author B", year: 2005 },
];

function bookTitles(books) {
  return books.map((book) => book.title);
}
console.log(bookTitles(books));

//* Problmes:3 Mathmetical Problem
function square(s) {
  return s * s;
}
function double(d) {
  return d * 2;
}
function addFive(a) {
  return a + 5;
}
function mathFunction(math) {
  return addFive(double(square(math)));
}
console.log(mathFunction(2));

//* Problem:4 Leap Year checker.
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "It's a leap year.";
  } else {
    return "It's not a leap year.";
  }
}
console.log(checkLeapYear(2024));

//* Problem: 5 Find Maximum value form Array.
function maximumValue(array) {
  return Math.max(...array);
}
console.log(maximumValue([10, 5, 20, 7, 50]));
