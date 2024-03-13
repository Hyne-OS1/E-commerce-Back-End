// const variable  product to grab data from MODELS PRODUCT
const { Product } = require('../models');


const productData = [
  {
    product_name: 'Plain white tee',
    price: 11.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Nike runners',
    price: 99.0,
    stock: 30,
    category_id: 5,
  },
  {
    product_name: 'Baseball Cap',
    price: 21.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'So Fresh 2006 CD',
    price: 10.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Basketball Shorts',
    price: 39.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;