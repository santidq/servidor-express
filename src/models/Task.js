const { model, Schema } = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    
    },
  

});

module.exports = model('Task', TaskSchema)