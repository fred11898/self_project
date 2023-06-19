import { useState, useEffect } from "react";
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";
import { useParams } from "react-router-dom";

export const PetInfoComponent = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [about, setAbout] = useState(null);

    useEffect(() => {
        const getPetInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/pet/${id}`);
                setPet(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getPetInfo();
    }, [id]);

    useEffect(() => {
        const getAbout = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/abouts/${id}`);
                setAbout(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getAbout();
    }, [id]);

    if (!pet) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ mt: 15 }}>
            <Grid container spacing={1}>
                <Grid item lg={8}>
                    <Typography variant="h6">Name: {pet.name}</Typography>
                    <Typography variant="h6">Gender: {pet.gender}</Typography>
                    <Typography variant="h6">Age: {pet.age}</Typography>
                    <Typography variant="h6">Description: {about ? about.description : "No description available"}</Typography>
                    <Typography variant="h6">Characteristic: {about ? about.characteristic : "No characteristics available"}</Typography>

                </Grid>
                <Grid item lg={4}>

                </Grid>
            </Grid>
        </Box>
    );
};
