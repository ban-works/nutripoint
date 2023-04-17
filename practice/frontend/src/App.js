import './App.css';
import {useState} from 'react';
const frontendURL = 'http://localhost:3000'


function App() {

  const [file, setFile] = useState(null)
  console.log('file',file)
const handleChange= (e)=>{
  setFile(e.target.files);

}

const handleSubmit = ()=>{

  const formData = new FormData();
  formData.append('fromFront', file[0]);
console.log(formData);
  fetch(`${frontendURL}/print_pdf`,{
    method: 'POST',
body: formData
  }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      // data.result && dispatch(addPhoto(data.url));
    });
}

  return (
    <div className="App">
      <header className="App-header">
        <div style ={{display:'flex', flexDirection:'column', alignItems:'center', width:'60%'}}>

        <h1> Pdf-printer for Nutripoint</h1>
        <input  type="file" accept="application/pdf" id="icon-button-file" onChange={(e)=>handleChange(e)}/>
        <button style={{marginTop:'20px', maxWidth:'200px'}} type="button" onClick={()=> handleSubmit()}> Print selected file</button>
        </div>
      </header>
    </div>
  );
}

export default App;
