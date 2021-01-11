import {shallow} from 'enzyme';
import Page from '../components/Page'

test('Page should exist and render div', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div')).toHaveLength(1);
})