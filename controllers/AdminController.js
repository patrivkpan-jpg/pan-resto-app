const mongoose = require('mongoose');
const Admin = mongoose.model('admin');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const query = Admin.findOne({ username: username });
        const queryResult = await query.exec();
        console.log(queryResult)
        // if (!queryResult) {
        //     console.log('Invalid creds')
        //     res.status(400).json('Invalid credentials')
        //     return
        // }
        if (queryResult && queryResult.password === password) {
            res.status(201).json({ message: 'Success', result: queryResult });
        } else {
            res.status(400).json({ message: 'Invalid credentials', result: [] });
        }
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
}