import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarkes from './Component/Bookmarks/Bookmarkes'
import Header from './Component/Header/Header'
function App() {
 
  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarkes></Bookmarkes>
      </main>
    </>
  )
}

export default App
