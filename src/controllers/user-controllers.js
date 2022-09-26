const userController = {}
const User = require('../models/user-model');
const path = require('path')

userController.register = (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    user.save(err => {
        if (err) {
            res.status(500).send('ERROR WHEN REGISTERING THE USER');
        } else {
            res.sendFile(path.join(__dirname, '../public', 'signup.html'));
        }
    });
}

userController.authenticate = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).send('ERROR WHEN AUTHENTICATING THE USER');
        } else if (!user) {
            res.status(500).send('THE USER DOES NOT EXIST');
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                    res.status(500).send('ERROR WHEN AUTHENTICATING');
                } else if (result) {
                    res.sendFile('vote.html', { root: 'public' });
                } else {
                    res.status(500).send('INCORRECT USERNAME OR PASSWORD');
                }
            });
        }
    });
}

module.exports = userController;