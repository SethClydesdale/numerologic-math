# Numerological Math

This is an object for numerological calculations.

## Methods

Use the list below to jump to the method you want to know more about.
- [value()](#numerologicalvaluestr-map)
- [summation()](#numerologicalsummationn-map)
- [gender()](#numerologicalgendern)

### numerological.value(str, map)

``value()`` takes a string and returns a single digit between 1 and 9. 

**Example**
```javascript
numerological.value('Seth'); // 7
```
**Note :** Only basic latin characters are calculated by this method. ( A-Z )

Passing ``true`` as the second parameter will return a string map which represents the calculation.
```javascript
numerological.value('Seth', true);
// 's = 1 --> 1 + (e = 5) = 6 --> 6 + (t = 2) = 8 --> 8 + (h = 8) = 16 --> 1 + 6 = 7'
```

### numerological.summation(n, map)

``summation()`` takes a whole number and returns a single digit.

**Example**
```javascript
numerological.summation(2015); // 8
```
Each number is added together until only a single digit remains. For example : 2 + 0 + 1 + 5 = 8

Passing ``true`` as the second parameter will return a string map which represents the calculation.
```javascript
numerological.summation(2015, true);
// '2 + 0 = 2 --> 2 + 1 = 3 --> 3 + 5 = 8'
```

### numerological.gender(n)

``gender()`` takes a whole number and returns the gender of the number in a string of either 'masculine' or 'feminine'.

**Example**
```javascript
numerological.gender(7); // 'masculine'
```
**Note :** Odd numbers are considered Masculine and Even numbers are considered Feminine.
