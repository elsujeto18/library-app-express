'use strict'

import express from 'express';
import {getBooks,postBook,deleteBook, updateBook} from '../controllers/BookController.js';

const router = express.Router();

router.route('/')
    .get(getBooks)
    .post(postBook);
    
router.route('/:id')
    .put(updateBook)
    .delete(deleteBook);

export const bookRoutes = router;