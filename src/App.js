import logo from './logo.svg';
import {Editor} from '@atlaskit/editor-core';
import './App.css';

function App() {
  return (
    <div className="App">
      <br />

      <Editor allowTables
        appearance="comment"
        placeholder="What do you want to say?"
      />
    </div>
  );
}

export default App;
