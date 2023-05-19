import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, author, url }) => {
    return (
        <div className="post">
            <Container maxWidth="sm" sx={{ marginTop: 3 }}>
                <Stack direction="row">
                    <img src={url}></img>
                    <Stack direction="column" sx={{ marginTop: 1, marginLeft: 2 }}>
                        <Link to={`/post/${_id}`}><Typography variant="h3">{title}</Typography></Link>
                        <Stack direction="row" >
                            <Typography sx={{ fontSize: 20 }}>{author}</Typography>
                            {/*<Typography sx={{fontSize: 20, marginLeft: 5}}>Time</Typography>*/}
                        </Stack>
                        <Typography>{summary}
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}

export default Post;

// https://media.istockphoto.com/id/1338011657/photo/the-word-blog-arranged-from-wooden-blocks-placed-on-a-white-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=MC6h9IhzFiWTFDOgeD1hsQQM5OJId6SWwVO8K7Fup-8=