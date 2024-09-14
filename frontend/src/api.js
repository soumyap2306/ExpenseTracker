// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api',
});

export const fetchIncomes = () => API.get('/incomes');
export const addIncome = (income) => API.post('/incomes', income);

export const fetchExpenses = () => API.get('/expenses');
export const addExpense = (expense) => API.post('/expenses', expense);

export const fetchBudgets = () => API.get('/budgets');
export const addBudget = (budget) => API.post('/budgets', budget);

export const fetchGoals = () => API.get('/goals');
export const addGoal = (goal) => API.post('/goals', goal);
