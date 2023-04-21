import React from 'react';
import '../styles/login.css'
const Login = () => {
    return (
        <div className='login'>

            <h1>Join US</h1>


            <div className="name mb-4">
                <label htmlFor=""> <h5>Name:</h5> </label>   <input type="text" id="form2Example2" className="form-control" placeholder='Enter your name...' />

            </div>

            <div className="email mb-4">
                <label htmlFor=""><h5>Email:</h5></label>  <input type="email" id="form2Example1" className="form-control" placeholder='Enter your email...' />

            </div>

            <button>Submit</button>


        </div>
    );
}

export default Login;
