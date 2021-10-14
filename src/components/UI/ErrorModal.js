import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClick} />;
}

const Overlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={`${styles.content} ${props.className}`}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = props => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
        </Fragment>
    );
};

export default ErrorModal;
