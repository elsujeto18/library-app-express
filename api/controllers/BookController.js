'use strict'
import BookModel from '../models/BookModel.js';

const getBooks = async (req, res, next) => {
    try{
        const book = await BookModel.find().populate('author');
        console.log(book);
        res.status(200).json(book);
    }catch(err){
        req.err = err;
        console.log('----------error----------');
        next()
    }
}

const postBook = async (req, res, next) => {
    const newBook = new BookModel(req.body);
    try{
        const book = await newBook.save();
        res.status(201).json(book);
    
    }catch(err){
        req.err = err;
        next()
    }
}

const updateBook = async (req, res, next) => {
    
    try{
        const book = await BookModel.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        if(book){
            res.status(200).json(book);
        }else{
            res.status(404).json({message: 'Book not found'});
        }
    }catch(err){
        req.err = err;
        next()

    }
}

const deleteBook = async (req, res, next) => {
    try{
        const book = await BookModel.findOneAndDelete({_id: req.params.id});
        if(book){
            res.status(200).json(book);
        }else{
            res.status(404).json({message: 'Book not found'});
        }
    }catch(err){
        req.err = err;
        next()
    }
}

export {getBooks, postBook, updateBook, deleteBook};
