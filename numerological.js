(function() {
  var numerological = {
    
    // a is 1, b is 2, and so on..
    // If a number is two or more digits add them together
    alphabet : {
      a : 1,
      j : 1,
      s : 1,
      b : 2,
      k : 2,
      t : 2,
      c : 3,
      l : 3,
      u : 3,
      d : 4,
      m : 4,
      v : 4,
      e : 5,
      n : 5,
      w : 5,
      f : 6,
      o : 6,
      x : 6,
      g : 7,
      p : 7,
      y : 7,
      h : 8,
      q : 8,
      z : 8,
      i : 9,
      r : 9
    },

    // return the numerological value of a string
    value : function(str, map) {
      if (typeof str === 'string') {
        str = str.toLowerCase();
        for (var i = 1, j = str.length, val = numerological.alphabet[str.charAt(0)], s = str.charAt(0) + ' = ' + val + ' --> '; i < j; i++) {
          if (numerological.alphabet[str.charAt(i)]) {
            val += numerological.alphabet[str.charAt(i)];
            if (map) {
              s += (val - numerological.alphabet[str.charAt(i)]) + ' + (' + str.charAt(i) + ' = ' + numerological.alphabet[str.charAt(i)] + ') = ' + val + ' --> ';
            }
          }
        }
        
        return map ? (s += numerological.summation(val, true)).replace(/ --> $/, '') : numerological.summation(val);
        
      } else {
        return null;
      }
    },
      
    // take a whole number and sum it up into a single digit
    summation : function(n, map) {
      if (typeof n === 'number') {
        while (n > 9) {
          for (var val = Math.floor(n).toString(), i = 1, j = val.length, n = +val.charAt(0), s = s || '', o; i < j; i++) {
            n += +val.charAt(i);
            if (map) {
              s += (n - +val.charAt(i)) + ' + ' + +val.charAt(i) + ' = ' + n + ' --> ';
            }
          }
        }
      }
      
      return map ? s || '' : n;
    },
    
    // find the gender of a number
    // odd numbers are masculine and even numbers are feminine
    gender : function(n) {
      if (typeof n === 'number') {
        return n % 2 == 0 ? 'feminine' : 'masculine';
      } else {
        return false;
      }
    }

  }
  
  if (!window.numerological) {
    window.numerological = numerological;
  }
}());
