import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return(
        <div className="Footer">
            <a href="https://github.com/PRANETALLU/MERN1" target="_blank"><GitHubIcon sx={{marginTop: 2, marginLeft: 90, width: 45, height: 45}}></GitHubIcon></a>
        </div>
    )
}

export default Footer; 