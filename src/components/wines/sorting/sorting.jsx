import React from 'react';
import PropTypes from 'prop-types';
import styles from './sorting.module.scss';

import SelectInput from '../../common/inputs/select/select-input';

import { sortingOptions } from '../../../config';

const Sorting = ({ onSortingCategoryChange, onSortingOrderChange, sortingCategory, sortingOrder}) => (
    <div className={styles.wrapper}>
        <div className={styles.title}>Sort by:</div>
        <div className={styles.options}>
            <SelectInput className={styles.selectInput}
                options={sortingOptions.category}
                onChange={onSortingCategoryChange}
                placeholder='category'
                name='sortingCategory'
                value={sortingCategory}/>

            <SelectInput className={styles.selectInput}
                options={sortingOptions.order}
                onChange={onSortingOrderChange}
                placeholder='order'
                name='sortingOrder'
                value={sortingOrder}/>
        </div>
    </div>
);

Sorting.propTypes = {
    sortingCategory: PropTypes.string.isRequired,
    sortingOrder: PropTypes.string.isRequired,
    onSortingCategoryChange: PropTypes.func.isRequired,
    onSortingOrderChange: PropTypes.func.isRequired
};

export default Sorting;