const AuthModal = ({setShowModal}) =>{

    const handleClick =() =>{
        setShowModal(true)
    }

    return(
        <div>
         <div onclick={handleClick}>X</div>
        </div>
    )
}
export default AuthModal