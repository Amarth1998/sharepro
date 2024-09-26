import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  // const navigate = useNavigate();


  const login = async () => {
    let item = { email, password };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      const result = await response.json();

      if (response.ok) {
        // navigate("/add"); 
        setMessage("Login successfull")
      } else {
        setMessage(result.error || "Login failed");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div><br />
      <h1>Login Page</h1>
      <br />
      <div>
        <input required onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Enter Email" value={email} />
        {/* {" "} */}
        <br /> <br />
        <input required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"value={password} />
          {/* {" "} */}
        <br /> <br />

        <button  onClick={login}>  Login  </button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;


// skpatelsk61@gmail.com