
// Polyfill for Promise
(function () {
  if (!window.Promise) {
    document.write('<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"><\/script>');
  }
})();

// Polyfill for Array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) return 0;
      if (number === 0 || !isFinite(number)) return number;
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };
    return function from(arrayLike) {
      var C = this;
      var items = Object(arrayLike);
      if (arrayLike == null) throw new TypeError("Array.from requires an array-like object.");
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) throw new TypeError('Array.from: when provided, the second argument must be a function');
        if (arguments.length > 2) T = arguments[2];
      }
      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      while (k < len) {
        var kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  })();
}

// Polyfill for Array.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {
      if (this == null) throw new TypeError('"this" is null or not defined');
      var o = Object(this);
      var len = o.length >>> 0;
      if (len === 0) return false;
      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      while (k < len) {
        if (o[k] === searchElement || (typeof o[k] === 'number' && typeof searchElement === 'number' && isNaN(o[k]) && isNaN(searchElement))) return true;
        k++;
      }
      return false;
    }
  });
}

// Polyfill for Array.of
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}

// Polyfill for Object.values
if (!Object.values) {
  Object.values = function (obj) {
    if (obj !== Object(obj)) throw new TypeError('Object.values called on a non-object');
    var val = [], key;
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        val.push(obj[key]);
      }
    }
    return val;
  };
}

// Polyfill for Symbol
if (!window.Symbol) {
  document.write('<script src="https://cdn.jsdelivr.net/npm/core-js@3/features/symbol/index.js"><\/script>');
}

// Polyfill for Map
if (!window.Map) {
  document.write('<script src="https://cdn.jsdelivr.net/npm/core-js@3/features/map/index.js"><\/script>');
}

// Polyfill for Set
if (!window.Set) {
  document.write('<script src="https://cdn.jsdelivr.net/npm/core-js@3/features/set/index.js"><\/script>');
}
