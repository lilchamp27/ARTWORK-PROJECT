// middleware to authenticate if you're an admin
exports.isAuth = (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Unauthorized' })
        }
        next();
    } catch (error) {
        req.status(500).json({ error: 'Server error' });
    }
};