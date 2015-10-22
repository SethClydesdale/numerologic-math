(function() {
  var numerologic = {
    
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
    value : function(str) {
      if (typeof str === 'string') {
        var i = 0,
            j = str.length,
            val = 0;

        for (str = str.toLowerCase(); i < j; i++) {
          if (numerologic.alphabet[str.charAt(i)]) {
            val += numerologic.alphabet[str.charAt(i)];
          }
        }
        
        return numerologic.summation(val);
        
      } else {
        return null;
      }
    },
      
    // take a whole number and sum it up into a single digit
    summation : function(n) {
      if (typeof n === 'number') {
        while (n > 9) {
          for (var val = n.toString(), i = 0, j = val.length, n = 0; i < j; i++) {
            n += +val.charAt(i);
          }
        }
      }
      
      return n;
    }

  }
  
  if (!window.numerologic) {
    window.numerologic = numerologic;
  }
}());
