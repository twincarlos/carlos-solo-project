const express = require('express');
const SpotRepository = require('../../db/spot-repository');

const router = express.Router();

router.get('/', async (req, res) => {
    const spots = await SpotRepository.allSpots();
    res.json(spots);
});

module.exports = router;
