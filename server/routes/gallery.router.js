const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE
// DELETE Router
router.delete('/:id', (req, res) => {
    const idToDelete = req.params.id;
    const sqlText = `DELETE FROM "gallery" WHERE "id" = $1;`

    pool
        .query(sqlText, [idToDelete])
        .then(result => {
            console.log('Deleted item from database with id:', idToDelete);
            res.sendStatus(200);
        })
        .catch(error => {
            res.sendStatus(500);
            console.log(error);
        })
})

// POST Route
router.post('/', (req, res) => {
    const newGalleryItem = req.body;
    console.log(newGalleryItem);
    const sqlText = `INSERT INTO "gallery" ("path", "description")
    VALUES ($1, $2);`

    pool
        .query(sqlText, [newGalleryItem.path, newGalleryItem.description])
        .then(result => {
            res.sendStatus(201);
            console.log(result);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})

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