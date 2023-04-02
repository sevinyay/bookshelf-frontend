import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
    <Box display='flex' flexDirection='column'  alignItems='center '> 
    <Typography  sx={{fontFamily:'fantasy'}} variant="h2">This is a CRUD Application </Typography>
    <Typography sx={{fontFamily:'fantasy', color:"#2A4E6B" }} variant="h3"> By MEDTECH IT CONSULTANCY </Typography>         
    </Box>
    </div>
  );
};
export default About;