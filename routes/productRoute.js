const express = require('express')
const router = express.Router()


const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')


//get method

router.get('/', getProducts)

router.get('/:id', getProduct)

//Post method

router.post('/', createProduct)

// update a product

router.put('/:id', updateProduct)


// delete a product

router.delete('/:id', deleteProduct)

module.exports = router
