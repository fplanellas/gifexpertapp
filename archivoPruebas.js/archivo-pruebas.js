import React, { useState } from 'react';


const ArchivoPruebas = () => {

    const [mandangueo, setmandangueo] = useState(['mandanga','buena']);
    const add = ()=>{
        setmandangueo([...mandangueo, 'pató']);
    }

  return (
    <>
    <p>jelou</p>
    <button onClick={ add }>añado pató</button>
      <ul>
            {
             mandangueo.map( mand =>{
                 return <li key={mand}>{mand}</li>
             })
            }
      </ul>
    </>
  )
}

export default ArchivoPruebas
