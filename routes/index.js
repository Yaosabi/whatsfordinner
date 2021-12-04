var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restaurantController')

/* GET home page. */
router.get('/', restaurantController.viewAll);
router.get('/edit/:id', restaurantController.renderEditForm);

module.exports = router;
