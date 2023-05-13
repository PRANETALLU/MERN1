import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

const Main = () => {
    return (
        <div className="Main">
            <div className="post">
                <Container maxWidth="sm" sx={{ marginTop: 3 }}>
                    <Stack direction="row">
                        <img src="https://media.istockphoto.com/id/1338011657/photo/the-word-blog-arranged-from-wooden-blocks-placed-on-a-white-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=MC6h9IhzFiWTFDOgeD1hsQQM5OJId6SWwVO8K7Fup-8="></img>
                        <Stack direction="column" sx={{ marginTop: 1, marginLeft: 2 }}>
                            <Typography variant="h3">Full-house battery</Typography>
                            <Stack direction="row" >
                                <Typography sx={{fontSize: 20}}>Author</Typography>
                                <Typography sx={{fontSize: 20, marginLeft: 5}}>Time</Typography>
                            </Stack>
                            <Typography>Today at its special launch event there is something that needs
                                to be remembered. It is indeed a honor to congregate in this special screeening
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}

export default Main; 