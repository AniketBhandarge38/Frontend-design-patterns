let delay = 500;
let apiCallCounter = 0;

const fetchData = () => {
  apiCallCounter++;
  console.log("Api called: ", apiCallCounter);
};

const performDelay = function (cb, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fetchData.apply(context, args), delay);
  };
};

const debounceFunction = performDelay(fetchData, delay);
