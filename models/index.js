// import models
const Product = require('/Product');
const Category = require('/Category');
const Tag = require('/Tag');
const ProductTag = require('/ProductTag');

// list of const variables sorting to foreign keys

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
})

// Products belongToMany Tags (this is related to ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },

})

// Tags belongToMany Products (through connection to ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};