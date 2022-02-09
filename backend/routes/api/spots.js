const express = require('express');
const SpotRepository = require('../../db/spot-repository');

const router = express.Router();

router.get('/', async (req, res) => {
    const spots = await SpotRepository.allSpots();
    res.json(spots);
});

router.get('/:id', async (req, res) => {
    const spotInfo = await SpotRepository.getSpotByPk(req.params.id);
    return res.json(spotInfo);
});

router.post('/', async (req, res) => {
    const { name, userId, address, city, state, price, numOfGuests, description, image } = req.body;
    const spot = await SpotRepository.addSpot({ name, userId, address, city, state, price, numOfGuests, description, image });
    return res.json(spot);
});

module.exports = router;
