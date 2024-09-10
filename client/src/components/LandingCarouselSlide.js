import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function LandingCarouselSlide(props) {
  const { post } = props;

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Box
            sx={{
              position: 'relative',
              paddingX: {
                xs: "30px",
                sm: "35px",
                md:"50px"
              },
              paddingTop: {
                xs: "50px"
              },
              maxWidth: '600px' 
            }}
          >
            
            <Typography variant="h1" color="inherit" mb={3} align='left'>
              {post.title}
            </Typography>
            <Typography variant="h4" color="inherit" paragraph align='left' marginTop='20px'>
              {post.description}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

LandingCarouselSlide.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    // imageText: PropTypes.string.isRequired,
    // linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingCarouselSlide;