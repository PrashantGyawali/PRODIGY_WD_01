import "./Topbar.css"

const Logo=()=>{
  return (
<svg viewBox="6.468 14.877 456.663 426.908" xmlns="http://www.w3.org/2000/svg" style={{height:"80px", width:"80px"}} className="logosvg" >
  <path id="logo" style={{stroke: "rgb(0, 0, 0)", fill: "rgb(0, 215, 255)"}} d= "M 84.411 120.796 C 84.411 120.796 80.54276462050174 87.25136201420719 86.998 75.517 C 93.2236019681534 64.20006685102612 107.45854463450308 57.19023517863437 121.281 50.938 C 138.18318137898655 43.292729299604474 162.1219456013485 39.72399388847063 182.73 36.708 C 203.09092687112366 33.72817328666771 223.5718110484367 34.84221098647904 244.179 32.827 C 265.1793602906629 30.773340139975677 289.2122850304437 19.831264017738043 307.567 24.418 C 324.32667037871835 28.606143662509595 342.4366774376579 42.39057494098989 350.906 55.466 C 358.4448943528761 67.1049767201836 352.05189949251826 86.74966622120365 359.315 96.863 C 366.14791744509523 106.37733547340085 385.0953195442983 104.97387952181617 391.656 115.62 C 400.3362543601887 129.70558675030998 400.6111335234074 159.5087627353981 395.537 180.951 C 389.8768670474552 204.86954947407 361.88624736073734 226.7109030767148 354.786 251.457 C 347.998065874853 275.11460898678325 366.2819805079696 309.76138350892774 352.199 325.841 C 334.56023776854335 345.9805245770968 273.6839137281064 350.4835089802699 237.064 345.245 C 200.6075800028514 340.0298789333173 163.7996082179912 309.61644544043503 132.923 294.793 C 108.26859544713713 282.9567510773341 77.22624640179784 278.69371863875347 66.299 263.098 C 57.537139119468954 250.59278944465095 57.644901120011696 230.0539303992419 61.772 215.879 C 65.9404352292496 201.56209580977878 87.3990790136079 192.69060743157678 91.526 177.717 C 96.01930322145448 161.4140567813273 84.411 120.796 84.411 120.796 C 84.411 120.79600000000002 84.41100000000002 120.796 84.411 120.796"
        />
        <text x="120" y="225" font-family="Arial" font-size="135" fill="black">Blob</text>
</svg>


  )
}

export default function Topbar() {
  return (
    <div className="topbar">
      <Logo/>
      <div className="topLeft">
        <i className="topicon fa-brands fa-linkedin"></i>
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-square-x-twitter"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='navigation'>
          <li className='navItem'><a href="">HOME</a></li>
          <li className='navItem'><a href="">ABOUT</a></li>
          <li className='navItem'><a href="">CONTACT</a></li>
          <li className='navItem'><a href="">WRITE</a></li>
          <li className='navItem'><a href="">LOGOUT</a> </li>  
          <li className='navItem'><div className="searchInputContainer"><i className="fa-solid fa-magnifying-glass searchicon"></i><input type="text" className="searchinput" placeholder="Search"/></div> </li> 
        </ul>
      </div>
      <div className="topRight">
          <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/926/278/datas/original.jpg" alt="photo" className='profileImage'/>
      </div>
    </div>
  )
}
