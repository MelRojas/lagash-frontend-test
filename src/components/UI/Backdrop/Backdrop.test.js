import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

describe('<Backdrop />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Backdrop />);
	})

    it('Should render a div if show is true', () => {
        wrapper.setProps({show:true});
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it("Should not render a div if show is false", () => {
        wrapper.setProps({show:false});
        expect(wrapper.find('div')).toHaveLength(0);
    });

    it("Should not render a div if show is undefined", () => {
        expect(wrapper.find('div')).toHaveLength(0);
    });

});