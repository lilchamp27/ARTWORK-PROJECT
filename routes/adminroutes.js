// connect your admin route to your admin controller
const express = require("express")
const router = express.Router();
const { adminDeleteArtwork, adminDeleteReview, adminDeleteUser, adminGetAllUsers } = require("../controllers/adminController");
// const { isAuth } = require("../middlewares/adminAuth");

router.get("/all", adminGetAllUsers);
router.delete("/delete/artwork/:id", adminDeleteArtwork);
router.delete("/delete/review/:id", adminDeleteReview);
router.delete("/delete/user/:id", adminDeleteUser);

module.exports = router;

