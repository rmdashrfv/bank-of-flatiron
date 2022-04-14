import React from "react";

function Transaction(props, {setTransactions}) {
  const { id, date, description, category, amount } = props;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={async (e) => {
          let req = await fetch(`http://localhost:8001/transactions/${id}`, {
            method: 'DELETE'
          })
          if (req.ok) {
            setTransactions((prevState) => {
              let arr = prevState.filter((element) => {
                return element.id !== id
              })
              return arr
            })
          }
        }}>DELETE</button>
      </td>
    </tr>
  );
}

export default Transaction;
