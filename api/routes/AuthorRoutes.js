'use strict'

import express from 'express';
import {getAuthors, 
    postAuthor, 
    updateAuthor, 
    deleteAuthor} from '../controllers/AuthorController.js';

const router = express.Router();

router.route('/')
    .get(getAuthors)
    .post(postAuthor);

router.route('/:id')
    .put(updateAuthor)
    .delete(deleteAuthor);

export const authorRoutes = router;



