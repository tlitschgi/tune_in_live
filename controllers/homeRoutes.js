const router = require('express').Router();
const { Genre, Concert } = require('../../models');

// GET all concerts
router.get('/', async (req, res) => {
  try {
    const concertData = await Concert.findAll({
      include: [{ model: Genre }],
    });
    res.status(200).json(concertData);
  } catch (err) {
    res.status(500).json(err);
  }
res.render("layouts/main");
});

module.exports = router;
