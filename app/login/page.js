"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./login.css";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // useEffect for checking if logged in then redirect to homepage
  // useEffect(() => {
  //   const checkSession = async () => {
  //     const session = await getServerSession(authOptions);
  //     if (session) {
  //       redirect("/"); // if logged in then redirect to home page
  //     }
  //   };

  //   checkSession();
  // }, [router]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      setIsDisabled(true);
      const resUserExists = await fetch("api/userexists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        toast.error("User already exists");
        setIsDisabled(false);
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res.ok) {
        toast.success("User Registered");
        setEmail("");
        setPassword("");
        router.push("/create?refresh=true");
      } else {
        toast.error("Could not Register User");
      }
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(false);
      console.log(error);
      toast.error("Error during Registration");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      if (res.error) {
        toast.error("Invalid Credentials");
        setEmail("");
        setPassword("");
        return;
      }
      toast.success("Logged in Succesfully");
      router.push("/create?refresh=true");
    } catch (error) {
      console.log(error);
      toast.error("Some Error Occured");
    }
  };

  const handleLogout = async () => {
    signOut();
    toast.success("Logged Out");
  };

  const handleGoogleButton = async () => {};

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <div className="formDiv">
          <h1 className="text-gray-500">Create Account</h1>
          <div className="social-icons flex flex-row gap-4 text-gray-500">
            <Button
              onClick={handleGoogleButton}
              className="hover:text-[#512da8] hover:border hover:border-[#512da8] flex flex-row gap-2"
            >
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
          <button onClick={handleSignup} disabled={isDisabled}>
            Sign Up
          </button>
        </div>
      </div>
      <div className="form-container sign-in">
        <div className="formDiv">
          <h1 className="text-gray-500">Sign In</h1>
          <div className="social-icons flex flex-row gap-4 text-gray-500">
            <Button
              onClick={handleGoogleButton}
              className="hover:text-[#512da8] hover:border hover:border-[#512da8] flex flex-row gap-2"
            >
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
