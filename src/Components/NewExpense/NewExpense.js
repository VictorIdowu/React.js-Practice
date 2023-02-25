import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [formOpen, setFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormOpen(false);
  };

  const formOpenHandler = () => {
    setFormOpen(true);
  };

  const formCloseHandler = () => {
    setFormOpen(false);
  };

  return (
    <div className="new-expense">
      {!formOpen && <button onClick={formOpenHandler}>Add Expense</button>}
      {formOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={formCloseHandler}
        />
      )}
      .
    </div>
  );
}

export default NewExpense;
