const study = require("../../models/study.js");
const db = require("../../components/db.js");
// import * as db from "../../components/db.js";
// import * as study from "../../models/study.js";
jest.mock("../../components/db.js");
test("study.create()", () => {
  let studyModel = {
    begin: Date.now(),
    end: Date.now(),
    title: "title",
    isInterrupted: false
  };
  expect(study.create(studyModel)).toBe(true);
  expect(db.add).toHaveBeenCalledWith(studyModel);
});

test("study.update()", () => {
  let studyModel = {
    begin: Date.now(),
    end: Date.now(),
    title: "title",
    isInterrupted: false
  };
  expect(study.update(studyModel)).toBe(true);
  expect(db.update).toHaveBeenCalledWith(studyModel);
});

test("study.drop()", () => {
  let studyModel = {
    begin: Date.now(),
    end: Date.now(),
    title: "title",
    isInterrupted: false
  };
  expect(study.drop(studyModel)).toBe(true);
  expect(db.delete).toHaveBeenCalledWith(studyModel);
});
