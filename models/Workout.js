const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// create a new mongoose schema for the data to be entered with
const WorkoutSchema = new Schema({
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
});
// set up method to return the total duration of all exercises within each workout plan
WorkoutSchema.methods.totalDuration = function () {
  // set up an adder function to be used when reducing the array
  const adder = (newDuration, currentTotal) => {
    newDuration + currentTotal;
  };
  let durationArr = [];
  // get each exercise duration and push it to the array to be added after
  this.exercises.forEach((exercise) => {
    durationArr.push(exercise.duration);
  });
  // add up the total minutes from the array and return it
  this.totalDuration = durationArr.reduce(adder);
  return this.totalDuration;
};

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
