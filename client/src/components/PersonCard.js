import { React } from 'react';
import { Card, Box, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const imageRoute = process.env.NODE_ENV === "production" ? "https://spatialtest.grit.ucsb.edu/images/" : "http://localhost:3001/images/"

function PersonCard(props) {
    
    const {details, renderPerson} = props
    const title = details.title
       

    return (
        <Grid item xs={10} sm={8} md={4}>
            <CardActionArea onClick={() => {renderPerson(details)}}>
                <Card sx={{ width: "100%" }}>
                <Box
                sx={{
                    position: 'relative',
                    paddingTop: '95%', // Aspect ratio 16:9
                }}
            >
                <CardMedia
                    component="img"
                    alt={`${details.firstName} ${details.lastName} headshot`}
                    src={imageRoute + details.image}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {details.firstName} {details.lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                                {title}
                        </Typography>
                        {/* {title.map((title) => (
                            <Typography variant="body2" color="text.secondary">
                                {title}
                            </Typography> */}

                        {/* ))} */}
                        
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
            </Card>
            </CardActionArea>
        </Grid>
      );

}

export default PersonCard
