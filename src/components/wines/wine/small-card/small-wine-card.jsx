import React from 'react';
import PropTypes from 'prop-types';
import styles from './small-wine-card.module.scss';
import { WineBottle } from '../../../../icons/icons';
import RatingStars from '../../../common/rating-stars/rating-stars';
import { winePropsShape } from '../../../../models/prop-types-shapes';

const SmallWineCard = ({wine, getSelectedWine}) => {
    return (
        <li className={styles.card} onClick={() => getSelectedWine(wine.id)}>
            <div className={styles.cartdImg}>
                <WineBottle />
            </div>
            <div className={styles.cardInfo}>
                <h4 className={styles.name}>{wine.name}</h4>
                <div className={styles.info}>{wine.country} - {wine.year}</div>
                <div className={styles.rating}><RatingStars rating={wine.rating}/></div>
            </div>
        </li>
    );
};

SmallWineCard.propTypes = {
    wine: PropTypes.shape(winePropsShape).isRequired,
    getSelectedWine: PropTypes.func.isRequired,
};

export default SmallWineCard;