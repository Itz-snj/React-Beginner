import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationForm = () => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [Loader, setLoader] = useState(false);

  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen register-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form
        className="max-w-md w-full space-y-8 register-login p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl my-2 flex justify-center items-center py-2 font-semibold tracking-tighter text-black">
            Register
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Signup now and get full access to our app.
          </p>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          
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
        <button
          type="submit"
          disabled={Loader}
          className="w-full bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700"
        >
          {Loader ? "Submitting" : "Submit"}
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
