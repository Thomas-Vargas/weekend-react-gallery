const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`

    pool
        .query(sqlText, [galleryId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error)
            res.sendStatus(500)
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "gallery" ORDER BY "id";`;

    pool
        .query(sqlText)
        .then(result  => {
            res.send(result.rows)
            console.log('success getting gallery')
        })
        .catch(error => {
            console.log(error)
            res.sendStatus(500)
        })
}); // END GET Route

module.exports = router;