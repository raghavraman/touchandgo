class EventsProcessor {

    constructor(message, topic){
        this.message = message;
        this.topic = topic;
    }

    process(){
        console.log("Processing Events for " + this.topic.name)
        if(this.isSubscriberAvailable()){
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