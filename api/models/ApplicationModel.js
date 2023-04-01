//model for applications
'use strict';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

var ApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the application'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    detail : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ApplicationDetails'
    },
    date_return: {
        type: Date,
        required: 'Kindly enter the date of return of the application'
    },
    user: {
        type: String
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: ['Active']
    }
});

const model = mongoose.model('Applications', ApplicationSchema);

export const schema = model.schema;
export default model;


    