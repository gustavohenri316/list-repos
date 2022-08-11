import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Repositories } from "./components/Repositories";
import { GlobalStyles } from "./styles/Global";

export function App() {
  const [username, setUsername] = useState("");
  console.log(username)
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
            
              username={username}
              setUsername={setUsername}
            />
          } 
        />
        <Route path="/repositories" element={<Repositories username={username}/>} />
      </Routes>
    </BrowserRouter>
  );
}
