var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json({ extended: true }));
var Track = require('./Track');

/*
*Create Track
*/
router.post('/', function (req, res) {
	Track.create({
		identification : req.body.identification,
		time:req.body.time,
		longitude : req.body.longitude,
		latitude : req.body.latitude
	}, 
	function (err, track) {
		if (err) return res.status(500).send("There was a problem adding the information to the database.");
		res.status(200).send(track);
	});
});

/*
*List all tack position
*/
router.get('/', function (req, res) {
	Track.find({}, function (err, tracks) {
		if (err) return res.status(500).send("There was a problem finding the tracked.");
		res.status(200).send(tracks);
	});
});

/*
*get tracks by id
*/
router.get('/:id', function (req, res) {
	Track.findById(req.params.id, function (err, track) {
		if (err) return res.status(500).send("There was a problem finding the Track.");
		if (!track) return res.status(404).send("No Track found.");
		res.status(200).send(track);
	});
});

module.exports = router;