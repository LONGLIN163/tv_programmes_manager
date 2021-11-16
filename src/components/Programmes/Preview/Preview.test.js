import '@testing-library/jest-dom'
import React from 'react';
import {ProgramContextProvider} from '../../ProgramStore';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import  Preview from './Preview'
import  Catalog from '../Catalog/Catalog'

configure({ adapter: new Adapter() });

describe('Preview test', () => {

    const wrapper=mount( 
      <ProgramContextProvider>
          <Preview />
          <Catalog />
      </ProgramContextProvider>
    )

    it('check update or edit item', () => {
        //active edit model
        const itemEdit = wrapper.find('button[title="Breaking Bad"]');
        itemEdit.simulate("click",{ target: { value: "10001" }});
        // and check title in preview page after click
        expect(wrapper.find('h4[title="middleView"]').text()).toEqual("Edit View");
        expect(wrapper.find('h2[title="Breaking Bad"]').text()).toEqual("Breaking Bad");
        
        //******check if item data is filled into the form******

        // 1. change a input
        const titleInput=wrapper.find('input[name="title"]')
        titleInput.simulate('change', { target: { value:"hahaha", name:"title"}})
        expect(wrapper.find('input[name="title"]').props().value).toEqual("hahaha");

        // 2. change a select
        const typeSelect=wrapper.find('input[name="type"]')
        typeSelect.simulate('change', { target: { value:"Shows", name:"type"}})
        expect(wrapper.find('input[name="type"]').props().value).toEqual("Shows");

        //console.log("after all-------------------",wrapper.find('input[name="title"]').props().value)

        // 3.update form
        const formbtn=wrapper.find('button[title="formbtn"]')
        formbtn.simulate("click")
        expect(wrapper.find('div[title="hahaha"]').exists()).toBe(true);

    })
  }
);

