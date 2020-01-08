import React from 'react';
import PropTypes from 'prop-types';
import styles from './errors.module.scss';

const Errors = ({errors, clearErrors}) => {
    const errorsList = errors.map((err, i) => <li key={i} className={styles.errorMsg}>{err}</li>);
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Ups, something went wrong</div>
            <ul className={styles.errorsList}>
                {errorsList}
            </ul>
            <span onClick={clearErrors} className={styles.clearBtn}>clear errors</span>
        </div>
    );
};

Errors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
    clearErrors: PropTypes.func.isRequired
};

export default Errors;