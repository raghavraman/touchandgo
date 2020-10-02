
exports.incommingEvents = async function (req, res, next) {
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
