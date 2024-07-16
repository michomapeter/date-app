import Nav from '../components/Nav'
import {useState}  from 'react'
import AuthModal from "../components/AuthModal"
const Home = () => {
     
    const [showModal , setShowModal] = useState(false);
    const authToken = false

    const handleClick = () => {
        console.log('Clicked')
        setShowModal(true)
    }
    return (
        <>
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

        </>
    )
}

export default Home; 