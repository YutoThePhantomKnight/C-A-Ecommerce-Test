const {Model, DataTypes} = require('sequelize');

const Product_Table = 'Products';

class Product extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName : Product_Table,
            modelName: 'Product',
            timestamps: true
        }
    }
}

const ProductSchema ={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING,
        field: "ProductName"
    },
    cost:{
        allowNull: false,
        type: DataTypes.DECIMAL(20, 2),
        field: "ProductCost"
    },
    colors:{
        allowNull: false,
        type: DataTypes.STRING,
        field: "ProductColors"
    }
}

module.exports = {Product, ProductSchema}