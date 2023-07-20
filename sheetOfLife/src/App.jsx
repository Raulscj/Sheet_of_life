import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Raul from "./Raul";
/* import Sara from "Sara.jsx"; */

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/Raul" element={<Raul />} />
      </Routes>
    </div>
  );
}
export default App;
