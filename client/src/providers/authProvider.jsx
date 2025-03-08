// import { Loader } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import useAuth from '../hooks/useAuth';
// import { SignIn } from '../components/signIn';
// import { useNavigate } from 'react-router-dom';

// const AuthProvider = () => { 
//     const { isAuthenticated, loading } = useAuth();
//     const navigate = useNavigate();
//     const [loginStatus, setLoginStatus] = useState(false);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setLoginStatus(true);
//         }, 4000);

//         return () => clearTimeout(timeout);
//     }, []);

//     useEffect(() => {
//         if (!loading && isAuthenticated) {
//             navigate('/');
//         }
//     }, [isAuthenticated, loading, navigate]);

//     if (loading && !loginStatus) {
//         return (
//             <div className='h-screen w-full flex justify-center items-center'>
//                 <Loader className='size-12 text-emerald-800 font-bold animate-spin' />
//             </div>
//         );
//     }

//     return (
//         <div>
//             {isAuthenticated ? "Authenticated! Redirecting..." : <SignIn />}
//         </div>
//     );
// };

// export default AuthProvider;