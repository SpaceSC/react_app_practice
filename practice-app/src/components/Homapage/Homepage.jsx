import React, { useState, useEffect } from 'react';
import ButtonM from '../ButtonM/ButtonM';
import '../../styles/CSS/style.css';
import Loader from '../Loader/Loader';
import Post from '../Post/Post';
import { v4 as uuidv4 } from 'uuid';



function Homepage() {
  const [myData, setMyData] = useState([]);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [res, setRes] = useState(false);
  const [formShow, setFormShow] = useState(true);

  useEffect(() => {
    setShow(false);

    // behívom az adatokat
    fetch('./data/data.json')
    .then(response => response.json())
    .then(data => setMyData(data))
    .catch(error => setMyData(null))
    .finally(() => setShow(true))
   }, [])

  function submit(){
    console.log("POST request");
    /*
     // POST requestet küldök
   fetch('./data/data.json', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // amit küldünk, ezt mindig stringgé kell alakítani
    body: JSON.stringify({ email: email})
  }).then(response => setRes(true))
  .catch(error => setRes(false))
  .finally(() => setTimeout(setFormShow(false), 5000))
  */
  }
  

  return (
    <div className="home">
      <h1>Ez a címünk</h1>

      {!show 
        ? <Loader/> 
        : myData 
          ? myData.map(res=> <Post key={uuidv4()} res={res}/>) 
          : <p>Oops</p>}


      {show && formShow && <form>
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <ButtonM text="Iratkozz fel!" dis={!(email.includes("@") && email.includes("."))} click={() => submit()}/>
        </form>}

      
      
    </div>
  )
}

export default Homepage;
