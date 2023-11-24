const mongoose = require('mongoose');
const Menu = mongoose.model('menu');

exports.getMenu = async (req, res) => {
    try {
        const query = Menu.find();
        res.status(201).json({ message: 'Successfully retrieved menu!', result: await query.exec() });
    } catch (error) {
        console.error('Error getting menu.', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
}

exports.addMenuItem = async (req, res) => {
    try {
        console.log(req)
        const { name, description, price } = req.body;
        const post = await Menu.create({
            name,
            description,
            price
        });
        res.status(201).json({ message: 'Successfully added new menu item!', result: post.toJSON() });
    } catch (error) {
        console.error('Error adding menu item: ', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
};

exports.editMenuItem = async (req, res) => {
    try {
        console.log(req.body)
        const { _id, description, price } = req.body;
        const updateData = {
            description,
            price
        }
        const options = {
            returnDocument: 'after'
        }
        console.log(_id, updateData)
        const query = Menu.findByIdAndUpdate(_id, updateData, options);
        res.status(201).json({ message: 'Successfully edited menu item!', result: await query.exec() });
    } catch (error) {
        console.error('Error editing menu item: ', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
};

exports.deleteMenuItem = async (req, res) => {
    try {
        const { _id } = req.params;
        const query = Menu.deleteOne({
            _id
        })
        res.status(201).json({ message: 'Successfully deleted menu item!', result: await query.exec() });
    } catch (error) {
        console.error('Error editing menu item: ', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
};
