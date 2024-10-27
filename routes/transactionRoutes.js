const express = require('require'); // import express
const router = express.router(); // create express route instance
const transactionController = require ('../controller/transactionController');
const { project } = require ('../middleware/userauthMiddleware'); // Middleware to protect routes


// Route for buyers to get their transaction history
router.get('buyer', transactionController.getBuyerTransactions);
router.get('seller', transactionController.getSellerTransactions);


module.exports = router