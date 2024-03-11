if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    if (typeof callback !== "function")
      throw new Error("Argument passed has to be a function");
 
    let newArray = [];
 
    for (let index in this) {
      if (callback(this[index], index, this)) {
        newArray.push(this[index]);
      }
    }
    return newArray;
  };
}
