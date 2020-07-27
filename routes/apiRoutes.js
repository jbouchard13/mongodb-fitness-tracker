const router = require('express').Router();
const Workout = require('../models/Workout');

// post for creating new workout
router.post('/workouts', (req, res) => {
  console.log(req.body);
  res.json({ message: 'post' });
  // Workout.create({}).then();
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

// put for updating existing workouts by id
router.put('/workouts/:id', (req, res) => {
  console.log(req.body);
});

// delete for removing unwanted workouts by id
router.delete('/workouts/:id', (req, res) => {
  console.log(req.body);
});

module.exports = router;
