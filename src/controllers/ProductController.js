const InvariantError = require('../exceptions/InvariantError');
const { validatePatchProduct, validatePostProduct } = require('../validator/productValidator');

class ProductController {
    constructor(productService) {
        this.service = productService;
    }

    getProducts = async (req, res, next) => {
        try {
            const products = await this.service.getProducts();
            res.json(products);
        } catch (err) {
            next(err);
        }
    };

    getProduct = async (req, res, next) => {
        try {
            const product = await this.service.getProduct(req.params.id);
            res.json(product);
        } catch (err) {
            next(err);
        }
    };

    getProductsByVideoId = async (req, res, next) => {
        try {
            const product = await this.service.getProductsByVideoId(req.params.videoId);
            res.json(product);
        } catch (err) {
            next(err);
        }
    };

    postProduct = async (req, res, next) => {
        try {
            const { error } = validatePostProduct(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            const newProduct = await this.service.addProduct({
                ...req.body, videoId: req.params.videoId,
            });
            res.status(201).json({
                message: 'Product added',
                data: newProduct,
            });
        } catch (err) {
            next(err);
        }
    };

    patchProduct = async (req, res, next) => {
        try {
            const { error } = validatePatchProduct(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            await this.service.updateProduct(req.params.id, req.body);
            res.json({
                message: 'Product updated',
            });
        } catch (err) {
            next(err);
        }
    };

    deleteProduct = async (req, res, next) => {
        try {
            await this.service.deleteProduct(req.params.id);
            res.json({
                message: 'Product deleted',
            });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ProductController;
