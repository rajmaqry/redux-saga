import "./styles.css";
import React, { useEffect } from "react";
import Analytics from "./elements/analytics/Analytics";
import DataIngestion from "./elements/data/DataIngestion";
import NavBar from "./nav/NavBar";
import Box from "@mui/material/Box";
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
import { useNavigate } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { useOktaAuth } from "@okta/okta-react";

const theme = createTheme();

export default function App() {
  const oktaAuth = new OktaAuth({
    issuer: `https://dev-41841197.okta.com/oauth2/default`,
    clientId: "0oa4gxupzsK8cXXxh5d7",
    redirectUri: `${window.location.origin}/auth/callback`
  });
  const renderError = (props) => {
    const { error } = props;
    if (error) {
      const { name, errorCode, errorSummary } = error;

      if (errorCode === "access_denied") {
        // customized error handling
        return (
          <div>
            <p>You haven't been assigned to this app yet.</p>
          </div>
        );
      }
      // genric error handling
      return (
        <div>
          <p>{`[${name}: ${errorSummary}]`}</p>
        </div>
      );
    }

    return null;
  };
  sessionStorage.clear();
  const { token, setUser, currentUser, isLoggedIn, logOut } = useUser();
  const [workspace, selectWorkspace] = React.useState("");
  const [workspaceSelected, selected] = React.useState(false);
  const [moderator, setShowModeratorBoard] = React.useState(false);
  const [admin, setShowAdmin] = React.useState(false);

  //const logout = () => {
  //  sessionStorage.removeItem("user");
  //  sessionStorage.removeItem("token");
  //  return <Router history={history}>{history("/login")}</Router>;
  // };
  // useEffect(() => {
  //  history.listen((location) => {
  //    console.log(location);
  //  });
  //}, [workspaceSelected]);
  //useEffect(() => {
  //  if (currentUser) {
  //     setUser();
  //    setShowModeratorBoard(
  //      currentUser.role_mappings.includes("ROLE_MODERATOR") ||
  //        currentUser.role_mappings.includes("*")
  //     );
  //     setShowAdmin(
  //       currentUser.role_mappings.includes("ROLE_ADMIN") ||
  //         currentUser.role_mappings.includes("*")
  //    );
  //  } else {
  //     setShowModeratorBoard(false);
  //     setShowAdmin(false);
  //   }
  //   EventBus.on("logout", () => {
  //     logOut();
  //   });
  //   return () => {
  //      EventBus.remove("logout");
  //   };
  // }, [currentUser, logOut]);

  // if (!currentUser) {
  //   return (
  //     <Router history={history}>
  //       <Login />
  //     </Router>
  //   );
  // }
  // if (!workspaceSelected && currentUser.workspace_map.length > 0) {
  //   return (
  //     <Router history={history}>
  //       <ThemeProvider theme={theme}>
  //         <SelectWorkspace
  //           workspaces={currentUser.workspace_map}
  //           selected={selectWorkspace}
  //           isselected={selected}
  //           user={currentUser}
  //         />
  //       </ThemeProvider>
  //     </Router>
  //   );
  // }
  const history = useNavigate();
  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    history(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <ThemeProvider theme={theme}>
        <HeaderBar />
      </ThemeProvider>
      <NavBar>
        <Routes>
          <Route path="/home" element={<p>This is BaseCamp</p>} />
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
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<> not found</>} />
          <Route
            path="/auth/callback"
            element={
              <LoginCallback
                errorComponent={renderError}
                loadingElement={<h3 id="loading-icon">Loading...</h3>}
              />
            }
          />
        </Routes>
      </NavBar>
    </Security>
  );
}
