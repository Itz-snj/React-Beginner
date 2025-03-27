import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      console.log("Successfully logged in:", result.user);
      navigate('/');
    } catch (error) {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      if (error.code === 'auth/configuration-not-found') {
        console.error("Firebase Google Auth is not properly configured");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-6">
          {user ? 'Welcome!' : 'Login'}
        </h2>
        {user ? (
          <div className="flex items-center gap-4">
            <img 
              src={user.photoURL} 
              alt="Profile" 
              className="w-12 h-12 rounded-full"
            />
            <div className="text-white">
              <p className="font-semibold">{user.displayName}</p>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>
        ) : (
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-gray-800 py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;