'use strict'

import express from 'express';

import {getApplication, postApplication,patchApplication} from '../controllers/ApplicationController.js';	


const router = express.Router();

router.route('/')
    .get(getApplication)
    .post(postApplication);

router.route('/:id')
    .patch(patchApplication);


export const applicationRoutes = router;