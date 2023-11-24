const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminModel = new Schema(
    {
        username : {
            type: String,
            required: true,
            immutable: true
        },
        password : {
            type: String,
            required: true,
        },
        level : {
            type: Number,
            required: true
        }
    }
);



module.exports = mongoose.model('admin', adminModel);