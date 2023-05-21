import { useParams } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import UserContext from '../components/UserContext.js';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/post/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setTitle(data.title);
            setSummary(data.summary);
            setImage(data.image);
            setContent(data.content);
        })();
    }, []);

    const updatePost = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/post', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', 
            body: JSON.stringify({
                id,
                title,
                summary,
                content,
                image
            })
        })
        if(response.ok) {
            navigate("/"); 
        }
        else {
            alert("No proper update");
        }
    }
    
    return (
        <div className="EditPage">
            <form onSubmit={updatePost}>
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
                        sx={{ marginTop: 1, marginLeft: 2, width: 1300 }}
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
                        Update Post
                    </Button>
                </Stack>

            </form>
        </div>
    )
}

export default EditPage; 