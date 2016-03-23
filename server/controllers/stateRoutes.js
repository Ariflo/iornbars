var express = require('express');
var router = express.Router();
var locus = require("locus");

var states = require('../models/states')

router.get('/states', function(req,res) {
	states.AllStates().distinct('state_name').then(function(states){
		res.json(states);
	})
});


module.exports = router;