import React from 'react';
import PropTypes from 'prop-types';
import { StarFilledIcon } from '../../../icons/icons';
import styles from './rating-stars.module.scss';

const RatingStars = ({rating}) => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
        if(parseInt(rating, 10) >= index + 1){
            stars.push(<StarFilledIcon key={index+1} className={styles.filledStar}/>);
        } else {
            stars.push(<StarFilledIcon key={index+1} className={styles.emptyStar}/>);
        }
    }
    return <div className={styles.stars}>{stars.reverse()}</div>;
};

RatingStars.propTypes = {
    rating: PropTypes.string.isRequired
};

export default RatingStars;