import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarkes from './Component/Bookmarks/Bookmarkes'
import Header from './Component/Header/Header'
function App() {
 
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);

  }


  const handleMarkAsRead = time => {
     const newReading = readingTime + time;
     setReadingTime(newReading);
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarkes bookmarks={bookmarks}readingTime={readingTime}></Bookmarkes>
      </main>
    </>
  )
}

export default App
