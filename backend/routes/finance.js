const express = require('express');
const { Income, Expense } = require('../models');
const router = express.Router();

// Create new income
router.post('/income', async (req, res) => {
    try {
        const income = await Income.create(req.body);
        res.status(201).send(income);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all income
router.get('/income', async (req, res) => {
    try {
        const income = await Income.findAll();
        res.send(income);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create new expense
router.post('/expense', async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        res.status(201).send(expense);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all expenses
router.get('/expense', async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
