import "./Header.css"
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
        <span className="headerTitleSm">Share your thoughts</span>
        <span className="headerTitleLg">Blob</span>
      </div>
      <img src="/src/assets/img.jpg" alt="" className="headerImg"/>
    </div>

  )
}
