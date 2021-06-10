import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
};

export default OrderOptionDate;