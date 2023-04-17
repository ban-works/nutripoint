import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
const frontendURL = 'http://localhost:3000/'


function App() {

  const [file, setFile] = useState(null)

const handleChange= (e)=>{
  setFile(e.target.files);

}

const handleSubmit = ()=>{
  
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input  type="file" accept="application/pdf" id="icon-button-file"onChange={(e)=>handleChange(e)}/>
      </header>
    </div>
  );
}

export default App;
