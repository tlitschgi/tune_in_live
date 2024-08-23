const router = require('express').Router();
const { Genre, Concert } = require('../models');

// GET all concerts
router.get('/', async (req, res) => {
  try {
    const concertData = await Concert.findAll({
      include: [{ model: Genre }],
    });
    //res.status(200).json(concertData);
    res.render("homepage", {concertData});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
