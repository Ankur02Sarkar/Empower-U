"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./login.css";
import { Button } from "@/components/ui/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential : ", userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/"; // reload with refresh
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {};

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <div className="formDiv">
          <h1 className="text-gray-500">Create Account</h1>
          <div className="social-icons flex flex-row gap-4 text-gray-500">
            <Button className="hover:text-[#512da8] hover:border hover:border-[#512da8] flex flex-row gap-2">
              <span>Continue With Google</span>
              <FaGoogle size={27} />
            </Button>
          </div>
          <span className="text-gray-500">
            or use your email for registration
          </span>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
      <div className="form-container sign-in">
        <div className="formDiv">
          <h1 className="text-gray-500">Sign In</h1>
          <div className="social-icons flex flex-row gap-4 text-gray-500">
            <Button className="hover:text-[#512da8] hover:border hover:border-[#512da8] flex flex-row gap-2">
              <span>Continue With Google</span>
              <FaGoogle size={27} />
            </Button>
          </div>
          <span className="text-gray-500">or use your email password</span>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <a href="#">Forget Your Password?</a> */}
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button
              className="hiddenn"
              id="login"
              onClick={(e) => {
                e.preventDefault();
                setIsActive(false);
              }}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              className="hiddenn"
              id="register"
              onClick={(e) => {
                e.preventDefault();
                setIsActive(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;