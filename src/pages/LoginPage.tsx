import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5">Login</Typography>

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

        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;