const {models} = require('../lib/sequelize');

class ProductService{
    constructor() {}

    async find(){
        const res = await models.Product.findAll();
        return res;
    }


}

module.exports = ProductService;