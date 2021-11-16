import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import {ProgramContextProvider,useProgramContext} from '../../ProgramStore';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import  Catalog from './Catalog'
import  Preview from '../Preview/Preview'
import  PlayList from '../PlayList/Playlist'

configure({ adapter: new Adapter() });

describe('Catalog test', () => {

    const wrapper=mount( 
      <ProgramContextProvider>
          <Catalog />
          <Preview />
          <PlayList />
      </ProgramContextProvider>
    )

    it('check if the preview compo gets changed to preview model when click listitem', () => {
      //status --- before click
      const itemPreview = wrapper.find('div[title="Breaking Bad"]');
      itemPreview.simulate("click",{ target: { value: "10001" }});
      // only check title in preview page after click
      expect(wrapper.find('h4[title="middleView"]').text()).toEqual("Preview");
      expect(wrapper.find('h2[title="Breaking Bad"]').text()).toEqual("Breaking Bad");

    })
    
    it('check if the preview compo gets changed to edit model when click listitem', () => {
      //status --- before click
      const itemEdit = wrapper.find('button[title="Breaking Bad"]');
      itemEdit.simulate("click",{ target: { value: "10001" }});
      // only check title in preview page after click
      expect(wrapper.find('h4[title="middleView"]').text()).toEqual("Edit View");
      expect(wrapper.find('h2[title="Breaking Bad"]').text()).toEqual("Breaking Bad");

    })

    it('check if the item gets deleted when click delItem', () => {
      //status --- before click
      const itemDel = wrapper.find('button[title="Lostdel"]');
      itemDel.simulate("click",{ target: { value: "10002" }});
      // only check title in preview page after click
      // console.log("itemDel------",itemDel.text()=='')
      expect(itemDel.text()).toEqual("");
    })

    it('check if add item to playlist when click addItem', () => {
        //status --- before click
        const itemAdd = wrapper.find('button[title="Squid Gameadd"]');
        itemAdd.simulate("click",{ target: { value: "10003" }});

        const itemAdded = wrapper.find('[data-value="10003"]');
        // only check title in preview page after click
        //console.log("itemAdded------",itemAdded.text())
        expect(itemAdded.text()).toEqual("10003");
      })
  }
);

