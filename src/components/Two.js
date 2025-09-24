import React, { useEffect } from 'react'

const Two = () => {
  useEffect(() => {
    console.log("Two Mounted");
    return () => {
      console.log("Two Unmounted");
    };
  }, []);
  return (
    <div>Two</div>
  )
}

export default Two