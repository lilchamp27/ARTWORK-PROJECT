const Transaction = require('../models/Transaction');
const User = require ('../models/Transaction');


// Get buyer's Transaction history
exports.getBuyerTransactions = async (req, res) => {

    try {
      userId = req.user._id; // Assuming user is authenticated and ID is stored in req.user
      const transactions = await Transactions({buyer: userId})
      .populate('seller', 'name email') // populate seller's details (name, email)
      .select('item price transaction Date');// select only the required field

      if (!transactions || transactions.lenght === 0) {
        return res.status(404).json({ message: 'No transaction found.' })
      }

      return res.status(200).json({ transactions });
    } catch (err) {
      console.error(err);
      return res.status(500).json({message: 'Sever error.'})
    }
};

// get seller trasaction history
exports.getSellerTransactions = async (req, res) => {

  try {
    userId = req.user._id; // Assuming user is authenticated and ID is stored in req.user
    const transactions = await Transactions({seller: userId})
    .populate('buyer', 'name email') // populate buyer's details (name, email)
    .select('item price transaction Date');// select only the required field

    if (!transactions || transactions.lenght === 0) {
      return res.status(404).json({ message: 'No transaction found.' })
    }

    return res.status(200).json({ transactions });
  } catch (err) {
    console.error(err);
    return res.status(500).json({message: 'Sever error.'})
  }
};