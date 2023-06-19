import { useState, useEffect } from "react";
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";

export const DisabledTabs = () => {
    const [pets, setPets] = useState([]);
    const [about, setAbout] = useState([]);
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/pets")
        .then((response) => setPets(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/abouts")
        .then((response) => setAbout(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
          <Tab label="All" />
          <Tab label="Dog" disabled={value === 1} />
          <Tab label="Cat" disabled={value === 2} />
        </Tabs>
        {value === 0 && (
          <Box sx={{ mt: 3, display: "flex",
          flexDirection: "row",
          alignItems: "center", }}>
            {pets.map((pet) => (
              <Box key={pet.id} sx={{ mb: 2 }}>
                 <Link to={`/pet/${pet._id}`}>
                  <img src="#" alt={pet.name} style={{ marginRight: 60 }}/>
                </Link>
              </Box>
            ))}
          </Box>
        )}
        {/* {value === 1 && (
          <Box sx={{ mt: 3 }}>
            {dogCharacteristics.map((characteristic) => (
              <Box key={characteristic.id} sx={{ mb: 2 }}>
                <Typography variant="h6">{characteristic.characteristic}</Typography>
              </Box>
            ))}
          </Box>
        )} */}
      </Box>
    );
  };
  
  