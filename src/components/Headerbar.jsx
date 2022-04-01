import * as React from "react";
import clsx from "clsx";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import basetheme from "./theme";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { makeStyles } from "@mui/styles";
import { useOktaAuth } from "@okta/okta-react";
import { toRelativeUrl } from "@okta/okta-auth-js";
//import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: basetheme.palette.primary
  },
  link: {
    color: "#555",
    fontSize: 16
  },
  rotateIcon: {
    animation: "spin 4s linear infinite"
  },
  appBar: {
    zIndex: 1400, //theme.zIndex.drawer + 5,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: calc(100% - ${drawerWidth}px),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
////className={clsx(classes.appBar)}
export default function HeaderBar() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => {
    const originalUri = toRelativeUrl(
      window.location.href,
      window.location.origin
    );
    oktaAuth.setOriginalUri(originalUri);
    await oktaAuth.signInWithRedirect();
  };
  const logout = async () => {
    await oktaAuth.signOut();
  };
  const logButton =
    !authState || !authState?.isAuthenticated ? (
      <Button color="inherit" onClick={login}>
        Sign In
      </Button>
    ) : (
      <Button color="inherit" onClick={logout}>
        Logout
      </Button>
    );
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ toolbar: (theme) => theme.mixins.toolbar }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AcUnitIcon className={classes.rotateIcon} />
            <style>{`
                  @keyframes spin {
                      0% { transform: rotate(360deg); }
                      100% { transform: rotate(0deg); }
                  }
              `}</style>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            A S S E R T
          </Typography>
          <Button color="inherit">About</Button>
          {logButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
