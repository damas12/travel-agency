import { Row, Col } from 'react-flexbox-grid';
import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripDetails) => {
    const totalCost = formatPrice(calculateTotal(tripCost, options));

    const payload = {
        ...options,
        totalCost,
        ...tripDetails,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
        cache: 'no-cache',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
        .then(function (response) {
            return response.json();
        }).then(function (parsedResponse) {
            console.log('parsedResponse', parsedResponse);
        });
};

const OrderForm = (props) => {
    const { tripCost, options, setOrderOption } = props;
    return (
        <Row>
            {pricing.map(option => (
                <Col md={4} key={option.id}>
                    <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
                </Col>
            ))}
            <Col xs={12}>
                <OrderSummary tripCost={tripCost} options={options} />
                <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripDetails)}>Order now!</Button>
            </Col>
        </Row>
    );
};
OrderForm.propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
};

export default OrderForm;