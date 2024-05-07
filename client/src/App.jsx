import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
 return (
  <>
   
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/sign-in" element={<SignIn />} />
     <Route path="/sign-up" element={<SignUp />} />
    </Routes>
   
  </>
 );
}

export default App;