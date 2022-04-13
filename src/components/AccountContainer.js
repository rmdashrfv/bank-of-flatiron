import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  const [allTrans, setAllTrans] = useState([])

  const request = async () => {
    let req = await fetch('http://localhost:8001/transactions')
    let res = await req.json()
    setTransactions(res)
    setAllTrans(res)
    // KAGE BUNSHIN NO JUTSU
  }

  useEffect(request, [])

  return (
    <div>
      <Search transactions={transactions} setTransactions={setTransactions} allTrans={allTrans} />
      <AddTransactionForm setTransactions={setTransactions} />
      <TransactionsList transactions={transactions}  />
    </div>
  );
}

export default AccountContainer;
