const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuModel = new Schema(
    {
        name : {
            type: String,
            required: true,
            immutable: true
        },
        description : String,
        price : Number
    },
    {   
        timestamps: {
            createdAt: 'created_at', 
            updatedAt: 'updated_at' 
        }
    }
);



module.exports = mongoose.model('menu', menuModel);