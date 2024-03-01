import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

function Login() {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios.get("http://localhost:3333/register").then((res) => {
      console.log(res.data);
    });
  };
  const loginHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3333/login", {
        username,
        password,
      });
      const token = response.data.token;
      alert("Login successful..");
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/account");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Error:", error);
      alert("Credentials mismatch!");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={loginHandle}
        >
          <label>UserName</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
            value={username}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
          <br />
          <br />
          <button
            className="w-[200px] h-[50px] border hover:bg-teal-900 rounded"
            type="submit"
          >
            Login
          </button>
          <p className="text-white">
            New user ?
            <Link to="/signup">
              <button className="border rounded m-2 hover:bg-teal-800">
                click here
              </button>
            </Link>
          </p>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
        <h1 className="text-3xl text-white">Login</h1>
      </div>
    </div>
  );
}

export default Login;
