import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
// import theme from "@/styles/theme";
import Layout from "@/components/layouts/Layout";
import { ThemeProviderWrapper } from "@/contexts/ThemeProvider";
import { useRouter } from "next/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries globally
    },
  },
});
// const darkTheme = createTheme({ palette: { mode: "light" } });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuth = router.pathname.includes("auth");
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProviderWrapper>
        {isAuth ? (
          <>
            <CssBaseline />
            <Component {...pageProps} />
          </>
        ) : (
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProviderWrapper>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
}
