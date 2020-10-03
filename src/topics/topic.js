const listOfTopics = [
  "ticketCompleted",
  "ticketCreated",
  "ticketInProgress",
  "ticketInReview",
  "ticketRefined",
];

class Topics {
  constructor(name) {
    this.subcribers = this.getTopicSubscriber(name);
  }

  getTopicSubscribers(name) {
    if (this.isTopicAvailable(name)) {
      return null;
    }

    let path = `./${name}/subscriber.json`;
    try {
      return JSON.parse(fs.readFileSync(path));
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

module.exports = Topics;
