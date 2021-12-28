import { useState } from 'react';
import './App.css';

function App() {
  const [selectedFileName, setSelectedFileName] = useState();
  const onInputChange = (e) => {
    const {
      target: { value },
    } = e;
    const path = value.split('\\');
    const fileName = path[path.length - 1];
    setSelectedFileName(fileName);
  };

  return (
    <form>
      <label htmlFor="upload">
        <span>{selectedFileName || 'Choose File'}</span>
      </label>
      <input
        onChange={onInputChange}
        style={{ display: 'none' }}
        type="file"
        id="upload"
      />
    </form>
  );
}

export default App;
