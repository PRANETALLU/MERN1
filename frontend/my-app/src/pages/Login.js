import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../components/UserContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUserInfo} = useContext(UserContext);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        console.log("before login");
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // cookie will be considered as credentials and will be saved. not needed for signup.
            body: JSON.stringify({
                username,
                password
            })
        })
        console.log("response status: " + response.status);
        if (response.status == 200) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                navigate('/');
            });
        }
        else {
            alert('Login Unsuccessful');
        }
        console.log(username);
        console.log(password);

    }

    return (
        <div className="Login">
            <form onSubmit={login}>
                <Stack direction="column" alignItems="center">
                    <Typography sx={{ fontWeight: "bold", marginTop: 6 }}>Login to your account</Typography>
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