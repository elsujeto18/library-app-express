'use strict'
import AuthorModel from '../models/AuthorModel.js';

const getAuthors = async (req, res, next) => {
    try{
        const author = await AuthorModel.find();
        console.log(author);
        res.status(200).json(author);
    }catch(err){
        req.err = err;
        console.log('----------error----------');
        next()
    }
}

const postAuthor = async (req, res, next) => {
    const newAuthor = new AuthorModel(req.body);
    try{
        const author = await newAuthor.save();
        res.status(201).json(author);

    }catch(err){
        req.err = err;
        next()
    }
}

const updateAuthor = async (req, res, next) => {
    try{
        const author = await AuthorModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        if(author){
            res.status(200).json(author);
        }else{
            res.status(404).json({message: 'Author not found'});
        }
    }catch(err){
        req.err = err;
        next()
    }
}

const deleteAuthor = async (req, res, next) => {
    try{
        const author = await AuthorModel.findOneAndDelete({_id: req.params.id});
        if(author){
            res.status(200).json(author);
        }else{
            res.status(404).json({message: 'Author not found'});
        }
    }catch(err){
        req.err = err;
        next()
    }
}

export {getAuthors, postAuthor, updateAuthor, deleteAuthor};



