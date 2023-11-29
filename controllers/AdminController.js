const mongoose = require('mongoose');
const Admin = mongoose.model('admin');
const bcrypt = require('bcrypt')

exports.getLoginUser = async (req, res) => {
    try {
        if (req.session.isAuthenticated) {
            res.status(201).json({ message: 'Success', result: req.session.admin });
        } else {
            res.status(400).json({ message: 'Not logged in.', result: [] });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const query = Admin.findOne({ username: username });
        const queryResult = await query.exec();
        const isPasswordCorrect = bcrypt.compareSync(password, queryResult.password);
        if (queryResult && isPasswordCorrect) {
            req.session.admin = queryResult;
            req.session.isAuthenticated = true;
            req.session.save()
            res.status(201).json({ message: 'Success', result: queryResult });
        } else {
            res.status(400).json({ message: 'Invalid credentials', result: [] });
        }
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
}