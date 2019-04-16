const db = require("../components/db.js");
// import * as db from "../components/db.js";

const study = {
  create: function(studyModel) {
    if (!studyModel) throw "Should pass a study model, can't leave empty";
    db.add(studyModel);
    return true;
  },
  update: function(studyModel) {
    if (!studyModel) throw "Should pass a study model, can't leave empty";
    db.update(studyModel);
    return true;
  },
  drop: function(studyModel) {
    if (!studyModel) throw "Should pass a study model, can't leave empty";
    db.delete(studyModel);
    return true;
  }
};
module.exports = study;
