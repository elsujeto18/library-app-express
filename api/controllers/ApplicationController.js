'use strict'

import ApplicationModel from "../models/ApplicationModel.js";
import BookModel from "../models/BookModel.js";

const getApplication =  async (req, res, next) => {
    try{
        const application = await ApplicationModel.find().populate('detail');
        res.status(200).json(application);
    }catch(err){
        req.err = err;
        next()
    }
}

const postApplication = async (req, res, next) => {
    const newApplication = new ApplicationModel(req.body);
    try{
        const book = await BookModel.findById(req.body.detail[0]);
        if(book){
            if(book.disponibility == "Unavailable"){
                res.status(400).json({message:"Book is not available"})
            }else{
                const application = await newApplication.save();
                book.disponibility = "Unavailable";
                await book.save();
                res.status(201).json(application);
            }
        }else{
            res.status(400).json({message:"Book not found"})
        }
         
    }catch(err){
        req.err = err;
        console.log(err)
        next()
    }
}

const patchApplication = async (req, res, next) => {
    
    try{
       const application = await ApplicationModel.findByIdAndUpdate({_id: req.params.id}, {status: 'Inactive'}, {new: true});
       //Dudo de si debo colocarle un condicion para saber si existe el libro en la application
       const book = await BookModel.findById(application.detail[0]);
        if(application){
            book.disponibility = "Available";
            await book.save();
            res.status(200).json(application);
        }else{
            res.status(404).json({message: 'Application not found'});
        }
    }catch(err){
        req.err = err;
        next()
    }
}

export {getApplication, postApplication, patchApplication}