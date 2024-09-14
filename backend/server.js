const express = require('express');
const cors = require('cors');
const financeRoutes = require('./routes/finance');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', financeRoutes);
// Sample data for incomes and expenses (replace with actual database queries)
const incomes = [
    { id: 1, amount: 1000, source: 'Salary', date: '2023-01-01' },
    { id: 2, amount: 200, source: 'Freelance', date: '2023-01-10' }
  ];
  
  const expenses = [
    { id: 1, amount: 500, category: 'Rent', date: '2023-01-05' },
    { id: 2, amount: 100, category: 'Groceries', date: '2023-01-12' }
  ];
  
  // Define routes
  app.get('/api/incomes', (req, res) => {
    res.json(incomes);
  });
  
  app.get('/api/expenses', (req, res) => {
    res.json(expenses);
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
