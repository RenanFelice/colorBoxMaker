import React from 'react';
import './styles/App.css'
import BoxList from './components/BoxList'
import BoxesContextProvider from './context/boxesContext.js'
import BoxMakerForms from './components/BoxMakerForms';

function App() {
  return (
    <div className='App'>
      <BoxesContextProvider>
        <BoxMakerForms/>
        <BoxList />
      </BoxesContextProvider>
     
    </div>
  );
}

export default App;
