
import './App.css'
import Topbar from './components/topbar/Topbar'
import Home from "./pages/home/Home.tsx";
import SinglePostPage from './pages/singlePost/SinglePostPage.tsx';

function App() {
  return (
    <>
    <Topbar/>
    <Home/>
    {/* <SinglePostPage/> */}
      Blog App
    </>
  )
}

export default App
