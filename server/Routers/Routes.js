const router = require('express').Router();
const Auth = require("../Controllers/Auth")
const productController = require('../Controllers/ProductController');



//Authentication with JWT
router.post("/signup", Auth.signUP) ;
router.post("/signin", Auth.signIn);

// Products routes 

// Route pour créer un produit
router.post('/new-product', productController.createProduct);
// Route pour lire tous les produits
router.get('/all-products', productController.getAllProducts);
// Route pour lire un produit par ID
router.get('/show-product/:id', productController.getProductById);
// Route pour mettre à jour un produit par ID
router.put('/update-product/:id', productController.updateProduct);
// Route pour supprimer un produit par ID
router.delete('/delete-product/:id', productController.deleteProduct);

module.exports = router;
