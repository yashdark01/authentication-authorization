import { useState } from "react";
// import AuthProvider from './providers/authProvider';
import { Loader } from "lucide-react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";
import { SignIn } from "./components/signIn";


export const Main = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  )
}
function App() {
  const [state, setState] = useState(true);
  const { isAuthenticated, loading } = useAuth(state);

  if (loading) {
    <div className="h-screen w-full flex justify-center items-center">
      <Loader className="size-12 text-emerald-800 font-bold animate-spin" />
    </div>
  }
  return (
    <Router>
      {isAuthenticated ? <Main /> : <SignIn />}
    </Router>
  );
}

export default App;
