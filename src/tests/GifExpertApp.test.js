import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Testing on <GifExpertApp />', () => {
    
    test('should be shown correctly', () => {
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show a list of categories', () => {
        const categories =  ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCaregories={categories}/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
