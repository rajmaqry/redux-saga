import "./styles.css";
import React, { useEffect } from "react";
import Analytics from "./elements/analytics/Analytics";
import DataIngestion from "./elements/data/DataIngestion";
import NavBar from "./nav/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import HeaderBar from "./components/Headerbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useUser from "./elements/user/userHook";
import Login from "./elements/user/Login";
import { SelectWorkspace } from "./elements/workspace/Workspace";
import { history } from "./util/history";
import EventBus from "./elements/user/EventBus";
import AuthVerify from "./elements/user/AuthVerify";
import { Navigate } from "react-router-dom";
const theme = createTheme();

export default function App() {
  sessionStorage.clear();
  const { token, setUser, currentUser, isLoggedIn, logOut } = useUser();
  const [workspace, selectWorkspace] = React.useState("");
  const [workspaceSelected, selected] = React.useState(false);
  const [moderator, setShowModeratorBoard] = React.useState(false);
  const [admin, setShowAdmin] = React.useState(false);

  useEffect(() => {
    history.listen((location) => {
      console.log(location);
    });
  }, [workspaceSelected]);
  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(
        currentUser.role_mappings.includes("ROLE_MODERATOR") ||
          currentUser.role_mappings.includes("*")
      );
      setShowAdmin(
        currentUser.role_mappings.includes("ROLE_ADMIN") ||
          currentUser.role_mappings.includes("*")
      );
    } else {
      setShowModeratorBoard(false);
      setShowAdmin(false);
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  if (!currentUser) {
    return <Login />;
  }
  if (!workspaceSelected && currentUser.workspace_map.length > 0) {
    return (
      <ThemeProvider theme={theme}>
        <SelectWorkspace
          workspaces={currentUser.workspace_map}
          selected={selectWorkspace}
          isselected={selected}
          user={currentUser}
        />
      </ThemeProvider>
    );
  }
  return (
    <Router history={history}>
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
