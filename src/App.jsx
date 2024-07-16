import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarkes from './Component/Bookmarks/Bookmarkes'
import Header from './Component/Header/Header'
function App() {
 
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);

  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarkes bookmarks={bookmarks}></Bookmarkes>
      </main>
    </>
  )
}

export default App
