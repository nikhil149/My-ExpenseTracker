import { useState } from "react";
import "./Form.css";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [myDate, setMydate] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setMydate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: myDate,
    };

    props.onSaveExpense(expenseData)
    setTitle("");
    setAmount("");
    setMydate("");
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={titleHandler}></input>
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={amount} onChange={amountHandler}></input>
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={myDate} onChange={dateHandler}></input>
      </div>
      <div className="form-action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default Form;
