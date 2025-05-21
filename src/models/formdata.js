const { sequelize } = require("@/lib/db");
const { DataTypes } = require("sequelize");

const FormData = sequelize.define("FormData", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-z\s]+$/,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true,
        },
    },
    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: true })

export default FormData