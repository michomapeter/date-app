const AuthModal = ({setShowModal}) =>{

    const handleClick =() =>{
        setShowModal(false)
    }
    const isSignUp =false;
    return(
        <div className="auth-modal"> 
         <div className="close-icon" onClick={handleClick}>X</div>
         AUTH MODAL
         <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
         <p>By Clicking Login you accept to our terms and conditions</p>
        </div>
    )
}
export default AuthModal