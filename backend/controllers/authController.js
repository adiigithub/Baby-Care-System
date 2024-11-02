const User = require('../models/auth');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user with the matching email and password
        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).send({ success: true, message: 'Login successful' });
        } else {
            res.status(401).send({ success: false, message: 'You are not authorized person' });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: 'Server error', error });
    }
};

module.exports = login;  // Ensure the function is properly exported
