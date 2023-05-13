import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <div className="Header">
            <Stack direction="row" justifyContent="center">
                <Typography variant="h3" gutterBottom
                sx={{marginTop: 3, marginRight: 120}}>
                    WebBlog
                </Typography>
                <Button sx={{marginTop: 1, marginRight: 4}}>
                    Login
                </Button>
                <Button sx={{marginTop: 1, marginRight: 8}}>
                    Logout
                </Button>
            </Stack>
        </div>
    );
}

export default Header; 