'use strict'

import express from 'express';
import {getBooks} from '../controllers/BookController.js';

const router = express.Router();

router.route('/')
    .get(getBooks);
    

export const bookRoutes = router;