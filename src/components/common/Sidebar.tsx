import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Drawer,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useRouter } from "next/router";
import { AccountBox, Settings } from "@mui/icons-material";
import Image from "next/image";
import CipherLogo from "@/assets/Cipher_Logo.jpg";
import Face6Icon from "@mui/icons-material/Face6";

// Define the routes and nested items
const ROUTES = [
  {
    routeName: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
    items: [],
  },
  {
    routeName: "table",
    label: "Table",
    icon: <TableChartIcon />,
    path: "/table",
    items: [],
  },
  {
    routeName: "customer",
    label: "Customer",
    icon: <Face6Icon />,
    path: "/customer?page=1&take=10",
    items: [],
  },
  {
    routeName: "nested",
    label: "Nested Items",
    icon: <Settings />,
    path: "#", // Dummy path for the parent
    items: [
      {
        routeName: "item1",
        label: "Item 1",
        icon: <AccountBox />,
        path: "/nested/item1",
      },
      {
        routeName: "item2",
        label: "Item 2",
        icon: <Settings />,
        path: "/nested/item2",
      },
      {
        routeName: "settings",
        label: "Settings",
        icon: <Settings />,
        path: "/nested/settings",
      },
    ],
  },
];

const drawerWidth = 240;

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const theme = useTheme();
  const router = useRouter();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (routeName: string) => {
    setOpenSubmenu((prevState) => (prevState === routeName ? null : routeName));
  };

  const isActiveRoute = (route: string) => router.pathname === route;

  return (
    <div>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          transition: "width 0.3s",
          [`& .MuiDrawer-paper`]: {
            width: open ? drawerWidth : 0,
            transition: "width 0.3s",
            overflowX: "hidden",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <div className="flex justify-between items-center py-4 px-3 pt-7">
          <Image src={CipherLogo} height={50} width={50} alt="logo" />
          {/* <Typography
            variant="h6"
            sx={{ fontWeight: "600", color: theme.palette.primary.main }}
          >
            Cipher
          </Typography> */}
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
        </div>

        <List>
          {ROUTES.map((route) => (
            <div key={route.routeName}>
              {/* Main Item */}
              <Link href={route.path} passHref>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={isActiveRoute(route.path)}
                    onClick={() => {
                      if (route.items.length > 0)
                        handleSubmenuToggle(route.routeName);
                    }}
                  >
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText
                      primary={route.label}
                      className="whitespace-nowrap"
                    />
                    {route.items.length > 0 && (
                      <ListItemIcon sx={{ minWidth: "auto" }}>
                        {openSubmenu === route.routeName ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </ListItemIcon>
                    )}
                  </ListItemButton>
                </ListItem>
              </Link>

              {/* Nested Items */}
              {route.items.length > 0 && (
                <Collapse
                  in={openSubmenu === route.routeName}
                  timeout="auto"
                  unmountOnExit
                  className="ps-8"
                >
                  <List component="div" disablePadding>
                    {route.items.map((nestedRoute) => (
                      <Link
                        href={nestedRoute.path}
                        passHref
                        key={nestedRoute.routeName}
                      >
                        <ListItem disablePadding>
                          <ListItemButton
                            selected={isActiveRoute(nestedRoute.path)}
                          >
                            <ListItemIcon>{nestedRoute.icon}</ListItemIcon>
                            <ListItemText
                              primary={nestedRoute.label}
                              className="whitespace-nowrap"
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
