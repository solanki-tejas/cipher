import {
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { borderRadius, boxShadow } from "@/styles/theme";
import { useState } from "react";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Header({ open, setOpen }: HeaderProps) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed w-full z-10 px-6 pt-4">
      <AppBar
        position="relative"
        sx={{
          width: open ? `calc(100% - 240px)` : "100%",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: boxShadow,
          borderRadius: borderRadius,
          transition: "width 0.3s, margin 0.3s",
        }}
      >
        <Toolbar className="flex justify-between">
          <div className="flex items-center">
            {!open && (
              <IconButton
                onClick={() => setOpen(true)}
                edge="start"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  marginRight: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "800",
                color: theme.palette.primary.main,
              }}
              className="uppercase"
            >
              Cipher
            </Typography>
          </div>
          <div className="flex items-center">
            <IconButton onClick={handleMenuOpen} sx={{ padding: 0 }}>
              <Avatar sx={{ backgroundColor: theme.palette.primary.main }}>
                {/* Profile initial or icon */}
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  borderRadius: "8px",
                  width: "200px", // Adjust width here
                },
              }}
              anchorOrigin={{
                vertical: "bottom", // Open at the bottom of the Avatar
                horizontal: "left", // Align to the left of the Avatar
              }}
              transformOrigin={{
                vertical: "top", // Align the top of the menu with the bottom of the Avatar
                horizontal: "left", // Align the left of the menu with the Avatar
              }}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
