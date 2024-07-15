import logo from '../images/tinder.png'
import colorLogo from '../images/color.jpeg'
// import Home from '../pages/Home';
const minimal = true;
const Nav= ({minimal ,authToken}) => {
    return (
       <nav>
        <div className="logo-container"> 
         <img className='logo' src={minimal ? colorLogo : logo}/>
        </div>
        {authToken && <button className="nav-button">Login</button>}
       </nav> 
    )
}

export default Nav;