import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlepost/singlepost'
import "./singlePostPage.css"

export default function SinglePostPage() {
  return (
    <div className='singlePostPage'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
