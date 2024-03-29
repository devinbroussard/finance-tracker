import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useCallback } from "react";

const App = () => {
  //An array of expense objects
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 4.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = useCallback((expense) => {
    console.log(expense);
  }, []);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/*Expenses component takes in the array of expense items as props using custom attributes*/}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
