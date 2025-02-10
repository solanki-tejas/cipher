import { lightTheme } from "./light-theme";
import { createTheme } from "@mui/material/styles";

// 🌞 Common Theme Variables
export const primaryColor = "#242331";
export const secondaryColor = "#2f0e07";
export const borderRadius = "10px";
export const fontFamily = "Poppins, sans-serif";
export const boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

// 🌙 Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#bb86fc" },
    secondary: { main: "#03dac6" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#b0b0b0" },
  },
  typography: lightTheme.typography, // Same typography settings
  components: {
    MuiCard: {
      styleOverrides: {
        root: { borderRadius, boxShadow, backgroundColor: "#1e1e1e" },
      },
    },
    MuiButton: {
      defaultProps: { size: "small", variant: "contained" },
      styleOverrides: {
        root: { borderRadius, textTransform: "none", padding: "8px 16px" },
      },
    },
    MuiFormControl: { styleOverrides: { root: { width: "100%" } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius } } },
    MuiTextField: {
      defaultProps: { size: "small" },
      styleOverrides: { root: { borderRadius } },
    },
    MuiSelect: {
      defaultProps: { size: "small" },
      styleOverrides: { root: { borderRadius } },
    },
    MuiInputBase: { styleOverrides: { root: { borderRadius } } },
    MuiCheckbox: {
      defaultProps: { size: "small" },
      styleOverrides: { root: { padding: 0, borderRadius } },
    },
    MuiRadio: { styleOverrides: { root: { borderRadius } } },
    MuiFormControlLabel: { styleOverrides: { root: { marginBottom: "8px" } } },
    MuiListItemIcon: { styleOverrides: { root: { minWidth: "32px" } } },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingTop: "5px",
          paddingBottom: "5px",
          "&.Mui-selected": { backgroundColor: "#3700b3", color: "white" },
          "&.Mui-selected:hover": {
            backgroundColor: "#3700b3",
            color: "white",
          },
          "&.Mui-selected .MuiSvgIcon-root": { color: "white" },
        },
      },
    },
    MuiTableHead: { styleOverrides: { root: { backgroundColor: "#1f1f1f" } } },
    MuiTableCell: { styleOverrides: { root: { padding: "10px" } } },
    MuiDrawer: {
      defaultProps: { anchor: "right" },
      styleOverrides: {
        paper: { width: "50vw", padding: "20px", backgroundColor: "#1e1e1e" },
      },
    },
  },
});
