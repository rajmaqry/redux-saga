import "./styles.css";
import Analytics from "./elements/analytics/Analytics";
import NavBar from "./nav/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderBar from "./components/Headerbar";
export default function App() {
  return (
    <Router>
      <HeaderBar />
      <NavBar>
        <Routes>
          <Route path="/" element={<p>ok</p>} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/compute" element={<Analytics />} />
          <Route path="/dataconfig" element={<p />} />
          <Route path="/ingestion" element={<Analytics />} />
          <Route path="/tables" element={<Analytics />} />
          <Route path="/transformation" element={<Analytics />} />
          <Route path="/validation" element={<Analytics />} />
          <Route path="/sql" element={<Analytics />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </NavBar>
    </Router>
  );
}
