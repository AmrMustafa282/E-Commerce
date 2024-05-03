import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
