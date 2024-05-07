import React from 'react'
import { auth } from '../../firebase'

function ChatMessage({ index, message }) {
  const { uid, text } = message
  const isCurrentUser = uid === auth.currentUser.uid
  const messageClass = isCurrentUser ? 'bg-primary text-white rounded' : 'bg-secondary text-dark'
  const flexClass = isCurrentUser ? 'flex-row-reverse' : 'flex-row'
  const textAlignment = isCurrentUser ? { textAlign: 'right' } : { textAlign: 'left' }
  const imageMargin = isCurrentUser ? { marginLeft: '5px' } : { marginRight: '5px' }
  return (
    <div className={`message p-3 mb-2 rounded d-flex ${flexClass}`} key={index}>
      <img
        className="profile-image rounded-circle"
        src={'https://randomuser.me/api/portraits/men/86.jpg'}
        alt=""
        width="40"
        height="40"
        style={imageMargin}
      />
      <span className={`align-middle ${messageClass}`} style={{ width: '100%', ...textAlignment }}>
        {text}
      </span>
    </div>
  )
}

export default ChatMessage
