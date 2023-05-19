import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import {UserContext} from "./UserContext";

const Header = () => {
    const {userInfo, setUserInfo} = useContext(UserContext);
    // then or await same thing
    useEffect(() => {
        fetch('http://localhost:3001/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    const logout = () => {
        fetch('http://localhost:3001/logout', {
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    console.log("Does it exist: " + userInfo?.username);

    return (
        <div className="Header">
            <Stack direction="row" justifyContent="center">
                <Button href="/">
                    <Typography variant="h3" gutterBottom
                        sx={{ marginTop: 3, marginRight: 120 }}>
                        WebBlog
                    </Typography>
                </Button>
                {username && (<>
                    <Button sx={{ marginTop: 1, marginRight: 4 }} href="/create">
                        Create
                    </Button>
                    <Button sx={{ marginTop: 1, marginRight: 8 }} onClick={logout} href="/login">
                        Logout
                    </Button>
                </>)}
                {!username && (<>
                    <Button sx={{ marginTop: 1, marginRight: 4 }} href="/login">
                        Login
                    </Button>
                    <Button sx={{ marginTop: 1, marginRight: 8 }} href="/signup">
                        Signup
                    </Button> </>)}
            </Stack>
        </div>
    );
}

export default Header; 