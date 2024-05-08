import React, { useRef, useState } from 'react'
import { auth, collection, firestore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'
import { addDoc, limit, orderBy, query } from 'firebase/firestore'

function ChatRoom({ userData }) {
  const dummy = useRef()
  const messageRef = collection(firestore, 'messages')
  const messageQuery = query(messageRef, orderBy('createdAt'), limit(25))
  const womanImage = 'https://randomuser.me/api/portraits/women/76.jpg'
  const manImage = 'https://randomuser.me/api/portraits/men/86.jpg'

  const [messages] = useCollectionData(messageQuery, { idField: 'id' })

  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    const { uid } = auth.currentUser

    await addDoc(messageRef, {
      text: formValue,
      createdAt: new Date(),
      uid,
      name: userData?.name,
      img: userData?.gender === 'Male' ? manImage : womanImage,
    })

    setFormValue('')
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <h3 className="mt-2">Alumni Chat</h3>
      <div style={{ maxHeight: '70vh', overflowY: 'auto', padding: '0 100px' }}>
        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} userData={userData} />)}

        <span ref={dummy}></span>
      </div>
      <form className="d-flex align-items-center px-5">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              sendMessage(e)
            }
          }}
          className="form-control mr-2"
          style={{ borderRadius: '20px' }}
        />

        <button
          onClick={sendMessage}
          type="button"
          className="btn btn-primary d-flex align-items-center"
          disabled={!formValue}
          style={{ borderRadius: '20px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-1">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
          <span>Send</span>
        </button>
      </form>
    </>
  )
}

export default ChatRoom
