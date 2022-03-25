import "./styles.css";
import Analytics from "./elements/analytics/Analytics";
import DataIngestion from "./elements/data/DataIngestion";
import NavBar from "./nav/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderBar from "./components/Headerbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useUser from "./elements/user/userHook";
import Login from "./elements/user/Login";
const theme = createTheme();

export default function App() {
  const { token, user, setUser } = useUser();

  if (!token || !user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <HeaderBar />
      </ThemeProvider>
      <NavBar>
        <Routes>
          <Route path="/" element={<p>ok</p>} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/compute" element={<Analytics />} />
          <Route path="/dataconfig" element={<p />} />
          <Route path="/ingestion" element={<DataIngestion />} />
          <Route path="/tables" element={<Analytics />} />
          <Route path="/transformation" element={<Analytics />} />
          <Route path="/validation" element={<Analytics />} />
          <Route path="/sql" element={<Analytics />} />
          <Route path="/jobs" element={<Analytics />} />
          <Route path="/tasks" element={<Analytics />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </NavBar>
    </Router>
  );
}
