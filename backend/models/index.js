const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Income = sequelize.define('Income', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

const Expense = sequelize.define('Expense', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});

module.exports = { Income, Expense };
