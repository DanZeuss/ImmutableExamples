const Immutable = require('immutable');

let book = Immutable.fromJS({
  title: 'Harry Potter & The Goblet of Fire',
  isbn: '0439139600',
  series: 'Harry Potter',
  author: {
    firstName: 'J.K.',
    lastName: 'Rowling'
  },
  genres: [
    'Crime',
    'Fiction',
    'Adventure',
  ],
  storeListings: [
    {storeId: 'amazon', price: 7.95},
    {storeId: 'barnesnoble', price: 7.95},
    {storeId: 'biblio', price: 4.99},
    {storeId: 'bookdepository', price: 11.88},
  ]
});


//To get a value of an index (i.e. a key) in a List, you use the .get() or .getIn() methods:
console.log(book.getIn(['genres', 1])); // -> 'Fiction'
book = book.set('genres', book.get('genres').push('Wizards'));
// or this way
book = book.update('genres', genres => genres.push('Fantasy'));
// updating a value of a nested data knowing the ID of the list
book = book.setIn(['storeListings', 0, 'price'], 8.98);
// However, we usually don’t know the index of the entry we want to update. It’s pretty easy to find it using .findIndex():
const indexOfListingToUpdate = book.get('storeListings').findIndex(listing => {
  return listing.get('storeId') === 'amazon';
});
book = book.setIn(['storeListings', indexOfListingToUpdate, 'price'], 6.80);


console.log(book);
