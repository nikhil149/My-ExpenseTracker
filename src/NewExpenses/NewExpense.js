import Form from "./Form"
import './NewExpense.css'
const NewExpense=(props)=>{
    const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpense(expenseData)
    }
    return(
        <div className='new-expense'>
            <Form onSaveExpense={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense