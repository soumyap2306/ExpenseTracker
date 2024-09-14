import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Fab,
} from '@mui/material';
import { Menu as MenuIcon, Add as AddIcon } from '@mui/icons-material';
import { fetchIncomes, fetchExpenses, addIncome, addExpense } from './api';

const App = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [openIncomeDialog, setOpenIncomeDialog] = useState(false);
  const [openExpenseDialog, setOpenExpenseDialog] = useState(false);
  const [newIncome, setNewIncome] = useState({ amount: '', source: '', date: '' });
  const [newExpense, setNewExpense] = useState({ amount: '', category: '', date: '' });

  useEffect(() => {
    const fetchData = async () => {
      const incomesResponse = await fetchIncomes();
      const expensesResponse = await fetchExpenses();
      setIncomes(incomesResponse.data);
      setExpenses(expensesResponse.data);
    };

    fetchData();
  }, []);

  const handleOpenIncomeDialog = () => {
    setOpenIncomeDialog(true);
  };

  const handleCloseIncomeDialog = () => {
    setOpenIncomeDialog(false);
  };

  const handleAddIncome = async () => {
    await addIncome(newIncome);
    setIncomes([...incomes, newIncome]);
    setNewIncome({ amount: '', source: '', date: '' });
    setOpenIncomeDialog(false);
  };

  const handleOpenExpenseDialog = () => {
    setOpenExpenseDialog(true);
  };

  const handleCloseExpenseDialog = () => {
    setOpenExpenseDialog(false);
  };

  const handleAddExpense = async () => {
    await addExpense(newExpense);
    setExpenses([...expenses, newExpense]);
    setNewExpense({ amount: '', category: '', date: '' });
    setOpenExpenseDialog(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Expenses Tracker</Typography>
          <Fab color="secondary" aria-label="add" onClick={handleOpenIncomeDialog} style={{ marginLeft: 'auto', marginRight: 16 }}>
            <AddIcon />
          </Fab>
          <Fab color="primary" aria-label="add" onClick={handleOpenExpenseDialog}>
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Incomes
        </Typography>
        <Grid container spacing={3}>
          {incomes.map((income, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {income.source}: ${income.amount}
                  </Typography>
                  <Typography color="text.secondary">
                    {new Date(income.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" component="h1" gutterBottom style={{ marginTop: '2rem' }}>
          Expenses
        </Typography>
        <Grid container spacing={3}>
          {expenses.map((expense, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {expense.category}: ${expense.amount}
                  </Typography>
                  <Typography color="text.secondary">
                    {new Date(expense.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Dialog open={openIncomeDialog} onClose={handleCloseIncomeDialog}>
        <DialogTitle>Add New Income</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out the form below to add a new income.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Source"
            type="text"
            fullWidth
            variant="standard"
            value={newIncome.source}
            onChange={(e) => setNewIncome({ ...newIncome, source: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            value={newIncome.amount}
            onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })}
          />
          <TextField
            margin="dense"
            type="date"
            fullWidth
            variant="standard"
            value={newIncome.date}
            onChange={(e) => setNewIncome({ ...newIncome, date: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseIncomeDialog}>Cancel</Button>
          <Button onClick={handleAddIncome}>Add</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openExpenseDialog} onClose={handleCloseExpenseDialog}>
        <DialogTitle>Add New Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out the form below to add a new expense.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          />
          <TextField
            margin="dense"
            type="date"
            fullWidth
            variant="standard"
            value={newExpense.date}
            onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseExpenseDialog}>Cancel</Button>
          <Button onClick={handleAddExpense}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;