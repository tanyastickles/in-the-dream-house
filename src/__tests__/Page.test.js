import {shallow} from 'enzyme';
import Page from '../components/Page';
import GoTo from '../components/GoTo';

test('Page should exist and render div', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('GoTo')).toHaveLength(1);
});


/**
 * 
 * Test Cases:
 * If GOTO exists in the data, then it should be rendered (along with text, header, other things?)
 * # of GOTOs should match # in the data
 *
 */