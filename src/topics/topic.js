const fs = require("fs");
const listOfTopics = [
  "ticketCompleted",
  "ticketCreated",
  "ticketInProgress",
  "ticketInReview",
  "ticketRefined",
];

class Topic {
  constructor(name) {
    this.name = name;
    this.subcribers = this.getTopicSubscribers(name);
  }

  getTopicSubscribers(name) {
    if (!this.isTopicAvailable(name)) {
      return null;
    }

    let path = `/${name}/subscriber.json`;
    try {
      return JSON.parse(fs.readFileSync(__dirname + path)).services;
    } catch (err) {
      console.log(`Error reading subcriber for Topic: ${name}`);
      console.log(err);
      return null;
    }
  }

  isTopicAvailable(name) {
    return listOfTopics.includes(name);
  }
}

module.exports = Topic;
