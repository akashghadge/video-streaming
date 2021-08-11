'use strict'
const { Router } = require("express");
const router = Router();

// database modules
const Movie = require("../models/movie.model");
router.get("/all", async (req, res) => {
    try {
        let moviesList = await Movie.find({});
        res.status(200).json(moviesList);
    }
    catch (err) {
        res.status(505).json(err)
    }
})
router.get("/one-movie/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let movie = await Movie.findById(id);
        res.status(200).json(movie);
    }
    catch (err) {
        res.status(505).json(err)
    }
})
router.post("/add", (req, res) => {
    console.log(req.body);
    const { name, lang, year, videoURL, thumbURL } = req.body;
    let newMovie = new Movie({
        name: name,
        lang: lang,
        year: year,
        videoURL: videoURL,
        thumbURL: thumbURL
    });
    newMovie.save()
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})
module.exports = router;