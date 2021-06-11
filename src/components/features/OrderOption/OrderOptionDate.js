import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({ setOptionValue, currentValue }) => {
    const onChange = (date) => {
        setStartDate(date);
        setOptionValue(date);
    };
    const [startDate, setStartDate] = useState(currentValue || new Date());
    return (
        <DatePicker selected={currentValue || startDate} onChange={date => setOptionValue(date)} />
    );
};


export default OrderOptionDate;