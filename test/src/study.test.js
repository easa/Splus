const study = require("../../src/study.js");

test("study.create", () => {
  let opt = {
      begin: Date.now(),
      end: Date.now(),
      title: "title",
      isInterrupted: false
  };
  expect(study.create(opt)).toBe(true);
});
