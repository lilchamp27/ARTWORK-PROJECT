// connect your admin route to your admin controller
const admin = require("express").Router();
const { adminDeleteArtwork, adminDeleteReview, adminDeleteUser, adminGetAllUsers } = require("../controllers/adminController");
const { isAuth } = require("../middlewares/adminAuth");

admin.get("/all", isAuth, adminGetAllUsers);
admin.delete("/delete/artwork/:id", isAuth, adminDeleteArtwork);
admin.delete("/delete/review/:id", isAuth, adminDeleteReview);
admin.delete("/delete/user/:id", isAuth, adminDeleteUser);
