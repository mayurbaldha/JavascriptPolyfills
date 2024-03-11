function throttle(fn, delay, context) {
  let timer;
  let lastArgs;
 
  return function (...args) {
    lastArgs = args;
    context = this ?? context;
 
    if (timer) return;
 
    timer = setTimeout(() => {
      fn.apply(context, lastArgs);
      clearTimeout(timer);
    }, delay);
  };
}
