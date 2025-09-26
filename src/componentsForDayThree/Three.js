import React, { useEffect } from 'react'

const Three = () => {
    useEffect(() => {
        console.log("JUST THREE");
    }, []);
  return (
    <div>Three</div>
  )
}
export default Three