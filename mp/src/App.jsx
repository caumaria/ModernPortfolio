import { Routes, Route, Navigate } from "react-router-dom";
import Mainpage from './pages/Mainpage';

function App() {  

  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
