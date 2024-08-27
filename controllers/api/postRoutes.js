const router = require('express').Router();
const { Genre, Concert } = require('../../models');
const withAuth = require('../../utils/auth');

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

router.post('/', withAuth, async (req, res) => {
  try {
    const bookmarkData = await Bookmark.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(bookmarkData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bookmarkData = await Bookmark.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });

    if (!bookmarkData) {
      res.status(404).json({ message: 'No bookmark found with this id!' });
    }

    res.status(200).json(bookmarkData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
