import AllRoutes from './allroutes/AllRoutes';
import './App.css';
import { AuthProvider } from './contextApi/AuthProvider';

const App=() =>{
  
  return (
   <>
    <AuthProvider>
     <AllRoutes/>
    </AuthProvider>
   
   </>
  );
}

export default App;
