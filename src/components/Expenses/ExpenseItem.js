import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
    const expensedate = props.date
    let expenseTitle = props.title
    const expenseAmount = props.amount


  return (
    <Card className="expense-item">
      <ExpenseDate date={expensedate}/>
      <div className="expense-item__description">
        <h1>{expenseTitle}</h1>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
