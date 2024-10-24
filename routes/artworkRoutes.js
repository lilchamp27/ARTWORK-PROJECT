const express = require('express');
router = express.Router();
const { createArtwork, getAllArtworks, updateArtwork,getArtworkById, searchArtworks, deleteArtwork } = require('../controllers/artworkController');

router.post('/create', createArtwork); 
router.get('/getSingle/:id', getArtworkById);
router.patch('/update/:id', updateArtwork);   
router.get('/getAll', getAllArtworks);
router.get('/search', searchArtworks);
router.delete('/delete/:id', deleteArtwork);

module.exports = router;