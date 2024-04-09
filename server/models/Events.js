const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_id: { type: "string", required: true },
    event_name: { type: "string", required: true },
    description: { type: "string", required: true },
    start_datetime: { type: Date, required: true },
    end_datetime: { type: Date, required: true },
    image_url: { type: "string", required: true },
    number_of_cars: { type: Number, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
