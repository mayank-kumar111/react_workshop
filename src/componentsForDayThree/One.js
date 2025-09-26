import React, { useEffect } from 'react'

const One = () => {

  useEffect(() => {
    console.log("MOUNT ONE");
  }, []);
  
  return (
 <div>One</div>
  )
}
export default One