import { useParams } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import {UserContext} from '../components/UserContext';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";

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

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const {userInfo} = useContext(UserContext);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3001/post/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setPosts(data);
      console.log("Raw Data: " + JSON.stringify(data));
    })();
  }, []);

  console.log("User: " + userInfo?.id);
  console.log("Author: " + posts.author?._id);
  console.log("If true: " + userInfo?.id===posts.author?._id);

  return (
    <div classname="PostPage">
      <Stack direction="column">
        <Typography>{posts.title}</Typography>
        <Typography>By {posts.author?.username}</Typography>
        {userInfo?.id === posts.author?._id && (
          <Link to={`/edit/${id}`}><Button>Edit the Post</Button></Link>
        )}
        <img src={posts.image}></img>
        <Typography>{posts.content}</Typography>
      </Stack>
    </div>
  )
}

export default PostPage; 