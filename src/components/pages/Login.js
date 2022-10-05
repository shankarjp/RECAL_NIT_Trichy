import React, { useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function Login() {
    const [saved,sets] = useState(false);
    function sendPost(){
        sets(false);
        console.log("sendPost");
        var username = document.querySelector('#username').value;
        var password = document.querySelector('#password').value;
        if(!username || !password){
            return;
        }
        var data = {'username' :  username, 'password' : password };
        axios.post('http://localhost:8080/login' , data).then((res) => console.log("test" + res.data));
        sets(true);
    }
    return (
        <div className="login-wrapper form-body">

        <h1>Log In</h1>
  
        <div>
  
          <label>
  
            <p>Username</p>
  
            <input id='username' type="text" />
  
          </label>
  
          <label>
  
            <p>Password</p>
  
            <input id='password' type="password" />
  
          </label>
  
          <div>
  
            <button onClick={()=>{sendPost();}} type="submit">Submit</button>
            {saved && <Link to="/" ><button>Continue</button> </Link>}
            {saved &&  <p>Logged In Successfully</p>}
          </div>
  
        </div>
  
      </div>
  
    )
}

export default Login;