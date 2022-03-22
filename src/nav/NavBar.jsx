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
import Typography from "@mui/material/Typography";
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
  "& .MuiPaper-root": { top: "60px" },
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
      backgroundColor: "red !important",
      color: "white",
      "border-right": "5px solid #66bb6a",
      "& .MuiListItemIcon-root": {
        color: "white"
      },
      "& MuiListItem-root.Mui-selected": {
        backgroundColor: "red"
      }
    },
    "&$selected:hover": {
      backgroundColor: "#c51162 !important",
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
        color: "black"
      }
    }
  },
  selected: {}
})(MuiListItem);
const useStyles = styled((theme) => ({
  toolbar: theme.mixins.toolbar,
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
  const [hover, sethover] = React.useState(false);
  return (
    <Box sx={{ display: "flex" }} style={{ "margin-top": "70px" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
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
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{
              ...(!open && { display: "none" })
            }}
          >
            D a t a E n g i n e e r i n g
          </Typography>
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
                  onMouseOver={() => sethover(true)}
                  onMouseOut={() => sethover(false)}
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
      <main style={{ "margin-top": "0px" }}>{children}</main>
    </Box>
  );
}
