import { createTheme } from "@mui/material/styles";

// 🌞 Common Theme Variables
export const primaryColor = "#242331";
export const secondaryColor = "#2f0e07";
export const borderRadius = "10px";
export const fontFamily = "Poppins, sans-serif";
export const boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

// 🌞 Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
    background: { default: "#f4f7fe", paper: "#ffffff" },
    text: { primary: "#444444", secondary: "#666666" },
  },
  typography: {
    fontFamily,
    h1: {
      fontSize: "2.25rem",
      "@media (max-width:600px)": { fontSize: "1.75rem" },
    },
    h2: {
      fontSize: "1.875rem",
      "@media (max-width:600px)": { fontSize: "1.5rem" },
    },
    h3: {
      fontSize: "1.5rem",
      "@media (max-width:600px)": { fontSize: "1.25rem" },
    },
    h4: {
      fontSize: "1.25rem",
      "@media (max-width:600px)": { fontSize: "1.125rem" },
    },
    h5: {
      fontSize: "1.125rem",
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    h6: {
      fontSize: "1rem",
      "@media (max-width:600px)": { fontSize: "0.875rem" },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": { fontSize: "0.875rem" },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (max-width:600px)": { fontSize: "0.75rem" },
    },
    caption: {
      fontSize: "0.75rem",
      "@media (max-width:600px)": { fontSize: "0.625rem" },
    },
    button: { fontSize: "0.875rem", textTransform: "none" },
  },
  components: {
    MuiCard: { styleOverrides: { root: { borderRadius, boxShadow } } },
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
          "&.Mui-selected": { backgroundColor: secondaryColor, color: "white" },
          "&.Mui-selected:hover": {
            backgroundColor: secondaryColor,
            color: "white",
          },
          "&.Mui-selected .MuiSvgIcon-root": { color: "white" },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: { root: { backgroundColor: primaryColor } },
    },
    MuiTableCell: { styleOverrides: { root: { padding: "10px" } } },
    MuiDrawer: {
      defaultProps: { anchor: "right" },
      styleOverrides: { paper: { width: "50vw", padding: "20px" } },
    },
  },
});

