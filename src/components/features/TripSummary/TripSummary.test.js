import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
    it('should throw error without required props', () => {
        expect(() => shallow(<TripSummary />)).toThrow();
    });

    const expectedImage = 'image.jpg';
    const expectedName = 'test';
    const expectedCost = '$50';
    const expectedDays = 15;
    let expectedTags = ['one', 'two', 'three'];
    const tripId = 'abc';
    const component = shallow(<TripSummary
        id={tripId}
        image={expectedImage}
        name={expectedName}
        cost={expectedCost}
        days={expectedDays}
        tags={expectedTags} />);

    it('should render correct link', () => {
        const renderedLink = '/trip/abc';
        expect(component.find('Link').prop('to')).toEqual(renderedLink);
    });
    it('should render correct image properties', () => {
        expect(component.find('img').prop('alt')).toMatch('test');
        expect(component.find('img').prop('src')).toMatch('image.jpg');
    });
    it('should render correct props name, cost and days', () => {
        expect(component.find('.title').text()).toEqual(expectedName);
        const renderedCostDays = component.find('.details').text();
        expect(renderedCostDays).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
    });

    it('should render tags in correct spands', () => {
        const renderedTagOne = component.find('.tags span').at(0).text();
        const renderedTagTwo = component.find('.tags span').at(1).text();
        const renderedTagThree = component.find('.tags span').at(2).text();
        expect(renderedTagOne).toEqual(expectedTags[0]);
        expect(renderedTagTwo).toEqual(expectedTags[1]);
        expect(renderedTagThree).toEqual(expectedTags[2]);
    });

});