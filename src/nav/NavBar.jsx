import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiListItem from "@mui/material/ListItem";
import { routes } from "./rconf";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));
const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "red",
      color: "white",
      "border-right": "4px solid #90caf9",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&$selected:hover": {
      backgroundColor: "#c51162",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&:hover": {
      backgroundColor: "#90caf9",
      color: "white",
      "border-radius": "4px",
      "border-left": "4px solid rgb(240, 103, 103)",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    }
  },
  selected: {}
})(MuiListItem);
const useStyles = styled((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  }
}));
export default function NavBar({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: "none" })
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              ...(!open && { display: "none" })
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((route, index) => (
            <Link
              to={route.path}
              key={index}
              style={{
                textDecoration: "none",
                font: "Roboto",
                color: "#26c6da"
              }}
            >
              <ListItem
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
                key={index}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {route.icon}
                </ListItemIcon>
                <ListItemText
                  primary={route.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main>{children}</main>
    </Box>
  );
}
