const fs = require("fs");
const util = require("util");

const listOfTopics = [
  "ticketCompleted",
  "ticketCreated",
  "ticketInProgress",
  "ticketInReview",
  "ticketRefined",
];

class Topics {
  constructor(name) {
    this.name = name;
    this.subcribers = this.getTopicSubscribers(name);
  }

  isTopicAvailable(name) {
    return listOfTopics.includes(name);
  }

  getTopicSubscribers(name) {
    if (!this.isTopicAvailable(name)) {
      return null;
    }

    let path = `./src/topics/${name}/subscriber.json`;
    try {
      return JSON.parse(fs.readFileSync(path));
    } catch (err) {
      // console.log(err);
      return null;
    }
  }

  getEverything() {
    console.log(util.inspect(this, { depth: null }));
  }
}

module.exports = Topics;

const test = new Topics("ticketCompleted");
test.getEverything();
