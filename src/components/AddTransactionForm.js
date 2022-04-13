import React, { useState } from "react";

function AddTransactionForm({ setTransactions }) {
  const [form, setForm] = useState({date: '', description: '', category: '', amount: 0})

  const updateForm = (e) => {
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={async (e) => {
        e.preventDefault()
        let req = await fetch('http://localhost:8001/transactions', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
        setTransactions((prevState) => {return [...prevState, res]})
      }}>
        <div className="inline fields">
          <input type="date" name="date" value={form.date} onChange={(e)=> { updateForm(e) }} />
          <input type="text" name="description" placeholder="Description" value={form.description} onChange={e => updateForm(e)} />
          <input type="text" name="category" placeholder="Category" value={form.category} onChange={(e) => { setForm({ ...form, category: e.target.value }) }} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={form.amount} onChange={(e) => { setForm({ ...form, amount: e.target.value }) }} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
