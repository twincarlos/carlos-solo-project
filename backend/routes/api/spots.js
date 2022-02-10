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

router.get('/all/:userId', async (req, res) => {
    const spotList = await SpotRepository.allSpotsByUserId(req.params.userId);
    return res.json(spotList);
});

router.post('/', async (req, res) => {
    const { name, userId, address, city, state, price, numOfGuests, description, image } = req.body;
    const spot = await SpotRepository.addSpot({ name, userId, address, city, state, price, numOfGuests, description, image });
    return res.json(spot);
});

router.put('/:id', async (req, res) => {
    const { id, name, price, numOfGuests, description, image } = req.body;
    const newSpot = await SpotRepository.updateSpot({ id, name, price, numOfGuests, description, image });
    return res.json(newSpot);
});

router.delete("/:id", async function (req, res) {
    const spot = await SpotRepository.deleteSpot(req.params.id);
    return res.json({ spot });
  });

module.exports = router;
