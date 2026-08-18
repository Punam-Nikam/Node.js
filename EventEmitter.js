const EventEmitter = require('events');

const event = new EventEmitter();

// Create event listener
event.on('message', function() {
    console.log("Event triggered successfully");
});

// Emit event
event.emit('message');