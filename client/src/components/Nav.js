import logo from '../images/tinder.png'
import colorLogo from '../images/color.jpeg'
// import Home from '../pages/Home';


const minimal = true;
const Nav= ({minimal ,authToken ,setShowModal ,setIsSignUp}) => {

    const handleClick =()=>{
        setShowModal(true);
        setIsSignUp(false);
    }
    return (
       <nav>
        <div className="logo-container"> 
         <img className='logo' src={minimal ? colorLogo : logo}/>
        </div>
        {authToken && <button className="nav-button" onClick={handleClick}>Login</button>}
       </nav> 
    )
}

export default Nav;