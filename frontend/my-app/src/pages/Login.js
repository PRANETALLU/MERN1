import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async(e) => {
        e.preventDefault();
    }

    return (
        <div className="Login">
            <Stack direction="column" alignItems="center">
                <form onSubmit={login}> 
                <Typography sx={{fontWeight: "bold", marginTop: 3}}>Login</Typography>
                <TextField 
                    label="Username" 
                    variant="outlined" 
                    sx={{marginTop: 3}}
                    onChange = {e => setUsername(e.target.value)}
                />
                <TextField 
                    label="Password" 
                    variant="outlined" 
                    sx={{marginTop: 3}}
                    onChange = {e => setPassword(e.target.value)}
                />
                <Button variant="contained" sx={{marginTop: 3}}>Login</Button>
                </form>
            </Stack>
        </div>
    )
}

export default Login; 