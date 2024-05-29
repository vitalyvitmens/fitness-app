'use client'

import { useState } from 'react'
import styles from './page.module.css'

const Home: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedAuthorId, setSelectedAuthorId] = useState('1')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, authorId: selectedAuthorId }),
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок поста"
          required
          className={styles.inputText}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Содержание поста"
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.submitButton}>
          Создать пост
        </button>
      </form>
    </main>
  )
}

export default Home
