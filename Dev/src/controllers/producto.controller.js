const ProductService = require('../services/products.service');
const service = new ProductService();

const All = async (req, resp) =>{
    try{

        const response = await service.find();
        resp.json(response);
    } catch (error){
        resp.status(500).send({success: false, message: error.message});
    }
}



module.exports = {All}