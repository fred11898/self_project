import { Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";

const CountUp = ({ targetNumber }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 0); // adjust this to control animation speed

        return () => clearInterval(interval);
    }, []);

    const formattedCount = count.toLocaleString();

    return formattedCount <= targetNumber ? formattedCount : targetNumber.toLocaleString();
};

export const OurImpactComponent = () => {
    return(
        <Box sx={{ mt: 5, alignItems: "center" }}>
            <Typography variant="h2" style={{ fontWeight: "bolder", fontFamily: "Paws" }}>Our Impact</Typography>
            <Typography variant="body1">Stray Pals Philippines leads the way in the no-kill movement by developing national programs and initiatives that save the lives of stray animals by promoting adoptions, spaying/neutering, and raising awareness about the importance of responsible pet ownership. With a passionate and dedicated team, Stray Pals Philippines continues to make a positive impact on the lives of homeless pets, one adoption at a time.</Typography>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box sx={{ mt: 5 }}>
                        <img src="img/save.jpg" alt="Pets Saved" style={{ height: 250, width: 250, borderRadius: 500 }} />
                        <Typography variant="h3">{ CountUp({ targetNumber: 1200 }) }+</Typography>
                        <Typography variant="h6" style={{ fontFamily: "Barabara" }}>ANIMALS SAVED</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <Box sx={{ mt: 5 }}>
                        <img src="img/adopt.jpg" alt="Pets Adopt" style={{ height: 250, width: 250, borderRadius: 500 }} />
                        <Typography variant="h3">{ CountUp({ targetNumber: 1047 }) }</Typography>
                        <Typography variant="h6" style={{ fontFamily: "Barabara" }}>PETS ADOPTED</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box sx={{ mt: 5 }}>
                        <img src="img/Exams.jpg" alt="Exams Performed" style={{ height: 250, width: 250, borderRadius: 500 }} />
                        <Typography variant="h3">{ CountUp({ targetNumber: 2400 }) }+</Typography>
                        <Typography variant="h6" style={{ fontFamily: "Barabara" }}>EXAMS PERFORMED</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <Box sx={{ mt: 5 }}>
                        <img src="img/volunteers.jpg" alt="Volunteers" style={{ height: 250, width: 250, borderRadius: 500 }} />
                        <Typography variant="h3">{ CountUp({ targetNumber: 890 }) }</Typography>
                        <Typography variant="h6" style={{ fontFamily: "Barabara" }}>VOLUNTEERS</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
