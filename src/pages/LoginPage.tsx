import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, Checkbox, FormControlLabel } from "@mui/material";
import * as authService from "../services/authService";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await authService.loginApi(username, password, rememberMe);

      localStorage.setItem("token", data.token);
      navigate("/tasks");

    } catch (err) {
      setErrorMessage("Wrong username or password");
      console.error(err);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 20, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h4">Welcome Back!</Typography>

        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />

        <Typography color="red">{errorMessage}</Typography>

        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
          }
          label="Remember Me"
        />

        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;