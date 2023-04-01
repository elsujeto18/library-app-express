'use strict';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

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
            ref: 'Authors'
        }]
    },

    genre: {
        type: String,
        required: 'Kindly enter the genre of the book'
    },
    disponibility: {
        type: [{
            type: String,
            enum: ['Available', 'Unavailable']
        }],
        default: ['Available']
    }
});


const model = mongoose.model('Books', BookSchema);

export const schema = model.schema;
export default model;