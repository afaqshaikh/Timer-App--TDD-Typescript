import { shallow, ShallowWrapper } from 'enzyme';
import Timer from './Timer'

describe('mounted timer', () => {

    let container: ShallowWrapper<Readonly<{}> & Readonly<any>, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => (container = shallow(<Timer />)))

    it("should render a <div />", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    });
    it("should render instances of the TimerButton component", () => {
        expect(container.find("TimerButton").length).toEqual(3);
      });
});