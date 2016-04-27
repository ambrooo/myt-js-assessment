exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

  },

  sum : function(arr) {
    for (var i = 0, sval = 0; i < arr.length; sval += arr[i++]);
    return sval;
  },

  remove : function(arr, item) {
    return arr.filter(function(el){
      return el !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {

    return arr.filter(function(el){
      return el !== item;
    });

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var concat = arr1.concat(arr2);
    return concat;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(value){
      return value === item;
    }).length;
  },

  duplicates : function(arr) {

    return arr.sort().filter(function(v,i,o){
      if(i>0 && v == o[i-1] && v !== o[i-2]) return v;
    });

  }
};
