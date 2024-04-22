const Product = require('../Models/ProductModel');

// Créer un produit
const createProduct = async (req, res) => {
    try {
        const { productName, productType, productPrice } = req.body;
        const newProduct = await Product.create({
            productName,
            productType,
            productPrice,
        });
        // await newProduct.save();
        res.status(201).json({message :" Successfully creation product",newProduct});
    } catch (error) {
        res.status(500).json({ error: "Server Error" }, error);
    }
};

// Lire tous les produits oui Récupérer tous les produits
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({message : "All products" , products});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire un produit par ID
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Produit introuvable' });
        }
        res.status(200).json({message : "product find" , product});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un produit par ID
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { productName, productType, productPrice } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { productName, productType, productPrice },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Produit introuvable' });
        }
        res.status(200).json({message : "Successfully update product",updatedProduct});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer un produit par ID
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Produit introuvable' });
        }
        res.status(200).json({ message: 'Produit supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
