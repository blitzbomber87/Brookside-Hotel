const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const bcrypt = require('bcrypt');

class Guest extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Guest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newGuestData) => {
                newGuestData.password = await bcrypt.hash(newGuestData.password, 10);
                return newGuestData;
            },
            beforeUpdate: async (updatedGuestData) => {
                updatedGuestData.password = await bcrypt.hash(updatedGuestData.password, 10);
                return updatedGuestData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'guest'
    }
);

module.exports = Guest;