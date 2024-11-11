import HomePage from "@components/pages/HomePage";
import { Routes, Route } from "react-router-dom";

import ElementsPage from "./components/pages/elements/Elements";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="elements" element={<ElementsPage />} />
    </Routes>
  );
}

export default App;
