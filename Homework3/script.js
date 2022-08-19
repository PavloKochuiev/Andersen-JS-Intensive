Array.prototype.myFilter = function (callback, obj) {
  const filtered = [];
  const context = obj || this;

  for (let i = 0; i < this.length; i++) {
    const current = callback.call(context, this[i], i, this);

    if (current) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

function createDebounceFunction(func, timeout) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
