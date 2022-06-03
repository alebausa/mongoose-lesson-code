const mongoose = require('mongoose');
const { Schema } = mongoose;

const catSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: [true, 'Please provide a cat name.'],
    trim: true 
  },
  age: {
    type: Number,
    min: 0,
    max: 99
  },
  color: {
    type: String,
    enum: ['white','black','orange','gray']
  },
  sickness: {
    type: Boolean,
    default: false
  },
  adopted: {
    type: Date,
    default: Date.now()
  }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;


