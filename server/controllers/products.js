const productRouter = require('express').Router();
const Product = require('../models/product');


//  Get all products
productRouter.get("/", async (request, response) => {
    await Product.find({}).exec((error, products)=> {
        if (error) console.log('Could not get products', error);
        console.log('Products:', products);
        response.status(200).send(products);
    })
});


// Get a product with a specified Id
productRouter.get("/:id", async (request, response) => {
    const { id } = request.params;
    await Product.findById(id).exec((error, product)=> {
        if (error) console.log(`Could not get product with the specified ID: ${id}`, error);
        console.log('Product:', product);
        response.status(200).json({product});
    })
});


module.exports = productRouter;