import Inforartist from "./components/Inforartist"
import Header from "./components/Header"
import Discoartist from "./components/Discoartist";
import { Routes, Route } from "react-router-dom";
import './App.css'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inforartist />} />
        <Route path="/discografia" element={<Discoartist />} />
      </Routes>
    </>
  )
}

export default App
