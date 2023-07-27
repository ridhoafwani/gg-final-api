const InvariantError = require('../exceptions/InvariantError');
const NotFoundError = require('../exceptions/NotFoundError');

class ProductService {
    constructor(productModel) {
        this.Product = productModel;
    }

    getProducts = async () => {
        try {
            const products = await this.Product.find();
            return products;
        } catch (err) {
            throw new InvariantError(err);
        }
    };

    getProduct = async (id) => {
        try {
            const result = await this.Product.findById(id);
            if (!result) {
                throw new NotFoundError('Product not found');
            }
            return result;
        } catch (err) {
            throw new NotFoundError('Product not found');
        }
    };

    getProductsByVideoId = async (videoId) => {
        try {
            const result = await this.Product.find({ videoId });
            if (!result) {
                throw new NotFoundError('Product not found');
            }
            return result;
        } catch (err) {
            throw new NotFoundError('Product not found');
        }
    };

    addProduct = async (product) => {
        try {
            const newProduct = new this.Product(product);
            const result = await newProduct.save();
            return result;
        } catch (err) {
            throw new InvariantError(err);
        }
    };

    updateProduct = async (id, product) => {
        try {
            await this.Product.findByIdAndUpdate(id, product);
        } catch (err) {
            throw new NotFoundError('Product not found');
        }
    };

    deleteProduct = async (id) => {
        try {
            await this.Product.findByIdAndDelete(id);
        } catch (err) {
            throw new NotFoundError('Product not found');
        }
    };
}

module.exports = ProductService;
