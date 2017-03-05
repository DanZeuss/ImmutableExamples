const Immutable = require ('immutable');

/**
 * We create a simple object Person
 */
let person = Immutable.Map({
    name: 'Daniel', 
    age: 33,
    children: Immutable.fromJS([{ name: 'Nicole'}, {name: 'Bolha', name: 'Candy'}])
});

// // Print details from the person and from a prop 
// console.log(person);
// person.get('children').map((children) => 
//     console.log(children.get('name'))
// );


let book = Immutable.fromJS({
  title: 'Harry Potter & The Goblet of Fire',
  isbn: '0439139600',
  series: 'Harry Potter',
  author: {
    firstName: 'J.K.',
    lastName: 'Rowling'
  },
  categories: [{description: 'History'}, {description: 'fantasy'}]

});

// console.log(book);
// console.log(book.get('title')); // -> 'Harry Potter & The Goblet of Fire'
// console.log(book.get('author').get('firstName')); // -> J.K
// console.log(book.getIn(['author', 'firstName'])); // -> J.K
// console.log(book.get('categories').get(0).get('description')); // -> 'History

// // changing 
// book = book.setIn(['author', 'firstName'], 'Daniel Vieira Costa');
// console.log(book);
// changing an element inside a list
book = book.setIn(['categories', 0, 'description'], 'Nova categoria');
console.log(book);