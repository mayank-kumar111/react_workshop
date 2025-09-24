import React, { useEffect } from 'react'

const One = () => {

  useEffect(() => {
    console.log("One Mounted");
  
  }, []);

  return (
    <div>One</div>
  )
}

export default One