const util = require("util");
const Topic = require('./src/topics/topic')
const EventsProcessor = require('./src/services/eventsProcessor')

const topic = new Topic("ticketCompleted");
const message = {
  "name": "Raghav",
  "work": "Covermymeds",
  "city": "Columbus"
}

const processor = new EventsProcessor(message, topic);

console.log(util.inspect(topic, { depth: null }));
console.log(util.inspect(processor, { depth: null }));
processor.process();

