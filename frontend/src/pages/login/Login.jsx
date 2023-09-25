import React, { useContext, useState , useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        credentials
      );
    

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
    }
  };

  

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check user authentication status on component mount
//   useEffect(() => {
//     const token = localStorage.getItem('authToken'); // Assuming you store the token in localStorage
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   return (
//     <nav>
//       <ul>
//         <li>Home</li>
//         {isLoggedIn && <li>Upload</li>}
//         {!isLoggedIn && <li>Login</li>}
//         {isLoggedIn && <li>Logout</li>}
//       </ul>
//     </nav>
//   );
// };


  return (
    <>
      <NavBar />
      <div class="register">
        <div class="registerContainer">
          <div class="left">
            <img
              src="https://imgs.search.brave.com/_qbkAcVGpJIA0NyThAg_NAbS4oVGtstFSePwFp6sUkE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/NzkzOTYzL3Bob3Rv/L2NhbGlmb3JuaWEt/Zm9yLXJlbnQtcmVh/bC1lc3RhdGUtc2ln/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzNUdkQzaml1/V0o5ZGg0ekpjaGc0/amhqYjBpWnlueDM5/X05NclRXSHZTQT0"
              alt=""
            />
          </div>
          <div class="right">
            <h1>Sign In Here.</h1>
            <form action="">
              <div class="formLabel">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="name"
                  onChange={handleChange}
                />
              </div>
              <div class="formLabel">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <button disabled={loading} onClick={handleLogin}>
                SIGN IN
              </button>
              {error && <span style={{ color: "red" }}>{error}</span>}
              <p>
                You don't have an account?{" "}
                <Link to="/signUp">Sign up here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
