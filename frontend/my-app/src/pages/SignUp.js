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
        const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        })
        if(response.status == 200) {
            alert('Registration Successful');
        }
        else {
            alert('Registration Unsuccessful');
        }
        console.log(username);
        console.log(password);
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
                    <Button variant="contained" sx={{ marginTop: 3 }} type="submit">Sign Up</Button>
                </Stack>
            </form>
        </div>
    )
}

export default SignUp; 