const router = require('express').Router();
const Workout = require('../models/Workout');

// post for creating new workout
router.post('/api/workouts', (req, res) => {
  console.log(req.body);
  // Workout.create({}).then();
});

// get for retrieving all workouts
router.get('/api/workouts', (req, res) => {
  console.log(req.body);
  res.json({ stuff: 'stuff' });
});

// put for updating existing workouts by id
router.put('/api/workouts/:id', (req, res) => {});

// delete for removing unwanted workouts by id
router.delete('/api/workouts/:id', (req, res) => {});

module.exports = router;
