import { Box, Typography } from '@mui/material'
import React from 'react';

const About = () => {
  return (
    <><div>
      <Box display='flex' flexDirection='column' alignItems='center '>
        <Typography sx={{ fontFamily: 'fantasy' }} variant="h2">This is a BOOK SHELF Application </Typography>
        <Typography sx={{ fontFamily: 'fantasy', color: "#2A4E6B" }} variant="h3"> By <a href="http://medtechit.co.uk/"> MEDTECH IT </a> Consultancy </Typography>
      </Box>
    </div><div>

    <Box display='flex' flexDirection='column' alignItems='center'>          
<div className='med'>
<p> 
How do I add the favorites books and update them through MEDTECH Book Shelf ? </p> 
<p>         
<b>Follow these steps:</b>
<p> Click to open  <a href= "http://localhost:3000/books" > All Books</a>  on  MED Book Shelf </p>
<p> Check if here is not your favorite book. Let's say it's not; </p>
<p>Quickly go to  <a href="http://localhost:3000/add"> Add Books</a>  page. </p>
<p>Observe the form which will let you to add your favorite one. </p>
<p> Enter the required information that has been asked.</p>
<p>Once you click the button can see your favorite book at the bottom of the<a href= "http://localhost:3000/books" > list.</a> </p>
<p>Enjoy with the list and share with your loved ones. </p>
<p color="#2A4E6B"> The Best :) </p>

</p>
 </div>   
 </Box>
</div></>

  );
};
export default About;