const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// create a new mongoose schema for the data to be entered with
const WorkoutSchema = new Schema({
  // day of the entry, set to the date when entered
  day: {
    type: Date,
  },
  // set exercises to an array that w
  exercises: [
    {
      type: {
        type: String,
        required: 'Exercise type is required',
      },
      name: {
        type: String,
        trim: true,
        required: 'Exercise name is required',
      },
      weight: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
        required: 'Duration is required',
      },
    },
  ],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
