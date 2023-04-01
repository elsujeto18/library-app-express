// model for an application detail

'use strict';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

var ApplicationDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the application detail'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applications'
    },
    description: {
        type: String,
        required: 'Kindly enter the description of the application detail'
    },
    books: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Books'
        }]
    },

});

const model = mongoose.model('ApplicationDetails', ApplicationDetailSchema);

export const schema = model.schema;
export default model;

