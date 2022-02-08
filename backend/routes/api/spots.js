const express = require('express');
const SpotRepository = require('../../db/spot-repository');

const router = express.Router();

router.get('/', async (req, res) => {
    const spots = await SpotRepository.allSpots();
    res.json(spots);
});

router.get('/:id', async (req, res) => {
    const spot = await SpotRepository.getSpotByPk(req.params.id);
    return res.json(spot);
});

module.exports = router;
