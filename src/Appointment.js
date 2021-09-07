import React from 'react';

export const Appointment = ({ customer }) => (
    <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => (
<div id="appointmentsDayView">
<ol>
{appointments.map((item, idx) => (
<div key={idx}/>
))}
</ol>
</div>
);