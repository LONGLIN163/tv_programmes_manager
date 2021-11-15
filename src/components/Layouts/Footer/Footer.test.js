import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import {ProgramContextProvider,useProgramContext} from '../../ProgramStore';
import Adapter from 'enzyme-adapter-react-16';
import {AppBar,Tabs,Tab} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { configure, mount } from 'enzyme';
import  Footer from './Footer'

configure({ adapter: new Adapter() });

describe('Footer test', () => {

   it('set tab Series status to be true', () => {
      const styles = {
         tabsCenter: {
            flexGrow: 1,
         }
      };

      const FooterComposition = withStyles(styles)(Footer);
      const wrapper=mount( 
        <ProgramContextProvider>
            <FooterComposition />
        </ProgramContextProvider>
      )

      //status --- before click
      const SeriesTab = wrapper.find('button[title="Series"]');
      //console.log("SeriesTab-----",SeriesTab.debug())
      const SeriesStatus = SeriesTab.prop("aria-selected");
      //console.log("SeriesStatus--before click--",SeriesStatus)
      expect(SeriesStatus).toBe(false);

      SeriesTab.hostNodes().simulate('click',{ target: { value: 1 }});

      // status --- after click
      const SeriesTabAfter = wrapper.find('button[title="Series"]');
      const SeriesStatusAfter = SeriesTabAfter.prop("aria-selected");
      //console.log("SeriesStatus--after click--",SeriesStatusAfter)
      expect(SeriesStatusAfter).toBe(true);

    })
  }
);

