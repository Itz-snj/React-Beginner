import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const RegistrationForm = () => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [Loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== CPassword) {
      seterror("Passwords do not match!");
      return;
    }

    setLoader(true);
    const Username = FName + " " + LName;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, Email, password);
      const user = userCredential.user;
      console.log("User registered:", user);
      window.localStorage.setItem("Username", Username);
      alert("User Registered Successfully");
      navigate("/");
    } catch (error) {
      seterror(error.message);
    }
    setLoader(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In Successful:", user);
      window.localStorage.setItem("Username", user.displayName);
      alert("Signed in with Google Successfully!");
      navigate("/");
    } catch (error) {
      seterror(error.message);
    }
  };

  return (
    <div className="min-h-screen register-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form className="max-w-md w-full space-y-8 register-login p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl my-2 flex justify-center items-center py-2 font-semibold tracking-tighter text-black">
            Register
          </h2>
          <p className="mt-2 text-sm text-gray-700">Signup now and get full access to our app.</p>
        </div>


        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
            placeholder="Email"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 ">Email</label>
        </div>

        {/* Password Fields */}
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 ">Password</label>
        </div>

        <div className="relative">
          <input
            type="password"
            value={CPassword}
            onChange={(e) => setCPassword(e.target.value)}
            className="peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
            placeholder="Confirm password"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 ">Confirm password</label>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={Loader} className="w-full bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700">
          {Loader ? "Submitting" : "Submit"}
        </button>

        {/* Google Sign-In Button */}
        <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center  ml-24 justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg width="20" height="20" viewBox="0 0 512 512">
              <path fill="#FBBB00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z" />
              <path fill="#518EF8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
              <path fill="#28B446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
              <path fill="#F14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z" />
            </svg>
             Continue With Google
          </button>

        <div className="text-center text-red-600 text-xs uppercase">{error}</div>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;