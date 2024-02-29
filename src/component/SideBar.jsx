
import {styled,useTheme} from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import { CoPresentOutlined, DisplaySettingsOutlined, HomeOutlined, IntegrationInstructionsOutlined, PeopleOutline, ScatterPlotOutlined, SettingsOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from '@mui/material/colors'; 


const drawerWidth = 240;

const Array1=[
    { 'text':'Dashboard','icon':<HomeOutlined/>,'path':'/Dashboard' },
    { 'text':'Services','icon':<DisplaySettingsOutlined/>,'path':'/Services' },
    { 'text':'Action','icon':<ScatterPlotOutlined/>,'path':'/Action' },
    { 'text':'Integration','icon':<IntegrationInstructionsOutlined/>,'path':'/Integration' },
    { 'text':'Users','icon':<PeopleOutline/>,'path':'/Users' },
    { 'text':'Agent','icon':<CoPresentOutlined/>,'path':'/Agent' },
    { 'text':'Settings','icon':<SettingsOutlined/>,'path':'/Settings' }
];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// eslint-disable-next-line react/prop-types
const SideBar = ({open,handleDrawerClose}) => {
    let location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {Array1.map((item) => (
              <ListItem key={item.key} disablePadding sx={{ display:"block" }}>
                <ListItemButton
                  onClick={() => {
                    // instruction for went to the path in each item
                    navigate(item.path);
                  }
                  }
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor: location.pathname === item.path 
                    ? theme.palette.mode==="dark" 
                    ? grey[800] : grey[400] : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
    )
}

export default SideBar;