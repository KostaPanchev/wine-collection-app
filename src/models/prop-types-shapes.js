import PropTypes from 'prop-types';

export const winePropsShape = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};