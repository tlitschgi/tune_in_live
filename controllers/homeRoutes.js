const router = require("express").Router();
const { Genre, Concert } = require("../models");

// GET all concerts
router.get("/", async (req, res) => {
  try {
    const concertData = await Concert.findAll({
      include: [{ model: Genre }],
    });
    const concertArray = concertData.map((concert) =>
      concert.get({ plain: true })
    );
    const genreData = await Genre.findAll();
    const genreArray = genreData.map((genre) => genre.get({ plain: true }));
    //console.log(concertArray);
    res.render("homepage", { concertArray, genreArray });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
