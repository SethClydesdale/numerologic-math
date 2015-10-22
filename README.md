# Numerologic Math

This is an object for numerological calculations.

## Methods

Use the list below to jump to the method you want to know more about.
- [value()](#numerologicvaluestr)
- [summation()](#numerologicsummationn)
- [gender()](#numerologicgendern)

### numerologic.value(str)

``value()`` takes a string and returns a single digit between 1 and 9. 

**Example**
```javascript
numerologic.value('Seth'); // 7
```

Note : Only basic latin characters are calculated by this method. ( A-Z )

### numerologic.summation(n)

``summation()`` takes a whole number and returns a single digit.

**Example**
```javascript
numerologic.summation(2015); // 8
```

Each number is added together until only a single digit remains. This is what's going on : 2 + 0 + 1 + 5 = 8

### numerologic.gender(n)

``gender()`` takes a whole number and returns the gender of the number in a string of either 'masculine' or 'feminine'.

**Example**
```javascript
numerologic.gender(7); // 'masculine'
```

Note : Odd numbers are considered Masculine and Even numbers are considered Feminine.
