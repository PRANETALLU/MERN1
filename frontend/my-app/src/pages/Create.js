import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Create = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    //const [file, setFile] = useState('');
    const [content, setContent] = useState('');

    const newPost = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // cookie will be considered as credentials and will be saved. not needed for signup.
            body: JSON.stringify({
                title,
                summary,
                content
            })
        })
        console.log(title);
        console.log(summary);
        //console.log(file);
        console.log(content);
    }

    return (
        <div className="create">
            <form onSubmit={newPost}>
                <Stack direction="column" sx={{ marginTop: 5 }}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        sx={{ marginTop: 2 }}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Summary"
                        variant="outlined"
                        sx={{ marginTop: 2 }}
                        value={summary}
                        onChange={e => setSummary(e.target.value)}
                    />
                    {/*<input type="file"
                        onChange = {e => {setFile(e.target.file)}}
                    />*/}
                    <ReactQuill
                        value={content}
                        onChange={newValue => setContent(newValue)}
                    />
                    <Button type="submit">
                        Create Post
                    </Button>
                </Stack>
            </form>
        </div>
    )
};

export default Create; 