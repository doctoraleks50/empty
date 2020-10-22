'use strict';

const Sequelize = require('sequelize');
const Model = Sequelize.Model;

module.exports = function (sequelize, DataTypes) {
    class User extends Model {
        render() {
            return {
                id: this.id,
                username: this.username,
                password: this.password,
                email: this.email,
            };
        }
    }

    User.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'users',
        freezeTableName: true,
        timestamps: false,
    });
    return User;
};
