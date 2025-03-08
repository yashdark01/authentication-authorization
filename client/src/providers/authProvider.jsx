import { Loader } from 'lucide-react';
import {useState, useEffect} from 'react';

const AuthProvider = ({user, token}) => { 
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        
    }, [token]);

    if(loading){
        return(
            <div className='h-screen w-full flex justify-center items-center  '>
                <Loader className='size-12 text-emerald-800 font-bold animate-spin '/>
            </div>
        )
    }

    return(
        <div>
            Auth Provider
        </div>

    )

}

export default AuthProvider;