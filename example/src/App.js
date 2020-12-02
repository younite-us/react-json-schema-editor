import React, { useState } from 'react'
import './App.css';
import UiJson from 'ui-json-builder'
import 'ui-json-builder/dist/index.css'

const App = () => {
  const [jsonFile, setJson] = useState({});
  const uploadJsonFile = (event) => {
    if (event.target.files.length > 0) {
      let reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(event.target.files[0]);
    }
  }
  const onReaderLoad = (event) => {
    setJson(JSON.parse(event.target.result));
}
  return <div>
    <div className="mainContainer">
      <UiJson importJson={jsonFile} className='container' />
    </div>
    <label className="custom-file-upload">
      {/* <PublishTwoToneIcon /> */}
      <h4 className='textLabel'>Upload File</h4>
      <input id='jsonFile' type="file" onChange={uploadJsonFile} name='UPLOAD JSON' />
    </label>
  </div>
}

export default App
