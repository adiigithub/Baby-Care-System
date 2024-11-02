const express=require('express')
const products= require ("../controllers/productsController")
const router=express.Router()

router.get('/products',products.getProduct)
router.post('/products',products.addProducts)
router.get('/product/:id',products.getProductByID)
router.put('/product/:id',products.updateProduct)
router.delete('/product/:id',products.deleteProduct)
module.exports=router