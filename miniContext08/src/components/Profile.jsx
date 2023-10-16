import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not logged in</h1>
  return (
    <div className='profile-page'>
        <h1>Welcome,  you signIn as {user.username}</h1>
    </div>
  )
}
