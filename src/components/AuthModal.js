import {useState} from 'react'

const AuthModal = ({setShowModal}) =>{
   const[email ,setEmail] = useState(null)
   const [password ,setPassword] = useState(null)
   const [confirmPassword ,setconfirmPassword] =useState(null)
   const [error ,setError] = useState(null)

   console.log(email ,password ,confirmPassword)
    const handleClick =() =>{
        setShowModal(false)
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
    }
    const isSignUp =false;
    return(
        <div className="auth-modal"> 
         <div className="close-icon" onClick={handleClick}>X</div>
         AUTH MODAL
         <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
         <p>By Clicking Login you accept to our terms and conditions</p>

         <form onSubmit={handleSubmit}>
          <input
          type ="email"
          id ="email"
          name="email"
          placeholder="email"
          required= {true}
          onChange={(e)=>setEmail(e.target.value)}
          />
           <input
          type ="password"
          id ="password"
          name="password"
          placeholder="password"
          required= {true}
          onChange={(e)=>setPassword(e.target.value)}
          />
           <input
          type ="password-check"
          id ="password-check"
          name="password-check"
          placeholder="password-check"
          required= {true}
          onChange={(e)=>setconfirmPassword(e.target.value)}
          />
             <input className="secondary-button"
          type ="submit"
          
          />
            <hr/>
            <h2>GET THE APP</h2>

         </form>
        </div>
    )
}
export default AuthModal