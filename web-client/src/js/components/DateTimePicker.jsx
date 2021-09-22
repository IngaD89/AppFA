import React from 'react';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import moment from "moment-timezone";

export default function dateTimePicker(){



    return (
        <div>
            <DateTimePickerComponent
                placeholder="escoge una fecha y hora"

            >

            </DateTimePickerComponent>
        </div>
    )
}