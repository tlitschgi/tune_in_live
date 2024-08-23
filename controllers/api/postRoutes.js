const router = require('express').Router();
const { Genre, Concert } = require('../../models');

// GET all concerts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Concert }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
