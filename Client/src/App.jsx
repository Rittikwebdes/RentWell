import Navbar from "./components/Navbar";
import AddListing from "./Pages/addListing";
import Home from "./Pages/Home";

import {  Routes,Route } from 'react-router-dom';
import SignUpForm from "./Pages/SignUpForm";
import Login from "./Pages/Login";
export default function App() {
  return (
   <>
 
<div>
<Navbar/>
<Routes>


<Route exact path="/" element={<Home />} />
<Route exact path="/addlisting" element={ <AddListing/>} />
<Route exact path="/signup" element={ <SignUpForm/>} />
<Route exact path="/login" element={ <Login/>} />

  
</Routes>
</div>
   </>
  )
}
