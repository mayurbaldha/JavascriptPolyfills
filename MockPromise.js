function MyPromise(resolver) {
  let successList = [];
  let failureList = [];
  let resolution = "pending";
  let data;
  function resolve(value) {
    if (resolution === "pending") {
      for (let successCb of successList) {
        successCb(value);
      }
      resolution = "resolved";
      data = value;
    }
  }
  function reject(value) {
    if (resolution === "pending") {
      for (let failureCb of failureList) {
        failureCb(value);
      }
      resolution = "rejected";
      data = value;
    }
  }
  setTimeout(() => {
    try {
      resolver(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }, 0);
  return {
    status: resolution,
    then: function (onSuccess, onFailure) {
      if (resolution === "pending") {
        successList.push(onSuccess);
        failureList.push(onFailure);
      } else {
        resolution === "resolved" ? onSuccess(data) : onFailure(data);
      }
    },
  };
}
// driver code
let p = new MyPromise((resolve, reject) => {
  resolve(10);
});
p.then((data) => console.log(data), console.log);
