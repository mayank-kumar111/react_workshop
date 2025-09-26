import React from 'react'
import { useParams } from 'react-router-dom';

function UserProfile() {
    const {id} = useParams();

  return (
    <div style={{padding: 20}}>
        User Profile Page for user: {id}
    </div>
  )
}

export default UserProfile