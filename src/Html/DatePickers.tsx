import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CurrentDate = new Date();

const DatePickers: React.FC = () => {
    // const [DateStart, setDate] = useState(CurrentDate)

    return (
        <>
            <DatePicker selected={CurrentDate} onChange={(Date)} />
        </>
    );
};

export default DatePicker;
