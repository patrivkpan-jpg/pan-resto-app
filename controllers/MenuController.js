const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
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
        const { name, description, price } = req.body;
        const { filename } = req.file
        const post = await Menu.create({
            name,
            description,
            price,
            image: filename
        });
        res.status(201).json({ message: 'Successfully added new menu item!', result: post.toJSON() });
    } catch (error) {
        console.error('Error adding menu item: ', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
};

exports.editMenuItem = async (req, res) => {
    try {
        const { _id, description, price } = req.body;
        const updateData = {
            description,
            price
        }
        const options = {
            returnDocument: 'after'
        }
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
        const getQuery = Menu.findById(_id);
        const item = await getQuery.exec();
        const image = item.image;
        fs.unlink(path.join(__dirname, `../uploads/images/${image}`), (err) => {
            if (err) {
                console.log(err)
            }
        })
        const query = Menu.deleteOne({
            _id
        })
        res.status(201).json({ message: 'Successfully deleted menu item!', result: await query.exec() });
    } catch (error) {
        console.error('Error editing menu item: ', error);
        res.status(500).json({ message: 'Internal server error.', result: error });
    }
};
