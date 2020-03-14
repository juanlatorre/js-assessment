exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    const isEqualToItem = (element) => element == item;

    return arr.findIndex(isEqualToItem);
  },

  sum: function(arr) {
    let counter = 0;
    arr.map((element) => {
      counter += element;
    });

    return counter;
  },

  remove: function(arr, item) {
    return arr.filter((element) => element != item);
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i--;
        };
    };

    return arr;
  },

  append: function(arr, item) {
    let arr2 = [...arr, item];
    return arr2;
  },

  truncate: function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let ocurrences = 0;
    arr.map((element) => {
      if (element == item) {
        ocurrences += 1;
      }
    })
    return ocurrences;
  },

  duplicates: function(arr) {
    var vistos = {};
    var duplicados = [];

    for (var i = 0; i < arr.length; i++) {
      vistos[arr[i]] = vistos[arr[i]] ? vistos[arr[i]] + 1 : 1;
    }

    for (var item in vistos) {
      if (vistos.hasOwnProperty(item) && vistos[item] > 1) {
        duplicados.push(parseInt(item));
      }
    }

    return duplicados;
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      let squared = arr[i]**2;
      arr.splice(i, 1, squared);
    }

    return arr;
  },

  findAllOccurrences: function(arr, target) {
    let ocurrences = [];
    arr.map((element, index) => {
      if (element == target) {
        ocurrences.splice(-1, 0, index);
      }
    })
    return ocurrences;
  }
};
