import { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Box, Checkbox, FormControlLabel } from "@mui/material";
import { loginApi } from "../services/authService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);


  const handleLogin = async () => {
    try {
      const data = await loginApi(username, password, rememberMe);

      localStorage.setItem("token", data.token);
      navigate("/tasks");

    } catch (err: any) {
      console.error(err);
    }
  };

  const handleChangeRememberMe = () => {
    setRememberMe(prev => !prev);
  }

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
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleChangeRememberMe}
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