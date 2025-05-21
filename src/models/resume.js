const { sequelize } = require("@/lib/db");
const { DataTypes } = require("sequelize");

const UserResume = sequelize.define("UserResume", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },

    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-z\s]+$/,
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
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
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    objective: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    workExperience: {
        type: DataTypes.JSON,
        allowNull: false
    },
    education: {
        type: DataTypes.JSON,
        allowNull: false
    },
    skills: {
        type: DataTypes.JSON,
    },
    hobbies: {
        type: DataTypes.TEXT,
    },
    certifications: {
        type: DataTypes.TEXT,
    },
    projects: {
        type: DataTypes.TEXT,
    },
    volunteerExperience: {
        type: DataTypes.TEXT,
    },
    awards: {
        type: DataTypes.TEXT,
    },
    profileImage: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: true })

export default UserResume