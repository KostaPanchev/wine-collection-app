import React from 'react';
import PropTypes from 'prop-types';
import { winePropsShape } from '../../../../models/prop-types-shapes';
import styles from './big-wine-card.module.scss';
import { WineBottle, EditIcon, DeleteIcon } from '../../../../icons/icons';
import RatingStars from '../../../common/rating-stars/rating-stars';
import Loader from '../../../common/loader/loader';

const BigWineCard = ({wine, editModeOn, fetchingWines, onDelete}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cartdImg}>
                <WineBottle />
            </div>
            <div className={styles.cardInfo}>
                <h4 className={styles.name}>{wine.name}</h4>
                <div className={styles.info}>{wine.country} - {wine.year}</div>
                <RatingStars rating={wine.rating}/>
                <p className={styles.description}>{wine.description}</p>
                <div className={styles.loader}>
                    {fetchingWines && <Loader size='30px' border='4px' width='70px' />}
                </div>
            </div>
            <div className={styles.cardControls}>
                <span className={styles.editBtn} onClick={editModeOn}><EditIcon /></span>
                <span className={styles.deleteBtn} onClick={() => onDelete(wine.id)}><DeleteIcon /></span>
            </div>
        </div>
    );
};

BigWineCard.propTypes = {
    wine: PropTypes.shape(winePropsShape).isRequired,
    editModeOn: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default BigWineCard;