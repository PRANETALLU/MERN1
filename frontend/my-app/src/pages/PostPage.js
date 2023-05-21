import { useParams } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { UserContext } from '../components/UserContext';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

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

  const deletePost = async (e) => {
    console.log("deleting");
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    if (response.ok) {
      navigate('/');
    }
    else {
      alert("Unsuccessful Deletion");
    }
  }

  console.log("User: " + userInfo?.id);
  console.log("Author: " + posts.author?._id);
  console.log("If true: " + userInfo?.id === posts.author?._id);

  return (
    <div classname="PostPage">
      <Stack direction="column" sx={{ alignItems: "center" }}>
        <Typography variant="h2" gutterBottom>{posts.title}</Typography>
        <Typography variant="h4" gutterBottom>By {posts.author?.username}</Typography>
        {userInfo?.id === posts.author?._id && (
          <Stack direction="row">
            <Link to={`/edit/${id}`}><Button variant="contained" sx={{ backgroundColor: "black", marginBottom: 2, height: 37, width: 143 }}>Edit the Post</Button></Link>
            <Button variant="contained" onClick={deletePost} sx={{ marginLeft: 1, backgroundColor: "red", height: 37, width: 140 }}>Delete Post</Button>
          </ Stack>

        )}
        <img src={posts.image} id="postImage"></img>
        <Typography variant="body1" sx={{ marginTop: 2, fontSize: 18 }}>{posts.content}</Typography>
      </Stack>
    </div>
  )
}

export default PostPage; 