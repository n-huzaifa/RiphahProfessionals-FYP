import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { Navigate } from 'react-router-dom'
import ChatRoom from './ChatRoom'

function AlumniChat() {
  const [user] = useAuthState(auth)
  return <div className="col-12 col-lg-10 p-0">{!user ? <Navigate to={'/login'} /> : <ChatRoom />}</div>
}

export default AlumniChat
