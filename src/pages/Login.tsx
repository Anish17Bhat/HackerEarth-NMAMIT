// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Mail, Lock, User, ArrowRight, Shield, CheckCircle } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isLoading, setIsLoading] = useState(false);
  
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const validateEmail = (email: string) => {
//     return email.endsWith('@nmamit.in');
//   };

//   const validateForm = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = 'Email must end with @nmamit.in';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!isLogin) {
//       if (!formData.name) {
//         newErrors.name = 'Name is required';
//       }
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = 'Passwords do not match';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleGoogleSignIn = async () => {
//     setIsLoading(true);
    
//     try {
//       // Initialize Google OAuth
//       if (typeof window !== 'undefined' && window.google) {
//         window.google.accounts.id.initialize({
//           client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with actual client ID
//           callback: handleGoogleCallback,
//           hosted_domain: 'nmamit.in' // Restrict to NMAMIT domain
//         });
        
//         window.google.accounts.id.prompt();
//       } else {
//         // Fallback for development - simulate Google sign-in
//         setTimeout(() => {
//           const mockUser = {
//             email: 'student@nmamit.in',
//             name: 'NMAMIT Student'
//           };
//           login(mockUser.email, mockUser.name);
//           setIsLoading(false);
//           navigate('/');
//         }, 1500);
//       }
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleCallback = (response: any) => {
//     try {
//       // Decode JWT token
//       const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
//       // Verify domain
//       if (payload.hd === 'nmamit.in') {
//         login(payload.email, payload.name);
//         navigate('/');
//       } else {
//         alert('Please use your NMAMIT email address (@nmamit.in)');
//       }
//     } catch (error) {
//       console.error('Token decode error:', error);
//     }
//     setIsLoading(false);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;

//     setIsLoading(true);
    
//     // Simulate API call for manual login (fallback)
//     setTimeout(() => {
//       if (isLogin) {
//         login(formData.email, formData.name || formData.email.split('@')[0]);
//       } else {
//         login(formData.email, formData.name);
//       }
//       setIsLoading(false);
//       navigate('/');
//     }, 1500);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     if (errors[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: ''
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <div className="max-w-md w-full space-y-8 relative z-10">
//         {/* Header */}
//         <div className="text-center animate-fade-in-up">
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
//               <Shield className="w-8 h-8 text-white" />
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             Welcome to HackerEarth
//           </h2>
//           <p className="text-gray-600">
//             Sign in with your NMAMIT Google account
//           </p>
//         </div>

//         {/* Google Sign In */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 animate-scale-in">
//           <button
//             onClick={handleGoogleSignIn}
//             disabled={isLoading}
//             className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:border-blue-500 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
//           >
//             {isLoading ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
//                 <span>Signing in...</span>
//               </>
//             ) : (
//               <>
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 <span>Continue with Google</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </>
//             )}
//           </button>

//           <div className="mt-6 text-center">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">NMAMIT Students Only</span>
//               </div>
//             </div>
//           </div>

//           {/* Requirements */}
//           <div className="mt-6 space-y-3">
//             <div className="flex items-center space-x-2 text-sm text-gray-600">
//               <CheckCircle className="w-4 h-4 text-green-500" />
//               <span>Must use @nmamit.in email address</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-600">
//               <CheckCircle className="w-4 h-4 text-green-500" />
//               <span>Secure Google OAuth authentication</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-600">
//               <CheckCircle className="w-4 h-4 text-green-500" />
//               <span>Access to all club features</span>
//             </div>
//           </div>

//           {/* Manual Login Toggle (for development) */}
//           <div className="mt-8 pt-6 border-t border-gray-200">
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="w-full text-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
//             >
//               Having trouble? Try manual login (Development only)
//             </button>
//           </div>

//           {/* Manual Login Form (Hidden by default, for development) */}
//           {!isLogin && (
//             <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <input
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Full Name"
//                 />
//                 {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//               </div>
              
//               <div>
//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="your.name@nmamit.in"
//                 />
//                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//               </div>
              
//               <div>
//                 <input
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Password"
//                 />
//                 {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//               </div>
              
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50"
//               >
//                 {isLoading ? 'Signing in...' : 'Sign In'}
//               </button>
//             </form>
//           )}
//         </div>

//         {/* Features */}
//         <div className="grid grid-cols-3 gap-4 text-center animate-fade-in">
//           <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
//             <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
//             <p className="text-xs text-gray-600">Secure</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
//             <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
//             <p className="text-xs text-gray-600">Verified</p>
//           </div>
//           <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
//             <User className="w-6 h-6 text-purple-600 mx-auto mb-2" />
//             <p className="text-xs text-gray-600">NMAMIT Only</p>
//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default Login;


//new era

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// ---- TypeScript fix: declare Google types ----
declare global {
  interface Window {
    google?: any;
  }
}

// ====== SET YOUR GOOGLE CLIENT ID HERE ======
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
// =============================================

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  // Dynamically load Google Identity script ONCE
  useEffect(() => {
    if (!window.google && !document.getElementById('google-identity')) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.id = 'google-identity';
      document.body.appendChild(script);
    }
  }, []);

  const validateEmail = (email: string) => {
    return email.endsWith('@nmamit.in');
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email must end with @nmamit.in';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Main Google Sign-In handler
  const handleGoogleSignIn = () => {
    setIsLoading(true);

    if (!window.google?.accounts?.id) {
      alert('Google Sign-In not loaded yet. Please wait or try again.');
      setIsLoading(false);
      return;
    }

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCallback,
    });

    window.google.accounts.id.prompt((notification: any) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        setIsLoading(false);
      }
    });
  };

  const handleGoogleCallback = (response: any) => {
    try {
      if (!response?.credential) {
        throw new Error('No Google Credential received.');
      }
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      if (payload.hd !== 'nmamit.in') {
        alert('Please use your @nmamit.in Google account.');
        setIsLoading(false);
        return;
      }
      login(payload.email, payload.name);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      alert('Google Sign-In failed. Please try again or contact support.');
      setIsLoading(false);
    }
  };

  // Manual fallback login (for dev only)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);

    setTimeout(() => {
      if (isLogin) {
        login(formData.email, formData.name || formData.email.split('@')[0]);
      } else {
        login(formData.email, formData.name);
      }
      setIsLoading(false);
      navigate('/');
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to HackerEarth
          </h2>
          <p className="text-gray-600">
            Sign in with your NMAMIT Google account
          </p>
        </div>

        {/* Google Sign In */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 animate-scale-in">
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:border-blue-500 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">NMAMIT Students Only</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Must use @nmamit.in email address</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Secure Google OAuth authentication</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Access to all club features</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              Having trouble? Try manual login (Development only)
            </button>
          </div>

          {!isLogin && (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full Name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.name@nmamit.in"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
              <div>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-center animate-fade-in">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600">Secure</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600">Verified</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <User className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600">NMAMIT Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
