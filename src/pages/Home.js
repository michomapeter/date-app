import Nav from '../components/Nav'
import {useState}  from 'react'
import AuthModal from "../components/AuthModal"
const Home = () => {
     
    const [showModal , setShowModal] = useState(false);
    //An authtoken means we are signed in.
    const authToken = true

    const handleClick = () => {
        console.log('Clicked')
        setShowModal(true)
    }
    return (
        <div className='overlay'>
        <Nav minimal={false}  authToken={authToken}/>
        <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
            {authToken ? 'SignOut':"create account"}
        </button>

        {showModal && (
            <AuthModal setShowModal={setShowModal}/>
        )}
        </div>

        </div>
    )
}

export default Home; 