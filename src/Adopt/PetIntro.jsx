import { useState, useEffect } from "react";
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";



export const PetIntroComponent = () => {


    return(
        <Box sx={{ mt: 15, ml: 2 }}>
            <Grid container spacing={1}>
                <Grid item lg={4} sm={12}>
                  <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: 16 }}>Adopt a shelter cat or dog</Typography>
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6, marginBottom: 22 }}>Our adoptable cats and dogs are all spayed/neutered (kapon) and vaccinated. Because they lived a difficult life before being rescued, we need to be sure that they get adopted by loving humans and won’t be subjected to further cruelty or neglect. Here’s how to apply:</Typography>
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6 }}>
                    <ArticleOutlinedIcon />Submit the adoption application form  
                  </Typography>  
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6 }}>
                    <VideocamOutlinedIcon />Attend the Zoom interview  
                  </Typography>  
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6 }}>
                    <PetsOutlinedIcon />Meet our shelter animals in person  
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6 }}>
                    <FavoriteBorderOutlinedIcon />Visit your chosen pet to confirm your choice  
                  </Typography>  
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6 }}>
                    <MedicalServicesOutlinedIcon />Wait for vet clearance and schedule pick up  
                  </Typography>  
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6 }}>
                    <MonetizationOnOutlinedIcon />Pay the adoption fee of P500 (cat) / P1000 (dog)  
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "justify", lineHeight: 1.6 }}>
                    <HomeOutlinedIcon />Pay the adoption fee of P500 (cat) / P1000 (dog)  
                  </Typography>  
                </Grid>
                <Grid item lg={8} sm={12}>
                    <img src="img/straydog.jpg" alt="Stray Dog" height={380} width="200" />
                    <img src="img/straycat.jpg" alt="Stray Cat" height={380} width="200" />
                    <img src="img/catdog.jpg" alt="Stray Cat and Dog" height={380} width="340" />
                </Grid>
            </Grid>
        </Box>
    );
};