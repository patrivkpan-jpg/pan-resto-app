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
        if (!queryResult) {
            res.status(400).json({ message: 'Invalid credentials', result: [] });
            return;
        }
        const isPasswordCorrect = bcrypt.compareSync(password, queryResult.password);
        if (!isPasswordCorrect) {
            res.status(400).json({ message: 'Invalid credentials', result: [] });
            return;
        }
        req.session.admin = queryResult;
        req.session.isAuthenticated = true;
        req.session.save()
        res.status(201).json({ message: 'Success', result: queryResult });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
}

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body
        const query = Admin.findOne({ username: username });
        const queryResult = await query.exec();
        if (queryResult) {
            res.status(400).json({ message: 'Username already taken', result: [] });
            return;
        } 
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const post = await Admin.create({
            username,
            password: hashedPassword,
            level: 2
        });
        res.status(201).json({ message: 'Successfully registered!', result: post.toJSON() });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
}