import { Button, TextField, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import CatImage from "@/assets/Cat_Login.svg";
import MessageImage from "@/assets/Message_Login.svg";
import { useRouter } from "next/router";

const LoginContainer = styled("div")({
  display: "flex",
  height: "100vh",
  width: "100%",
});

const IllustrationContainer = styled("div")({
  flex: 1.5, // More width for illustration
  background: "linear-gradient(135deg, #242331, #2f0e07)", // Gradient matching theme
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
  padding: "40px",
});

const FormContainer = styled(Paper)({
  flex: 1, // Less width for form
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius: "10px",
});

export default function LoginPage() {
  const router = useRouter();
  const navigateDashboard = () => router.push("/");
  return (
    <LoginContainer>
      {/* Left Illustration */}
      <IllustrationContainer>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            CIPHER
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8, mt: 1 }}>
            Secure Your Future
          </Typography>
          <Image
            src={MessageImage}
            alt="Illustration"
            style={{ width: "100%", maxWidth: "400px", marginTop: "20px" }}
          />
        </Box>
      </IllustrationContainer>

      {/* Right Login Form */}
      <FormContainer elevation={3}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome Back!
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.7, mb: 4 }}>
          Log in to access your account
        </Typography>
        <div>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ py: 1.5 }}
            onClick={navigateDashboard}
          >
            Sign In
          </Button>
        </div>
        <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
          Don't have an account? <a href="#">Sign up</a>
        </Typography>
      </FormContainer>
    </LoginContainer>
  );
}
