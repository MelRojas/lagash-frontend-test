import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({adapter: new Adapter()});

describe('<Input />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Input />);
	})

	it('Should render an input if elementType is equal to input', () => { 
		wrapper.setProps({elementType:'input'});
		expect(wrapper.find('input').children).toHaveLength(1);
	});

	it('Should render an textarea if elementType is equal to textarea', () => { 
		wrapper.setProps({elementType:'textarea'});
		expect(wrapper.find('textarea').children).toHaveLength(1);
	});

	it('Should render an input if elementType is not provided', () => { 
		expect(wrapper.find('input').children).toHaveLength(1);
	});

	it('Should render an input if elementType is different to input or textarea', () => { 
		wrapper.setProps({elementType:'button'});
		expect(wrapper.find('input').children).toHaveLength(1);
	});
});
