import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Post from './Post';
import { useEffect } from 'react';
import { useState } from 'react';

const PostFormat = {
  _id: '',
  author: {
    _id: '',
    username: ''
  },
  content: '',
  image: '',
  summary: '',
  title: '',
}

const Main = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      (async () => {
        const response = await fetch('http://localhost:3001/post', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setPosts(data.postList);
        console.log("Raw Data: " + JSON.stringify(data));
      })();
    }, []);
     
    

    const postLists = posts.map((PostFormat) => {
        return <Post _id={PostFormat._id} title={PostFormat.title} summary={PostFormat.summary} author={PostFormat.author.username} url={PostFormat.image} />
    });

    return (
        <div className="Main">
            {posts.length > 0 ? postLists : <p>Nothing</p>}
        </div>
    )
}

export default Main; 