const adminRouter = require('express').Router();
const User = require('../models/user');
const Product = require('../models/product');

// Get all users
adminRouter.get('/users', async (request, response) => {
    User.find().exec((error, users)=> {
        if (error) console.log('Could not fetch users', error);
        response.status(200).send(users);
    })
})

// Add a product
adminRouter.post("/products", async (request, response) => {
    const { name, description, price, category, image} = request.body;
    console.log("Request Body: ", request.body)
    let product = new Product({
        name,
        description,
        image,
        price,
        category
    });
    console.log("Products: ", product);
    await product.save();
    response.status(200).json({product: product})
});

//
adminRouter.put("/product/:id", async (request, response) => {
    const { id} = request.params;
    Product.findById(id).exec((error, product)=> {
        const { name, description, price, category} = request.body;
        if (error) console.log(`Could not get product of ID:${id}`, error);
        product.name = name;
        product.description = description;
        product.price = price;
        product.category = category;
        product.save();
        response.state(200).json({product})
    })
})

adminRouter.delete("/product/:id", async (request, response) => {
    const { id } = request.params;
    await Product.deleteOne({_id: id}).exec((error, product)=> {
        if (error) console.log(`Product of ID:${id} does not exist`);
        response.status(200).json({product});
    })
});


module.exports = adminRouter;