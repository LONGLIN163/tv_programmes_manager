import '@testing-library/jest-dom'
import React from 'react';
import {ProgramContextProvider} from '../../ProgramStore';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import  Catalog from '../Catalog/Catalog'
import  PlayList from './Playlist'

configure({ adapter: new Adapter() });

describe('PlayList test', () => {

    const wrapper=mount( 
      <ProgramContextProvider>
          <PlayList />
          <Catalog />
      </ProgramContextProvider>
    )

    it('check if adding and delete item to playlist works', () => {
        //add few items
        const item1Add = wrapper.find('button[title="Breaking Badadd"]');
        item1Add.simulate("click",{ target: { value: "10001" }});
        const item1Added = wrapper.find('div[data-value="10001"]');
        expect(item1Added.text()).toEqual("10001");
        
        const item2Add = wrapper.find('button[title="Lostadd"]');
        item2Add.simulate("click",{ target: { value: "10002" }});
        const item2Added = wrapper.find('div[data-value="10002"]');
        expect(item2Added.text()).toEqual("10002");

        // ******important: testing bug, separat instance,below snippet will work*******

        // const item3Add = wrapper.find('button[title="The Invisible Guestadd"]');
        // item3Add.simulate("click",{ target: { value: "20002" }});
        // const item3Added = wrapper.find('div[data-value="20002"]');
        // console.log("item3Added---------------",item3Added.text())
        // expect(item3Added.text()).toEqual("20002");

        //del one item---select it
        const item1InPlaylist = wrapper.find('div[data-id="10001"]');
        item1InPlaylist.hostNodes().simulate("click");
        expect(wrapper.find('div[data-id="10001"]').prop("aria-selected")).toBe(true);
        //del one item---del it
        const purgeBtn = wrapper.find('button[title="purgeBtn"]');
        purgeBtn.simulate("click");
        expect(wrapper.find('div[data-id="10001"]').exists()).toBe(false);


        

    })



  }
);

