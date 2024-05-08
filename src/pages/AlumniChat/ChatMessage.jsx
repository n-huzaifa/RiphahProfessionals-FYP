import React from 'react'
import { auth } from '../../firebase'

function ChatMessage({ index, message, userData }) {
  const { uid, text, img, name, createdAt } = message
  const isCurrentUser = uid === auth.currentUser.uid
  const messageClass = isCurrentUser ? 'bg-primary text-white rounded' : 'bg-secondary text-white rounded text-dark'
  const flexClass = isCurrentUser ? 'flex-row-reverse' : 'flex-row'
  const textAlignment = isCurrentUser ? { textAlign: 'right' } : { textAlign: 'left' }
  const imageMargin = isCurrentUser ? { marginLeft: '5px' } : { marginRight: '5px' }
  const dateMargin = isCurrentUser ? { marginRight: '5px' } : { marginLeft: '5px' }
  const milliseconds = createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
  const date = new Date(milliseconds)
  const localCreatedAt = date.toLocaleString()
  return (
    <div className={`message p-3 mb-2  rounded d-flex ${flexClass}`} key={index}>
      <img className="profile-image rounded-circle" src={img} alt="" width="40" height="40" style={imageMargin} />
      <span
        className={`align-middle ${messageClass}`}
        style={{ width: 'fit-content', padding: '10px', ...textAlignment }}
      >
        <span style={{ fontWeight: 'bold' }}>{name}</span>
        {' : '}
        {text}
      </span>
      <span className="mt-3" style={dateMargin}>
        {localCreatedAt}
      </span>
    </div>
  )
}

export default ChatMessage
