import { useState } from 'react'
import './App.css'

function App() {

  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    if (name && amount) {
      setExpenses([...expenses, { name, amount: Number(amount) }]);
      setName('');
      setAmount('');
    }
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <form onSubmit={addExpense} >
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense name"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button type="submit">Add</button>
      </form>
      <div className="expenses" >
        {expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            {expense.name} - ${expense.amount}
            <button onClick={() => deleteExpense(index)}>Delete</button>
          </div>
        ))}
      </div>
      <p>Total: ${total}</p>
    </div>
  )
}

export default App
