import {useState} from 'react'
import Nav from '../components/Nav'

const handleSubmit = (e) => {
    e.preventDefault();
    
}


const OnBoarding = () => {
    return (
        <>
        <Nav minimal={true}  setShowModal={() =>{} } showModal={false}/>
        <div className="onboarding">
            <h2>CREATE ACCOUNT</h2>

            <form onSubmit={handleSubmit}>
              <section>
                <label htmlFor="first_name">First Name</label>
                <input
                id="first_name"
                type= "text"
                name ="first_name"
                placeholder="First Name"
                required={true}
                value={""}
                onChange= {handleChange}
                />
                   <label >Birth Day</label>
                   <div className="multiple-input">
                <input
                id="dob_day"
                type= "number"
                name ="dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange= {handleChange}
                />
                  <input
                id="dob_month"
                type= "number"
                name ="dob_month"
                placeholder="MM"
                required={true}
                value={""}
                onChange= {handleChange}
                />
                  <input
                id="dob_year"
                type= "number"
                name ="dob_year"
                placeholder="YYYY"
                required={true}
                value={""}
                onChange= {handleChange}
                />
                 </div>
                <label>Gender</label>
                <input
               id="dob_year"
               type= "number"
               name ="dob_year"
               placeholder="YYYY"
               required={true}
               value={""}
               onChange= {handleChange}
                />
              </section>
            </form>

        </div>
        </>
    )
}

export default OnBoarding;