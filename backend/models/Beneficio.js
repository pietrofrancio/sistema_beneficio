const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Beneficio = db.define('beneficio',{
    codBeneficio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    salario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    horas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    beneficioColab: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Beneficio