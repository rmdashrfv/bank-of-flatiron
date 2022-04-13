import React from "react";

function Search({ transactions, setTransactions, allTrans }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => {
          if (!e.target.value) return setTransactions(allTrans);
          let search = transactions.filter((element) => {
            return element.description?.includes(e.target.value)
          })
          if (search.length > 0) setTransactions(search)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
