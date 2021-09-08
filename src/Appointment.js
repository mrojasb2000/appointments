import React from 'react';

export const Appointment = ({ customer }) => (
    <div>{customer.firstName}</div>
);

const appointmentTimeOfDay = startAt => {
    const [h, m] = new Date(startAt).toTimeString().split(':');
    return `${h}:${m}`;
}

export const AppointmentsDayView = ({ appointments }) => (
<div id="appointmentsDayView">
<ol>
{appointments.map(appointment => (
<li key={appointment.startAt}>
{appointmentTimeOfDay(appointment.startAt)}
</li>
))}
</ol>
</div>
);