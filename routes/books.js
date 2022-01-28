const express = require('express')

const router = express.Router();

const booksController = require('../controller/books_controller');

router.get('/list', booksController.list );

module.exports = router;

// **********************************************
// const express = require('express')

// const router = express.Router();

// const usersController = require('../controller/users_controller');

// router.get('/profile', usersController.profile);

// module.exports = router;
