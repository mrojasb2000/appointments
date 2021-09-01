import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';

describe('Appointments', () => {
    it('renders the customer first name', () => {
        const customer = { firtsName: 'Ashley' };
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(component, container);
        expect(document.body.textContent).toMatch('Ashley');
    })
});