import React from 'react';
import { shallow } from 'enzyme';

import TimeTillSummer from './TimeTillSummer';

const select = {
    title: '.title',
};

describe('Component TimeTillSummer', () => {
    it('should render without crashing', () => {
        const component = shallow(<TimeTillSummer />);
        expect(component).toBeTruthy();
    });
});

const trueDate = Date;
const mockDate = customDate =>
    class extends Date {
        constructor(...args) {
            if (args.length) {
                super(...args);
            } else {
                super(customDate);
            }
            return this;
        }
        static now() {
            return new Date(customDate).getTime();
        }
    };

const checkDescriptionAtDate = (day, expectedDescription) => {
    it(`should show correct ${day}`, () => {
        global.Date = mockDate(`${day}T00:00:00.000Z`);

        const component = shallow(<TimeTillSummer />);
        console.log(component.debug());

        if (expectedDescription) {
            const renderedDescription = component.find(select.title).text();
            expect(renderedDescription).toEqual(expectedDescription);
        } else {
            expect(component.text()).toBe('');
        }

        global.Date = trueDate;
    });
};

describe('Component DaysToSummer with mocked Date', () => {
    checkDescriptionAtDate('2021-06-20', 'DAY');
    checkDescriptionAtDate('2021-06-19', '2 DAYS');
    checkDescriptionAtDate('2021-03-01', '112 DAYS');

    checkDescriptionAtDate('2021-06-21', null);
    checkDescriptionAtDate('2021-07-03', null);
    checkDescriptionAtDate('2021-09-23', null);
});