import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigationbar from './component/Navigationbar';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import StartTestButton from './component/StartTestButton';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Contact from './component/Contact';
import NotFound from './component/NotFound';
import Footer from './component/Footer';
import axios from 'axios';
import AddText from './component/AddText';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [userName,setUserName] = useState("");
  let userEmail='';
  useEffect( () => {
    auth.onAuthStateChanged( (user) => {
      if(user){
        setUserLoggedIn(true);
        setUserName(user.displayName)
        userEmail = user.email;
      }
      else{
        setUserLoggedIn(false);
        setUserName("")
      }

      axios.post("https://brainy-gear-duck.cyclic.app/api/admin",{
        email: userEmail
      })
        .then( (response) => {
          setIsAdmin(response.data);
        }).catch(err => console.log(err))

    })
  }, [])

  return (
    <>
    <BrowserRouter>
      <Navigationbar name={userName} isAdmin={isAdmin} />
        <Routes>
          <Route exact path='/' element={<Home/>}/>

          <Route path="/starttest" element={ userLoggedIn? <StartTestButton/>: <LogIn/>}/>
          
          <Route path="/addtext" element={isAdmin?<AddText/> : <NotFound/> }/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
