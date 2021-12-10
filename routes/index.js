var express = require('express');
var router = express.Router();
const pcardController = require('../controllers/pcardController')

/* GET home page. */

router.get('/', pcardController.viewAll);
router.get('/edit/:id', pcardController.updatePokemon);
router.get('/delete/:id', pcardController.deletePokemon);
router.get('/add', pcardController.renderAddForm);
router.post('/add', pcardController.addPokemon);
module.exports = router;
