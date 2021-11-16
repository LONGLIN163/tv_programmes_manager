import '@testing-library/jest-dom'
import React from 'react';
import {ProgramContextProvider} from '../../ProgramStore';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import  DialogPane from './DialogPane'
import  Catalog from '../Catalog/Catalog'

configure({ adapter: new Adapter() });

describe('DialogPane Test', () => {

    const wrapper=mount( 
        <ProgramContextProvider>
           <Catalog />
           <DialogPane />
        </ProgramContextProvider>
      )
    
    
    it('Check if open form', () => {
        //1. test if form can be opened
        const addProgramBtn=wrapper.find('button[title="addProgramBtn"]')
        addProgramBtn.simulate('click')
        const formPane=wrapper.find('form[title="formPane"]').prop('title')
        expect(formPane).toEqual("formPane")

        // 1. test title input
        const titleInput=wrapper.find('input[name="title"]')
        titleInput.simulate('change', { target: { value:"xixixi", name:"title"}})

        const imageUrlInput=wrapper.find('input[name="imageUrl"]')
        const imageUrl="https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_FMjpg_UX1000_.jpg"
        imageUrlInput.simulate('change', { target: { value:imageUrl, name:"imageUrl"}})

        const durationInput=wrapper.find('input[name="duration"]')
        durationInput.simulate('change', { target: { value:"180min", name:"duration"}})

        const episodeInput=wrapper.find('input[name="episode"]')
        episodeInput.simulate('change', { target: { value:"2", name:"episode"}})

        const chapterInput=wrapper.find('input[name="chapter"]')
        chapterInput.simulate('change', { target: { value:"1", name:"chapter"}})

        const typeSelect=wrapper.find('input[name="type"]')
        typeSelect.simulate('change', { target: { value:"Shows", name:"type"}})

        const synopsisInput=wrapper.find('textarea[name="synopsis"]')
        synopsisInput.simulate('change', { target: { value:"A group of", name:"synopsis"}})

        const formbtn=wrapper.find('button[title="formbtn"]')
        //console.log("formbtn status------------",formbtn.text())
        formbtn.simulate("click")
        expect(wrapper.find('div[title="xixixi"]').exists()).toBe(true);
     });

   }
 );