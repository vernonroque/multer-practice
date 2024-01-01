import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [pdf,setPDF] = useState('');
  
  const handleChange = (event) => {
    console.log("the file >>>",event.target.files[0]);
    setPDF(event.target.files[0]);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const baseURL = 'http://localhost:4001';
    const formData = new FormData();
    formData.append("pdfFile", pdf);
    console.log(Object.fromEntries(formData.entries()))
    console.log("pdfState>>>",pdf);

    const response = await axios.post(`${baseURL}/submitPDF`,formData);
    if(response.ok){
      console.log(response);
    }
    else{
      console.log(response.status, response.statusText);
    }

  }
  
  return (
    <>
    <section className ="header">
      <h1>Landing Page section</h1>
      <h1>Hey Baus</h1>

    <form className="form-section" onSubmit={handleSubmit} >
      <input type="file" name="pdfFile" accept="application/pdf" onChange={handleChange}/>
      <button type="submit">Submit File</button>

    </form>
     
    </section>
    </>
  )
}


export default App;
