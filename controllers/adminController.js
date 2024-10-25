const user = require('../models/User');
const artwork = require('../models/Artwork');
const review = require('../models/Review');


//code to make admin get all users' accounts
exports.adminGetAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// code to make admin delete a user's account
exports.adminDeleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await user.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user's account
    await user.deleteOne();
    res.json({ message: 'User account deleted successfully' });
    console.log('User account deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// code to make admin delete an artwork
exports.adminDeleteArtwork = async (req, res) => {
  try {
    const artworkId = req.params.artworkId;
    const artwork = await artwork.findById(artworkId);

    if (!artwork) {
      return res.status(404).json({ error: 'Artwork not found' });
    }

    // Delete the artwork
    await artwork.deleteOne();
    res.json({ message: 'Artwork deleted successfully' });
    console.log('Artwork deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// code to make admin delete a review
exports.adminDeleteReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const review = await review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Delete the review
    await review.deleteOne();
    res.json({ message: 'Review deleted successfully' });
    console.log('Review deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = exports;