exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    var array = $.map(obj, function(value, index){
      return [value];
    });
    console.log(array);
    return fn.apply(this, array);
  },

  functionFunction : function(str) {

  },

  makeClosures : function(arr, fn) {

  },

  useArguments : function() {

  }
};
