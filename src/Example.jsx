import React, { useState } from 'react'

 function Example() {

    const [first, setfirst] = useState('Open')

  return (
    <div>Example
        <div>{first}</div>
       
    </div>
  );
}


export default Example
