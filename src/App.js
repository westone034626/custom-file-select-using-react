import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [selectedFileName, setSelectedFileName] = useState();
  const inputRef = useRef();

  const onInputChange = (e) => {
    const {
      target: { value },
    } = e;
    const path = value.split('\\');
    const fileName = path[path.length - 1];
    setSelectedFileName(fileName);
  };

  const onClickCancel = (e) => {
    e.preventDefault();
    if (!inputRef.current) return;
    inputRef.current.value = '';
    setSelectedFileName('');
  };

  return (
    <form>
      <label htmlFor="upload">
        <span>{selectedFileName || 'Choose File'}</span>
      </label>
      <input
        ref={inputRef}
        onChange={onInputChange}
        style={{ display: 'none' }}
        type="file"
        id="upload"
      />
      {selectedFileName && <button onClick={onClickCancel}>x</button>}
    </form>
  );
}

export default App;
