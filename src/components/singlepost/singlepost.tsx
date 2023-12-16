import "./singlepost.css"
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg" alt="not found" className="singlePostImage" />
            <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, debitis quia.

            <div className="editContainer">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>                
            </div>
            </h1>
            <div className="SinglePostInfo">
                {/* <div className="author">
                    Lorem ipsum dolor sit amet.
                </div> */}
                <div className="date">
                    1 hour ago
                </div>
                <div className="readtime">
                    5 min read
                </div>
            </div>
            
        </div>
    </div>
  )
}
