import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signup = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="Signup">
            <form onSubmit={signup}>
                <Stack direction="column" alignItems="center">
                    <Typography sx={{ fontWeight: "bold", marginTop: 3 }}>Register for an account</Typography>
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
                    <Button variant="contained" sx={{ marginTop: 3 }}>Sign Up</Button>
                </Stack>
            </form>
        </div>
    )
}

export default SignUp; 