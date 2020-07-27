const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// create a new mongoose schema for the data to be entered with
const WorkoutSchema = new Schema(
  {
    // day of the entry, set to the date when entered
    day: {
      type: Date,
      default: Date.now,
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
  },
  {
    toJSON: {
      // includes any virtuals when they are requested. reference link below
      virtuals: true,
    },
  }
);
// referenced mongoose documentation for info on virtuals https://mongoosejs.com/docs/api.html#schema_Schema-virtual
WorkoutSchema.virtual('totalDuration').get(function () {
  // uses the reduce function to sum the total of the minutes in the exercises array
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
