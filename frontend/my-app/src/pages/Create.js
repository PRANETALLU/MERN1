import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {UserContext} from "../components/UserContext";
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const {userInfo, setUserInfo} = useContext(UserContext);
    const navigate = useNavigate();
    
    console.log(userInfo?.username);

    const newPost = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // cookie will be considered as credentials and will be saved. not needed for signup.
            body: JSON.stringify({
                title,
                summary,
                content,
                image
            })
        })
        console.log(title);
        console.log(summary);
        console.log(content);
        console.log(image);
        
        if(response.ok) {
            navigate('/');
        }

        setTitle('');
        setSummary('');
        setImage('');
        setContent('');
    }

    return (
        <div className="create">
            <form onSubmit={newPost}>
                <Stack direction="column" sx={{ marginTop: 5, justifyContent: "center" }}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        sx={{ marginTop: 1, marginLeft: 2, width: 1300 }}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Summary"
                        variant="outlined"
                        sx={{  marginTop: 1, marginLeft: 2, width: 1300 }}
                        value={summary}
                        onChange={e => setSummary(e.target.value)}
                    />
                    <TextField
                        label="Image URL"
                        variant="outlined"
                        sx={{ marginTop: 1, marginLeft: 2, width: 1300, marginBottom: 2 }}
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                    <ReactQuill
                        className='react-quill'
                        value={content}
                        onChange={newValue => setContent(newValue)}
                    />
                    <Button type="submit" variant="contained" sx={{width: 140, height: 35, marginTop: 8, marginLeft: 80}}> 
                        Create Post
                    </Button>
                </Stack>
            </form>
        </div>
    )
};

export default Create; 