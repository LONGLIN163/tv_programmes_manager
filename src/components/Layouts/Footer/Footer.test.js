import React from 'react';
import { shallow } from 'enzyme';
import {ProgramContext,useProgramContext,ProgramStore} from '../../ProgramStore';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import Footer from "./Footer";

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  test('it should mock the context', () => {
    const contextValues = {programTypes:['Series', 'Movies', 'Cartoons', 'Shows', 'Ads']};
    jest
      .spyOn(ProgramContext,'useProgramContext')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Footer />);
    const Series = wrapper.find('[title]="Series"');;
    expect(Series).toHaveAttribute("aria-selected", "false");
  });
});




// import { render,fireEvent } from '@testing-library/react';
// import Footer from './Footer';
// import React,{useContext} from 'react';
// import * as haha from '../../ProgramStore'
// import shadows from '@material-ui/core/styles/shadows';



// import React from "react";
// import jest from "jest";
// import { configure, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import ProgramStore from "../../ProgramStore";
// import Footer from "./Footer";

// configure({ adapter: new Adapter() });

// describe("test", () => {
//   let wrapper;
//   const contextValue=['Series', 'Movies', 'Cartoons', 'Shows', 'Ads'];
//   beforeEach(async () => {
//     wrapper = mount(
//       <ProgramStore value={contextValue}>
//         <Footer />
//       </ProgramStore>
//     );
//   });
//   afterEach(() => {
//     jest.clearAllMocks();
//     jest.resetAllMocks();
//   });

//   it("Render the component", () => {
//     console.log(wrapper.debug());
//     //expect(wrapper.find("h2").exists()).toBe(true);
//   });
// });



// import ShallowRenderer from 'react-test-renderer/shallow';
// import Footer from "./Footer";
// import React from "react";


// let realUseContext;
// let useContextMock;
// // Setup mock
// beforeEach(() => {
//     realUseContext = React.useContext;
//     useContextMock = React.useContext = jest.fn();
// });
// // Cleanup mock
// afterEach(() => {
//     React.useContext = realUseContext;
// });

// test("mock hook", () => {
//     useContextMock.mockReturnValue("Test Value");
//     const element = new ShallowRenderer().render(
//         <Footer />
//     );
//     expect(element.props.children).toBe('Test Value');
// });


// describe('clickFooterTab', () => {

//     it("onClick", () => {
//         const contextValue=['Series', 'Movies', 'Cartoons', 'Shows', 'Ads'];

//         jest
//         .spyOn(haha,'useContext(ProgramContext)')
//         .mockImplementation( () => contextValue);

//         const wrapper=shadows(<Footer />)

//         const tabSeries = wrapper.find('[title]="Series"');

//         expect(tabSeries).toHaveAttribute("aria-selected", "false");

//         fireEvent.click(tabSeries);

//         expect(tabSeries).toHaveAttribute("aria-selected", "true");
//     })
// });

