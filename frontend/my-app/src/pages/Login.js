import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);

    }

    return (
        <div className="Login">
            <form onSubmit={login}>
                <Stack direction="column" alignItems="center">
                    <Typography sx={{ fontWeight: "bold", marginTop: 3 }}>Login to your account</Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        sx={{ marginTop: 3 }}

                        onChange={e => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        sx={{ marginTop: 3 }}

                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button variant="contained" sx={{ marginTop: 3 }} type="submit">Login</Button>
                </Stack>
            </form>
        </div>
    )
}

export default Login; 