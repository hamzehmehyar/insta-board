import './App.css';

import { 
  
   BrowserRouter ,
   Routes , 
  Route ,

  } 

  from 'react-router-dom';
  import WelcomeUser from './pages/Home';
  import UserList from './components/Team/Team';
  import Aboutus from './pages/About';
import Layout from './components/Layout';
import Profile from './components/Team/TeamDetails/TeamDetails';
import Error from './pages/NotFound';


function App() {

  return (

    <BrowserRouter>

          
            <Routes>

                <Route path='/' element = {<Layout />}>  

                <Route index element = {<WelcomeUser/>}/> 
                <Route path='Teams' element = {<UserList />}/>
                <Route path='About' element = {<Aboutus />}/>
                <Route path='profile/:name' element = {<Profile />}/>
                <Route path='*' element = {<Error />}/>

              </Route> 


            </Routes>
    
    
    </BrowserRouter>




  );

}

export default App;
