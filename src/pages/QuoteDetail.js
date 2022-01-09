import { useParams } from 'react-router-dom';
import { Fragment } from 'react';

const QuoteDetail = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
        </Fragment>
    );
};

export default QuoteDetail;
