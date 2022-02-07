const express = require('express');

const { Image } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
    const images = await Image.findAll();
    res.json(images);
});

module.exports = router;
