import Nav from '../components/Nav'
const Home = () => {

    const authToken = true

    const handleClick = () => {
        console.log('Clicked')
    }
    return (
        <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
            {authToken ? 'SignOut':"create account"}
        </button>
        </div>
    )
}

export default Home; 