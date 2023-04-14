'use strict';
import mongoose from 'mongoose';


var BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of the book'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author'
        }]
    },

    genre: {
        type: String,
        required: 'Kindly enter the genre of the book'
    },
    disponibility: {
    
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available'
    }
}, {strict: false});


const model = mongoose.model('Books', BookSchema);

export const schema = model.schema;
export default model;