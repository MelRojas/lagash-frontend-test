import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { General } from './General';
import Image from '../../components/UI/Thumbnail/Thumbnail';
import NoResults from '../../components/UI/NoResults/NoResults';

configure({adapter: new Adapter()});

describe('<General />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<General />);
	})

	it('Should render at least one <Image /> if server return photos', () => { 
		wrapper.setState({photos: [
			{
				"albumId":1,
				"id":1,
				"title":"accusamus beatae ad facilis cum similique qui sunt",
				"url":"https://via.placeholder.com/600/92c952",
				"thumbnailUrl":"https://via.placeholder.com/150/92c952"}
		]})
		expect(wrapper.find(Image)).toHaveLength(1);
	});

	it('Should render <NoResults /> if server no return photos', () => {
		expect(wrapper.find(NoResults)).toHaveLength(1);
	})
});


