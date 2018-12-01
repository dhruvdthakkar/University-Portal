var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
var MaterialSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    who: {
        type: Boolean,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});

mongoose.model('materials', MaterialSchema);