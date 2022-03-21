import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import basetheme from "./theme";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
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
  }
}));

export default function HeaderBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
            Data Engineering And Analytics
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
