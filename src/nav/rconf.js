import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import InsightsIcon from "@mui/icons-material/Insights";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import InputIcon from "@mui/icons-material/Input";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import TransformIcon from "@mui/icons-material/Transform";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AirIcon from "@mui/icons-material/Air";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import SettingsIcon from "@mui/icons-material/Settings";
export const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <DashboardCustomizeIcon />
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <InsightsIcon />
  },
  {
    path: "/compute",
    name: "Compute",
    icon: <DeviceHubIcon />
  },
  {
    path: "/dataconfig",
    name: "Dataconfig",
    icon: <PermDataSettingIcon />
  },
  {
    path: "/ingestion",
    name: "Ingestion",
    icon: <InputIcon />
  },
  {
    path: "/tables",
    name: "Tables",
    icon: <BackupTableIcon />
  },
  {
    path: "/transformation",
    name: "Transformation",
    icon: <TransformIcon />
  },
  {
    path: "/validation",
    name: "Validation",
    icon: <BeenhereIcon />
  },
  {
    path: "/sql",
    name: "SQL",
    icon: <QueryBuilderIcon />
  },
  {
    path: "/jobs",
    name: "Jobs",
    icon: <AirIcon />
  },
  {
    path: "/tasks",
    name: "Tasks",
    icon: <ListAltIcon />
  }
];

export const userroutes = [
  {
    path: "/workspaces",
    name: "Workspace",
    icon: <WorkspacesIcon />,
    isloginRequire: true
  },

  {
    path: "/usersettings",
    name: "Settings",
    icon: <SettingsIcon />,
    isloginRequire: true
  }
];
