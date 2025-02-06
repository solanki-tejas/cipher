import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import theme from "@/styles/theme";
import Layout from "@/components/layouts/Layout";

const queryClient = new QueryClient();
// const darkTheme = createTheme({ palette: { mode: "light" } });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
