import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useTheme } from "./store";
import { useEffect } from "react";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
