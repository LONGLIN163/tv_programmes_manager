
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ProgramContextProvider} from './ProgramStore'
import {Header,Footer} from './Layouts';
import {ContentView} from './Programmes'

const App = () => {
    return ( 
        <ProgramContextProvider>
            <CssBaseline />
            <Header />
            <ContentView />
            <Footer />
        </ProgramContextProvider>
     );
}
 
export default App;