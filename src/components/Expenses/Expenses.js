import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [userInput, setUserInput] = useState({
        selectedYear: '2020',
    });

    const filterChangeHandler = selectedYear => {
        setUserInput((previousState) => {
            return { ...previousState, selectedYear: selectedYear };
        });
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === userInput.selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={userInput.selectedYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
