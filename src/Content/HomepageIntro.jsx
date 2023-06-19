import { Box, 
        Grid,  
        Typography,
        ButtonBase } from "@mui/material";
import { styled } from '@mui/material/styles';

const images = [
    {
      url: 'img/neuter.jpg',
      title: 'Kapon',
      width: '40%',
    },
    {
      url: 'img/meetOurCat.jpg',
      title: 'Adopt',
      width: '30%',
    },
    {
      url: 'img/donate.jpg',
      title: 'Donate',
      width: '30%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

export const HomepageIntro = () => {
    return (
        <Box sx = {{ mt: 5 }}>
            <Typography variant="h2" style={{ fontFamily: "Paws", marginBottom: 25 }}>ABOUT</Typography>
            <Grid container spacing={1}>
                <Grid item lg={6} md={12} >
                    <Box>
                        <img src="img/missionBackground.webp" 
                        alt="dogs" 
                        style={{ 
                            height: 450, 
                            width: 500, 
                            borderRadius: 10 }}  />
                    </Box>
                </Grid>
                <Grid item lg={5} md={12}>
                    <Box>
                        <Typography variant="h4" 
                        style={{ fontFamily: "Myriad", 
                                 fontWeight: "bold", 
                                 marginBottom: 12 
                                 }}
                        >Ending Pet Homelessness</Typography>

                        <Typography variant="body1" 
                                    style={{ 
                                        textAlign: "justify" 
                                        }}
                        >By choosing to adopt a pet, you're not just adding to your family - you're making a positive impact on the world. Ending pet homelessness starts with each of us making a commitment to adopt, foster, and support animal welfare organizations. Together, let's make a difference and give every pet the loving home they deserve.</Typography>

                        <Typography variant="h6" 
                                    style={{ fontWeight: "bold", 
                                             marginTop: 22 
                                             }}
                        >Be part of the solution. Support our Program.</Typography>
                      <Box sx={{ display: 'flex', 
                                 flexWrap: 'wrap', 
                                 minWidth: 300, 
                                 width: '100%' }}
                                 >
                          {images.map((image) => (
                              <ImageButton
                              focusRipple
                              key={image.title}
                              style={{
                                  width: image.width,
                              }}
                              >
                              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                              <ImageBackdrop className="MuiImageBackdrop-root" />
                              <Image>
                                  <Typography
                                  component="span"
                                  variant="subtitle1"
                                  color="inherit"
                                  sx={{
                                      position: 'relative',
                                      p: 4,
                                      pt: 2,
                                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                  }}
                                  >
                                  {image.title}
                                  <ImageMarked className="MuiImageMarked-root" />
                                  </Typography>
                              </Image>
                              </ImageButton>
                          ))}
                      </Box>

                    </Box>   
                </Grid>
            </Grid>
        </Box>
    );
};

