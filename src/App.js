import React from 'react';
import './App.css';
import JsonBuilderContainer from './components/Builder-container/Builder-container';
import { setWidthAndHeight } from './components/constants';

function App() {
  const size = '100rem';
  setWidthAndHeight(1600 , 700 , 'px');
  return (
    <div className="AppCss">
      <JsonBuilderContainer width = {size} height={size}/>
    </div>
  );
}

export default App;
