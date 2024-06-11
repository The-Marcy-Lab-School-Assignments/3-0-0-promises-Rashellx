const resolvedWrapper = (value) => {
  // make variable
  const promise = new Promise((resolve, reject) => {
    resolve(value)
  })
  return promise
};

const rejectedWrapper = () => {
};

const handleResolvedPromise = () => {
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
