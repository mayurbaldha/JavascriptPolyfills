if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    if (typeof callback !== "function")
      throw new Error("Argument passed has to be a function");
 
    let newArray = [];
 
    for (let index in this) {
      newArray.push(callback(this[index], index, this));
    }
    return newArray;
  };
}
