import React, { useState, useEffect } from 'react';
import ButtonM from '../ButtonM/ButtonM';

function Post({res}) {
  const [show, setShow] = useState(false);


  console.log(res.title);
  return (
    <div className="post">
      <h1>{res.title}</h1>
      <p>{res.author}</p>
      {show ? <p>{res.description}</p> : <ButtonM text="Mutass többet" click={() => setShow(true)} /> }
      
    </div>
  )
}

export default Post;
