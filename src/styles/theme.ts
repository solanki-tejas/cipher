import { createTheme } from "@mui/material/styles";

// Updated color variables
// export const primaryColor = "#2f0e07"; // Updated primary color
// export const secondaryColor = "#414833"; // Updated secondary color
export const primaryColor = "#242331"; // Updated primary color
export const secondaryColor = "#2f0e07"; // Updated secondary color
export const borderRadius = "10px"; // Border radius for rounded corners
export const fontFamily = "Poppins, sans-serif"; // Font family
export const backgroundColor = "#f4f7fe"; // Background color
export const textColor = "#444444"; // Text color
export const boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, // Using the updated primary color
    },
    secondary: {
      main: secondaryColor, // Using the updated secondary color
    },
    background: {
      default: backgroundColor, // Using background color variable
    },
    text: {
      primary: textColor, // Using text color variable
    },
  },
  typography: {
    fontFamily: fontFamily, // Using font family variable
    h1: {
      fontSize: "2.25rem",
      "@media (max-width:600px)": { fontSize: "1.75rem" },
    }, // Section headings
    h2: {
      fontSize: "1.875rem",
      "@media (max-width:600px)": { fontSize: "1.5rem" },
    }, // Large headings
    h3: {
      fontSize: "1.5rem",
      "@media (max-width:600px)": { fontSize: "1.25rem" },
    }, // Titles
    h4: {
      fontSize: "1.25rem",
      "@media (max-width:600px)": { fontSize: "1.125rem" },
    }, // Subtitles
    h5: {
      fontSize: "1.125rem",
      "@media (max-width:600px)": { fontSize: "1rem" },
    }, // Smaller subtitles
    h6: {
      fontSize: "1rem",
      "@media (max-width:600px)": { fontSize: "0.875rem" },
    }, // Default text
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": { fontSize: "0.875rem" },
    }, // Main text
    body2: {
      fontSize: "0.875rem",
      "@media (max-width:600px)": { fontSize: "0.75rem" },
    }, // Secondary text
    caption: {
      fontSize: "0.75rem",
      "@media (max-width:600px)": { fontSize: "0.625rem" },
    }, // Smallest text
    button: { fontSize: "0.875rem", textTransform: "none" }, // Button text
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius,
          boxShadow,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: borderRadius, // Rounded corners for buttons
          textTransform: "none", // Avoid uppercasing text in buttons
          padding: "8px 16px", // Adjust button padding
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          //   height: "50px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          borderRadius: borderRadius, // Rounded corners for text fields
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius, // Rounded corners for select input
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius, // Rounded corners for input base
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius, // Rounded corners for checkboxes
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius, // Rounded corners for radio buttons
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginBottom: "8px", // Adjust spacing for form control labels
        },
      },
    },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: "0.875rem", // Default font size
    //     },
    //   },
    // },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "32px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingTop: "5px",
          paddingBottom: "5px",
          "&.Mui-selected": {
            backgroundColor: secondaryColor,
            color: "white",
          },
          "&.Mui-selected:hover": {
            backgroundColor: secondaryColor,
            color: "white",
          },
          "&.Mui-selected .MuiSvgIcon-root": {
            color: "white",
          },
        },
      },
    },
    // MuiListItemText:{
    //   styleOverrides:{
    //     primary:{
    //       fontSize:"0.9rem !important"
    //     }
    //   }
    // }
  },
});

export default theme;
