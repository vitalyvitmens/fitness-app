import React from 'react'

type Props = {
  title: string
  content: string
}

const Post: React.FC<Props> = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Post
