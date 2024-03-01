import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios.get("https://authbackend-0biu.onrender.com/register").then((res) => {
      console.log(res.data);
    });
  };
  const Register = (e) => {
    e.preventDefault();
    axios
      .post("https://authbackend-0biu.onrender.com/register", {
        email,
        username,
        password,
      })
      .then(() => {
        alert("Registration successful...");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((err) => {
        console.log("Unable to register User!", err);
      });
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={Register}
        >
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
          <br />
          <br />
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
            className="rounded w-[200px] h-[50px] border hover:bg-teal-900"
            type="submit"
          >
            Sign-UP
          </button>
          <p className="text-white">
            already have account ?{" "}
            <Link to="/login">
              <button className="border rounded m-2 hover:bg-teal-800">
                click here
              </button>
            </Link>
          </p>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
        <h1 className="text-3xl text-white">Sign-up</h1>
      </div>
    </div>
  );
}

export default SignUp;
