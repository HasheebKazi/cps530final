const path = require('path');
const express = require('express');


const mainController = require('../controllers/mainController');

const router = express.Router();

// page 1: home page
router.get('/', mainController.getHomePage);

// // page 2: 
// router.get('/2', mainController.getPage2);

// // page 3: 
// router.get('/3', mainController.getPage3);

// // page 4: 
// router.get('/4', mainController.getPage4);

// // page 5: 
// router.get('/5', mainController.getPage5);

// // page 6: 
// router.get('/6', mainController.getPage6);

module.exports = router;
