const{Restaurant} = require('../models');
const categories = ['Italian', 'Fast Food'];
module.exports.viewAll = async function(req, res) {
    const restaurants = await Restaurant.findAll();
    res.render('index', {restaurants});
}


module.exports.renderEditForm = async function(req, res){
    const restaurant = await Restaurant.findByPk(
        req.params.id
    );
    res.render('edit', {restaurant, categories});
}