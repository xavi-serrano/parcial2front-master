import { BrowserRouter,Routes,Route } from "react-router-dom";
import Listado from "./pages/Listado";
import CafeDetail from "./pages/CafeDetail";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>

      <Routes>

      <Route path="/login" element={<Login/>}/>

        <Route path="/Listado" element={<Listado/>}/>
        
        <Route path="/Listado/cafe/:cafeId" element={<CafeDetail/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
