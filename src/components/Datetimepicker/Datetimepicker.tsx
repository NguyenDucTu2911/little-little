import React from 'react';

import { DatePicker } from 'antd';

import moment from 'moment';


interface DatetimepickerProps {
    format: string;
    onChange?: (date: moment.Moment | null, dateString: string) => void;
}

const Datetimepicker: React.FC<DatetimepickerProps> = (props) => {
    const handleChange = (date: moment.Moment | null, dateString: string) => {

    }
    return (
        <>
            <DatePicker
                format={props.format}
            // onChange={handleChange}
            />
        </>
    );
};

export default Datetimepicker;
