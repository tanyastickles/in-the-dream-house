import {shallow} from 'enzyme';
import GoTo from '../components/GoTo';

test('True should be truthy', () => {
    const wrapper = shallow(<GoTo />);
    expect(wrapper).toBeDefined();
})