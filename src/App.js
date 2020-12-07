import React from 'react';
import './App.css';
import JsonBuilderContainer from './components/Builder-container/Builder-container';
import { setWidthAndHeight } from './components/constants';
import { updateJsonElement } from './redux/action/jsonBuilderAction';
import store from './redux/store/store';
function App(props) {
  const size = '100rem';
  setWidthAndHeight(1600, 700, 'px');
  return (
    <div className="AppCss">
      <JsonBuilderContainer {...props} width={size} height={size} />
    </div>
  )
}

export default App;
