const resolvedWrapper = (value) => {
  // make variable
  const promise = new Promise((resolve, reject) => {
    resolve(value)
  })
  return promise
};

const rejectedWrapper = (value) => {
  const promise = new Promise((resolve, reject) => {
    reject(new Error(value))
  })
  return promise
};

const handleResolvedPromise = (promise) => {
  return promise.then((value) => {
    console.log(value)
    return value
  })
};

const handleResolvedOrRejectedPromise = () => {
};

const pauseForMs = () => {
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
