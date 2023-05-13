import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <div className="Header">
            <Stack direction="row" justifyContent="center">
                <Button href="/">
                    <Typography variant="h3" gutterBottom
                        sx={{ marginTop: 3, marginRight: 120 }}>
                        WebBlog
                    </Typography>
                </Button>
                <Button sx={{ marginTop: 1, marginRight: 4 }} href="/login">
                    Login
                </Button>
                <Button sx={{ marginTop: 1, marginRight: 8 }} href="/signup">
                    Signup
                </Button>
            </Stack>
        </div>
    );
}

export default Header; 