const Immutable = require('immutable');

// newMap will be used to receive updates from map
var newMap = null;

// we create a Map with few objects inside it
var map = Immutable.Map({
    // element with an integer
    a: 1, 
    // element with a string
    b: 'Example with a string',
    // element with a object
    c: { 
        name: 'Daniel', 
        age:'33'
    }
})
//console.log(map);

/**
 * to get value from a specific element
 */
// console.log(map.get('a'));
// console.log(map.get('c'));



/**
 * How to add an element?
 */ 
var newPerson = {
    name: 'Rita de Cássia',
    age: 30,
    children: [{name: 'Nicole'}]
}

newMap = map.set('d', newPerson);
//console.log(newMap)


/**
 * How to change? First we need a new var to change...
 */ 
// a integer
newMap = newMap.set('a', 17);
console.log(newMap);

// changing a complex element
// changing d element
console.log('changing d:', newMap.get('d'));
var newMap = map.set('d', { 'name': 'Rita de Cássia Gontijo Nogueira'});
console.log('changed d:', newMap.get('d'));
console.log(newMap);