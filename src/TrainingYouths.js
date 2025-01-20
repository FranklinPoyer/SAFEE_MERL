import React from 'react';
import { Container, Grid, Box, Stack, Typography, Button } from '@mui/material';
import Navbar from './Navbar';
import HomepageGraphs from './HomepageGraphs';
import Footer from './Footer';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

const TrainingYouths = () => {
  // Sample data that could come from a database
  const columnData = [
    { row2Text: 'Total Youths Participated in Training', row3Text: '258,940' },
    { row2Text: 'Total Enterprises Accessing Financial Services', row3Text: '70,827.38' },
    { row2Text: 'Total Loan Disbursement Value', row3Text: '300,000 Br.' },
    { row2Text: 'Number of loan app activations', row3Text: '300' },
    { row2Text: 'Number of USSD registrations', row3Text: '40' },
  ];

  return (
    <div>
      <Box sx={{ bgcolor: '#F5F4F2', minHeight: '100vh', pb: 0 }}>
        <Navbar />
        <Box
          sx={{
            backgroundImage: `url('/homepage_bckgd.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '430px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              width: '95%',
              mb: 4,
              pt: 15,
            }}
          >
            {/* Left pointing icon button */}
            <IconButton
              component={Link}
              to="/home"
              sx={{
                color: 'white',
                mr: 0,
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <Typography variant="h3" sx={{ color: 'white' }}>
              Training Youths (Intervention)
            </Typography>

            <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
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
                }}
              >
                Print
              </Button>
            </Stack>
          </Box>

          <Container maxWidth={false} sx={{ width: '100%', px: 0, mb: 2 }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={11}>
                <Box
                  sx={{
                    bgcolor: '#01256D',
                    borderRadius: 2,
                    border: '1px solid #0A358C',
                    height: '170px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'flex-start',
                      width: '95%',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', mr: 1 }}>
                      Summary
                    </Typography>
                    <Box
                      component="span"
                      sx={{
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    ></Box>
                  </Box>

                  {/* Row 2 - Five Columns with Dividers */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      width: '100%',
                    }}
                  >
                    {columnData.map((data, index) => (
                      <Box
                        key={index}
                        sx={{
                          textAlign: 'left',
                          px: 1,
                          borderRight: index < 4 ? '1px solid #0A5AC2' : 'none',
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'white' }}>
                          {data.row2Text}
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#add8e6' }}>
                          {data.row3Text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

{/* Second row of boxes outside the background container */}
<Container maxWidth={false} sx={{width:'95%', mt: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
          
          <Box
            sx={{ 
            p: 3, 
            bgcolor: '#C9EACF66', 
            borderRadius: 2,
            border: '1px solid #2F78864A',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
             }}>

            <SchoolOutlinedIcon sx={{ fontSize: 60, color: '#057A17' }} />
            <Typography 
                variant="h7" 
                sx={{ textAlign: 'center', color: 'black', fontWeight: 'normal' }}>
                Training Youths (Intervention)
            </Typography>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: 45, color: 'black' }} />
           </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box
            sx={{ 
            p: 3, 
            bgcolor: '#A3E1ED42', 
            borderRadius: 2,
            border: '1px solid #2F78864A',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
             }}>

            <TrendingUpOutlinedIcon sx={{ fontSize: 60, color: '#00738A' }} />
            <Typography 
                variant="h7" 
                sx={{ textAlign: 'center', color: 'black', fontWeight: 'normal' }}>
                Financial Access (Intermediate Outcome)
            </Typography>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: 45, color: 'black' }} />
           </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box
            sx={{ 
            p: 3, 
            bgcolor: '#F499CB42', 
            borderRadius: 2,
            border: '1px solid #2F78864A',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
             }}>

            <BadgeOutlinedIcon sx={{ fontSize: 60, color: '#980757' }} />
            <Typography 
                variant="h7" 
                sx={{ textAlign: 'center', color: 'black', fontWeight: 'normal' }}>
                Employment Outcomes (Outcome)
            </Typography>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: 45, color: 'black' }} />
           </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box
            sx={{ 
            p: 3, 
            bgcolor: '#FDDDAF42', 
            borderRadius: 2,
            border: '1px solid #2F78864A',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
             }}>

            <LayersOutlinedIcon sx={{ fontSize: 60, color: '#9A5900' }} />
            <Typography 
                variant="h7" 
                sx={{ textAlign: 'center', color: 'black', fontWeight: 'normal' }}>
                Impact on Access to Resources (Impact)
            </Typography>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: 45, color: 'black' }} />
           </Box>
          </Grid>
        </Grid>
      </Container>
    
<Container maxWidth={false} sx={{width:'95%', mt: 2 }}> 
    <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
            <Box 
                sx={{ 
                p: 1, 
                bgcolor: 'white',
                borderRadius: 2, 
                minHeight: '120px',
                border: '1px solid #2F78864A'
                }}
            >
                <Typography variant="body1" sx={{ color: 'black' }}> 
                Number of youths who participated in training opportunities (Number of MSMEs trained)
                </Typography>
                <Typography variant="h3" sx={{ color: 'black' }}> 
                1,250 
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={12} md={4}> 
            <Box 
                sx={{ 
                p: 1, 
                bgcolor: 'white', 
                borderRadius: 2, 
                minHeight: '120px',
                border: '1px solid #2F78864A' 
                }}
            >
                <Typography variant="body1" sx={{ color: 'black' }}> 
                Number of enterprises/groups accessing financial products/services (Number of unique SAFEE customers)
                </Typography>
                <Typography variant="h3" sx={{ color: 'black' }}> 
                1,250 
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={12} md={4}> 
            <Box 
                sx={{ 
                p: 1, 
                bgcolor: 'white', 
                borderRadius: 2, 
                minHeight: '120px',
                border: '1px solid #2F78864A' 
                }}
            >
                <Typography variant="body1" sx={{ color: 'black' }}> 
                Total value of financial products/services received (Loan disbursement value)
                </Typography>
                <Typography variant="h3" sx={{ color: 'black' }}> 
                1,250 
                </Typography>

            </Box>
            </Grid>
        </Grid>
        </Container>
        
      <Box sx={{ 
            width: '90%', 
            margin: '0 auto', // Centers the box horizontally
            backgroundColor: 'white',
            backgroundPosition: 'center',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: '16px', // Adjust the value for more/less rounding
            mt: 2, // Adjust as needed for spacing from the row above
            padding: 2, // Adds some padding inside the box
            }}>
        <HomepageGraphs />
      </Box>

     </Box>
     <Footer />
    </div>
  );
};


export default TrainingYouths;