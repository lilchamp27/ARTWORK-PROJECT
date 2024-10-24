// connect your admin route to your admin controller
const admin = require("express").Router();
const { create, getAll, update, remove } = require("../controllers/admin");
const { isAuth } = require("../middlewares/auth");

