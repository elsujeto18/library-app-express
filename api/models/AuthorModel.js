'use strict';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the author'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    birthdate: {
        type: Date,
        required: 'Kindly enter the birthdate of the author'
    },
    nacionality: {
        type: String,
        required: 'Kindly enter the nacionality of the author'
    },
    
}, {strict: false});
const model = mongoose.model('Authors', AuthorSchema);

export const schema = model.schema;
export default model;