'use strict';

const express = require('express');
const userRouter = express.Router();
const controllers = require('../../../controllers');

const UsersController = controllers.api.v1.UsersController;

userRouter.get('/:id', UsersController.getById.bind(UsersController));
userRouter.get('/', UsersController.create.bind(UsersController));

module.exports = userRouter;
