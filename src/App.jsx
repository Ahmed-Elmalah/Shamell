import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useTheme } from "./store";
import { useEffect } from "react";
import LoginPage from "./pages/LoginPage";

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
          <Route path="*" element={<h1>404 Page</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
