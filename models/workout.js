const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for workout',
  },
  value: {
    type: Number,
    required: 'Enter an amount',
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const Worokout = mongoose.model('Workout', workoutSchema)

module.exports = Workout