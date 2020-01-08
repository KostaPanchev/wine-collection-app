import React from 'react';
import PropTypes from 'prop-types';
import styles from './filtering.module.scss';
import SelectInput from '../../common/inputs/select/select-input';

import { filtersOptions } from '../../../config';

const Filtering = ({onChangeFilter, appliedFilters}) => {
    const filtersList = Object.keys(filtersOptions).map(key => 
        <SelectInput key={key}
            className={styles.filter}
            onChange={onChangeFilter}
            value={appliedFilters[key]}
            label={key}
            options={filtersOptions[key]}
            name={key}/>
    );
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>Filter</div>
            <div className={styles.options}>
                {filtersList}
            </div>
        </div>
    );
};

Filtering.propTypes = {
    appliedFilters: PropTypes.object.isRequired,
    onChangeFilter: PropTypes.func.isRequired
};

export default Filtering;