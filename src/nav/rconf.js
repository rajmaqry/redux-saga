import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import InsightsIcon from "@mui/icons-material/Insights";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import InputIcon from "@mui/icons-material/Input";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import TransformIcon from "@mui/icons-material/Transform";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
export const routes = [
  {
    path: "/",
    name: "/dashboard",
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
  }
];
