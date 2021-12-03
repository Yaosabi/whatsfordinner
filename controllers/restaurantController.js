const{Restaurant} = require('../models');
module.exports.viewAll = async function(req, res, next) {
    const restaurants = await Restaurant.findAll();
    res.render('index', {restaurants});
}