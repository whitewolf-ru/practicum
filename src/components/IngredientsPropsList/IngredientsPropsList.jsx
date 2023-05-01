import PropTypes from 'prop-types';

const IngredientsPropsList =
          PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            proteins: PropTypes.number,
            fat: PropTypes.number,
            carbohydrates: PropTypes.number,
            calories: PropTypes.number,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            image_mobile: PropTypes.string.isRequired,
            image_large: PropTypes.string.isRequired,
            __v: PropTypes.number
         })).isRequired;

export default IngredientsPropsList;
