var express = require('express');
var router = express.Router();
var locus = require("locus");

var states = require('../models/states')

router.get('/states', function(req,res) {
	states.allStates().distinct('state_name').then(function(states){
		res.json(states);
	})
});

router.get('/state/:state', function(req,res) {
	states.getState(req.params.state).then(function(state){
		res.json(state);
	})
});


module.exports = router;