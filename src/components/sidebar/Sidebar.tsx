import "./Sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarTitle">
            ABOUT YOU
        </div>
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/926/278/datas/original.jpg" alt="img" className="sideBarPic"/>
        <p>I am a fullstack web developer who loves trying out new stuff. My favourite technologies include svelte, tailwind and graphql. I am currently learning about containerization and docker. Interested in AI and Machine learning.</p>
        <div className="categories">
            <div className="categoriesTitle">CATEGORIES</div>
            <ul className="categoriesList">
                <li className="categoriesListItem" onClick={()=>{console.log("hi")}}> <a href="">Web dev</a></li>
                <li className="categoriesListItem"> <a href=""> Docker</a></li>
                <li className="categoriesListItem"> <a href="">Svelte</a> </li>
                <li className="categoriesListItem"> <a href="">Backend</a></li>
                <li className="categoriesListItem"> <a href="">Data Science</a></li>
            </ul>
        </div>
        <div className="socialMedia">
            <div className="socialMediaTitle">
                Follow Me
            </div>
            <div className="socialMediaList">
                <i className="topicon fa-brands fa-linkedin"></i>
                <i className="topicon fa-brands fa-square-facebook"></i>
                <i className="topicon fa-brands fa-square-x-twitter"></i>
                <i className="topicon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
