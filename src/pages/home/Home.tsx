import Header from '../../components/header/Header.tsx'
import Posts from '../../components/posts/Posts.tsx'
import Sidebar from '../../components/sidebar/Sidebar.tsx'
import "./Home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
          <Posts/>
          <Sidebar/>
      </div>
    </>
  )
}
