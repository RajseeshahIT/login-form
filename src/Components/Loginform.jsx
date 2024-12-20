import React from 'react'
import './Loginform.css'

const Loginform = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            {/* UserName */}
            <div className="input-box">
            <input type="text" placeholder='Username' required />
            <i class="user fa-solid fa-user"></i>
            </div>

            {/* Password */}
            <div className="input-box">
            <input type="password" placeholder='Password' required />
            <i class="lock fa-solid fa-lock"></i>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password ? </a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Don't have an account ?<a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default Loginform
