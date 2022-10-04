import React from 'react';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    function sendPost(){
        
        console.log("sendPost");
        var username = document.querySelector('#username').value;
        var password = document.querySelector('#password').value;
        if(!username || !password){
            return;
        }
        var data = {'username' :  username, 'password' : password };
        axios.post('http://localhost:8080/login' , data).then(
            (res)=>{
                console.log(res);
                if(res.status == 200){
                    console.log("nav");
                    navigate("/");
                    
                }
                else{
                    console.log("wrong user name");               
                }
            }
        ).catch(
            error => {
                console.log(error);
            }

        );
    }
    return (
        <div className="login-wrapper">

        <h1>Log In</h1>
  
        <form>
  
          <label>
  
            <p>Username</p>
  
            <input id='username' type="text" />
  
          </label>
  
          <label>
  
            <p>Password</p>
  
            <input id='password' type="password" />
  
          </label>
  
          <div>
  
            <Link to=""><button onClick={()=>{sendPost();}} type="submit">Submit</button></Link>
  
          </div>
  
        </form>
  
      </div>
  
    )
}

export default Login;
