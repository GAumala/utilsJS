/* eslint-env jest */
const { sleep } = require("./async.js");
const { unixTime } = require("./time.js");

const abortAfterNextTick = async (controller) => {
  await sleep(0);
  controller.abort();
};

describe("sleep", () => {
  it("should accept a signal operation to abort", async () => {
    const abortController = new AbortController();
    const startTime = unixTime();

    // try to sleep for 60s but
    // abort after less than 1s
    abortAfterNextTick(abortController);
    await sleep(60000, abortController.signal);

    const endTime = unixTime();
    const sleepTime = endTime - startTime;
    expect(sleepTime).toBeLessThanOrEqual(1);
  });
});
