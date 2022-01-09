import QuoteList from '../components/quotes/QuoteList';
import { Fragment } from 'react';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', author: 'Necro', text: 'Learning React is Crap!' },
];

const AllQuotes = () => {
    return (
        <Fragment>
            <h1>All Quotes Page</h1>
            <QuoteList quotes={DUMMY_QUOTES}/>
        </Fragment>
    );
};

export default AllQuotes;
