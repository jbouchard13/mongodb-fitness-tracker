const router = require('express').Router();
const Workout = require('../models/Workout');

// post for creating new workout
router.post('/workouts', (req, res) => {
  const newWorkout = req.body;
  console.log(newWorkout);
  //
  Workout.create(newWorkout)
    .then((data) => {
      res.status(200).json(data);
      console.log('added');
    })
    .catch((err) => {
      console.log(err);
    });
});

// get for retrieving all workouts
router.get('/workouts', (req, res) => {
  // find all previous results in db
  Workout.find({})
    .then((data) => {
      // send back data as json for the front end
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
    });
});

// get for workouts within a range
router.get('/workouts/range');

// put for updating existing workouts by id
router.put('/workouts/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  Workout.updateOne({ id: id }, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete for removing unwanted workouts by id
router.delete('/workouts/:id', (req, res) => {
  console.log(req.body);
});

module.exports = router;
