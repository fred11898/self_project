import { Box, Grid, Typography, Fab } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export const ContactUsComponent = () => {
  return (
    <Box sx={{ mt: 5 }}>
        <Typography variant="h2" style={{ fontFamily: "Paws", marginBottom: 25 }}>Contact us</Typography>
      <Grid container spacing={4}>
        <Grid item lg={5} xs={12}>
            <Fab variant="extended" color="primary" aria-label="add" style={{ marginBottom: 15 }}>    
                <LocationOnOutlinedIcon sx={{ mr: 1 }} /> Location:        
            </Fab>
    
            <Typography variant="h4">Bignay, Valenzuela</Typography>
          <Box>
            <Fab variant="extended" color="primary" aria-label="add" style={{ marginBottom: 15 }}>    
               <EmailOutlinedIcon sx={{ mr: 1 }} /> Email:        
            </Fab>
            <Typography variant="body1">straypals@gmail.com</Typography>
          </Box>
          <Box>
            <LoadScript googleMapsApiKey="AIzaSyD33ILf4O8TGVbdkM4nIoe3FFJD9PmJVRg">
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} />
            </LoadScript>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

