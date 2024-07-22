import Nav from '../components/Nav'
import {useState}  from 'react'
import AuthModal from "../components/AuthModal"
const Home = () => {
     
    const [showModal , setShowModal] = useState(false);
    const [isSignUp ,setIsSignUp] =useState(true);
    //An authtoken means we are signed in.
    const authToken = true

    const handleClick = () => {   
        console.log('Clicked')
        setShowModal(true)
        setIsSignUp(true);
    }
    return (
        <div className='overlay'>
        <Nav minimal={false}  authToken={authToken}  setShowModal={setShowModal} setIsSignUp={setIsSignUp} />
        <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
            {authToken ? 'SignOut':"create account"}
        </button>

        {showModal && (
            <AuthModal setShowModal={setShowModal} setIsSignUp={true} isSignUp={isSignUp}/>
        )}
        </div>

        </div>
    )
}

export default Home; 