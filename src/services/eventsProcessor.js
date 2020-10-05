class EventsProcessor {

    constructor(message, topic){
        this.message = JSON.stringify(message);
        this.topic = topic;
    }

    process(){
        console.log('recived message' + this.message)
        console.log("Processing Events for " + this.topic.name)
        if(this.isSubscriberAvailable()){
            console.log("Sending events to these Subscribers:")
            this.topic.subcribers.forEach(function(services) {
                console.log(services);
            });
        }
    }

    isSubscriberAvailable(){
        if(this.topic.subcribers)
            return true;
        return false;
    }
}

module.exports = EventsProcessor;