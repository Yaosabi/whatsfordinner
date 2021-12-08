const{Pokemon} = require('../models');
const categories = ['Lightning'];

module.exports.viewAll = async function(req, res) {
    let searchCategories = ['All'];
    for(let i = 0; i<categories.length; i++){
        searchCategories.push(categories[i]);
    }
    let Pokemons;
    let searchCategory = req.query.category || 'All';
    let searchRandom = req.query.random || false; //changed
    if(searchCategory === 'All'){
        restaurants = await Pokemon.findAll();
    } else {
        restaurants = await Pokemon.findAll({
            where: {
                category: searchCategory
            }
        });
    }
    if(Pokemons.length > 0){
        let randomIndex = getRandomInt(Pokemons.length);
        Pokemons = [Pokemons[randomIndex]];
    }
    res.render('index', {Pokemons, categories:searchCategories, searchCategory});
}


module.exports.renderEditForm = async function(req, res){
    const Pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {Pokemon, categories});
}

module.exports.updatePokemon = async function(req,res){
    await Pokemon.update(
        {
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deleteRestaurant = async function(req, res){
    await Restaurant.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.renderAddForm = function(req,res){
    const restaurant = {
        name: "",
        description: "",
        rating: 1,
        image: "",
        category: categories[0],
    };
    res.render('add', {restaurant, categories});
}

module.exports.addRestaurant = async function(req, res){
    await Restaurant.create(
        {
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        });
    res.redirect('/')
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}