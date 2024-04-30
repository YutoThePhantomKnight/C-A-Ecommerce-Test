const express = require('express');

const ProductsRouter = require('./product.router');

function RouterApi(app) {
    const router = express.Router();
    app.use('/', router);
    router.use('/products', ProductsRouter);

}

module.exports = RouterApi;