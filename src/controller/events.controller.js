
const EventsProcessor = require('../services/eventsProcessor');
const Topic = require('../topics/topic')

exports.incommingEvents = async function (req, res) {
    console.log('Got body:', req.body);
    const incoming_params = req.body;
    res.send(incoming_params);
}

exports.outgoingEvents = async function (req, res, next) {
    res.send('We sent the outgoing messages')
}

exports.viewEvents = async function (req, res, next) {
    res.send('Here are the list of events')
}

exports.handleEvents = async function(req, res){
    let topic = new Topic(req.params.topic);
    new EventsProcessor(req.body, topic).process()
    res.send("ok")
}