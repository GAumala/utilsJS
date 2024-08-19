export const sleep = (ms, signal) =>
  new Promise((resolve) => {
    const timeoutId = setTimeout(resolve, ms);
    if (signal) {
      signal.addEventListener("abort", () => {
        clearTimeout(timeoutId);
        resolve();
      });
    }
  });

export const untilNextTick = () =>
  new Promise((resolve) => {
    process.setNextTick(() => resolve());
  });
