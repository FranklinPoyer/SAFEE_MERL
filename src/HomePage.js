import React, {useEffect, useState} from 'react';
import { Container, Grid, Box, Stack, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HomepageGraphs from './HomepageGraphs';
import Footer from './Footer';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { Print, FileCopy } from '@mui/icons-material';

// Array for the second row of boxes
const links = [
  {
    to: "/training",
    bgcolor: "#C9EACF66",
    icon: <SchoolOutlinedIcon sx={{ fontSize: 60, color: "#057A17" }} />,
    text: "Training Youths (Intervention)",
  },
  {
    to: "/financial",
    bgcolor: "#A3E1ED42",
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 60, color: "#00738A" }} />,
    text: "Financial Access (Intermediate Outcome)",
  },
  {
    to: "/employment",
    bgcolor: "#F499CB42",
    icon: <BadgeOutlinedIcon sx={{ fontSize: 60, color: "#980757" }} />,
    text: "Employment Outcomes (Outcome)",
  },
  {
    to: "/resources",
    bgcolor: "#FDDDAF42",
    icon: <LayersOutlinedIcon sx={{ fontSize: 60, color: "#9A5900" }} />,
    text: "Impact on Access to Resources (Impact)",
  },
];

const HomePage = () => {
  const [programInsights, setProgramInsights] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProgramInsights(data.programInsights);
        setStats(data.additionalStats); // Ensure 'additionalStats' is set
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Box sx={{ bgcolor: '#F5F4F2', minHeight: '100vh', pb: 4 }}>
        <Navbar />
        <Box
          sx={{
            backgroundImage: `url('/homepage_bckgd.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '92.5%',
              mb: 10,
              pt: 18,
            }}
          >
            <Typography variant="h3" sx={{ color: 'white' }}>
              SAFEE Program Insights & Outcomes
            </Typography>
            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '20px',
                    borderColor: '#979797',
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize: '0.8rem',
                    padding: '8px 12px',
                    textTransform: 'capitalize',
                  }}
                  startIcon={<FileCopy sx={{ color: 'black', fontSize: '1rem' }} />}
                >
                  Generate Report
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '20px',
                    borderColor: '#979797',
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize: '0.8rem',
                    padding: '8px 12px',
                    textTransform: 'capitalize',
                    marginLeft: '10px',
                  }}
                  startIcon={<Print sx={{ color: 'black', fontSize: '1rem' }} />}
                >
                  Print
                </Button>
              </Stack>
            </div>
          </Box>

          <Container maxWidth={false} sx={{ width: '95%', px: 2, mb: 3 }}>
            <Grid container spacing={3}>
              {programInsights.map((item, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: '#01256D',
                      borderRadius: 2,
                      border: '1px solid #0A358C',
                      minHeight: '140px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#add8e6' }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

{/* First Row of Links */}
<Container maxWidth={false} sx={{ width: "95%", mt: 2 }}>
        <Grid container spacing={2}>
          {links.map((link, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Link
                to={link.to}
                style={{
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    bgcolor: link.bgcolor,
                    borderRadius: 2,
                    border: "1px solid #2F78864A",
                    minHeight: "160px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&:hover": {
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  {link.icon}
                  <Typography
                    variant="h7"
                    sx={{
                      textAlign: "center",
                      color: "black",
                      fontWeight: "normal",
                    }}
                  >
                    {link.text}
                  </Typography>
                  <ArrowCircleRightOutlinedIcon
                    sx={{ fontSize: 45, color: "black" }}
                  />
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Second Row of Stats */}
      <Container maxWidth={false} sx={{ width: "95%", mt: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  p: 1,
                  bgcolor: "white",
                  borderRadius: 2,
                  minHeight: "120px",
                  border: "1px solid #2F78864A",
                }}
              >
                <Typography variant="body1" sx={{ color: "black" }}>
                  {stat.title}
                </Typography>
                <Typography variant="h3" sx={{ color: "black" }}>
                  {stat.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

{/*GRAPHS AND CHARTS SECTION*/}
      <Box sx={{ 
            width: '90%', 
            margin: '0 auto',
            backgroundColor: 'white',
            backgroundPosition: 'center',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: '16px', 
            mt: 2,
            padding: 2,
            }}>

        <HomepageGraphs />
      </Box>

      <Box sx={{ 
            width: '90%', 
            margin: '0 auto',
            backgroundColor: 'white',
            backgroundPosition: 'center',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: '16px',
            mt: 2,
            padding: 2,
            }}>
        <HomepageGraphs />
      </Box>

      <Box sx={{ 
            width: '90%', 
            margin: '0 auto',
            backgroundColor: 'white',
            backgroundPosition: 'center',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: '16px',
            mt: 1,
            padding: 2,
            }}>
        <HomepageGraphs />
      </Box>
     </Box>
     <Footer />
    </div>
  );
};


export default HomePage;