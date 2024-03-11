if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, init) {
    let startPosition = 0;
    let accumulator = init ?? this[startPosition++];
 
    for (let index = startPosition; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
  };
}
