import { useState } from 'react';
import AuthProvider from './providers/authProvider';
import { Loader } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);
  const user = {}; // Replace with actual user object
  const token = ''; // Replace with actual token

  return (
    <AuthProvider user={user} token={token}>
      <div className='h-screen w-full flex justify-center items-center bg-black text-white font-bold text-5xl'>
        Hello this is yash
      </div>
    </AuthProvider>
  );
}

export default App;
