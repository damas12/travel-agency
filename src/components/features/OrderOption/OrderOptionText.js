import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({ currentValue, setOptionValue }) => (
    <div>
        <input
            value={currentValue}
            onChange={event => setOptionValue(event.currentTarget.value)}
            type="text"
            required />
    </div>
);
OrderOptionText.propTypes = {
    name: PropTypes.string,
    currentValue: PropTypes.string,
    setOptionValue: PropTypes.func,
};
export default OrderOptionText;