import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

const ExpenseList = (props) => {
    const [userInput, setUserInput] = useState({
        selectedYear: '2020',
    });

    const filterChangeHandler = selectedYear => {
        setUserInput((previousState) => {
            return { ...previousState, selectedYear: selectedYear };
        });
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={userInput.selectedYear} onFilterChange={filterChangeHandler} />
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                />
            </Card>
        </div>
    );
};

export default ExpenseList;
