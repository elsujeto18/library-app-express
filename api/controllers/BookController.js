'use strict'
import BookModel from '../models/BookModel.js';

const getBooks = async (req, res, next) => {
    try{
        const book = await BookModel.find();
        console.log(book);
        res.status(200).json(book);
    }catch(err){
        req.err = err;
        console.log('----------error----------');
        next()
    }
}

export {getBooks};