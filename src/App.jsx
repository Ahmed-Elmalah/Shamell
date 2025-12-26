import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useTheme } from "./store";
import { useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound404 from "./pages/NotFound404";
import ForgetPassword from "./pages/ForgetPassword";

export default function App() {

  const initTheme = useTheme((state) => state.initTheme);
  useEffect(()=>{
    initTheme();
  },[initTheme]);


  return (
    <div className="w-full h-auto overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="*" element={<NotFound404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
