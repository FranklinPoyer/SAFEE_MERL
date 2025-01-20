import React from 'react';
import { Container, Grid, Box, Stack, Typography, Button } from '@mui/material';
import Navbar from './Navbar';
import HomepageGraphs from './HomepageGraphs';
import Footer from './Footer';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

const EmploymentOutcomes = () => {
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
            }}>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '92.5%',
            mb: 10, 
            pt: 18,
          }}>
            
          <Typography variant="h3" sx={{color: 'white'}}> 
          Employment Outcomes (Outcome)
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
                textTransform: 'capitalize'
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
                textTransform: 'capitalize'
                }}
            >
                Print 
            </Button>
        </Stack>
        </div>
        </Box> 

        <Container maxWidth={false} sx={{width:'95%', px: 2, mb: 3}}>
          <Grid container spacing={3}> 
            <Grid item xs={10} md={3}>
            <Box 
                sx={{ 
                    p: 2, 
                    bgcolor: '#01256D', 
                    borderRadius: 2,
                    border: '1px solid #0A358C',
                    minHeight: '140px',
                    display: 'flex', // Enable flexbox for vertical alignment
                    flexDirection: 'column', 
                    justifyContent: 'space-between' // Space rows evenly
                }}
                >
                <Typography variant="body1" sx={{ color: 'white' }}> 
                Number of Youths Employed 
                </Typography>
                <Typography variant="h5" sx={{ color: '#add8e6' }}> 
                1,250 
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}> 
                Total number of youths in wage employment and self-employment due to SAFEE interventions.
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={12} md={3}>
            
            <Box 
                sx={{ 
                    p: 2, 
                    bgcolor: '#01256D', 
                    borderRadius: 2,
                    border: '1px solid #0A358C',
                    minHeight: '140px',
                    display: 'flex', // Enable flexbox for vertical alignment
                    flexDirection: 'column', 
                    justifyContent: 'space-between' // Space rows evenly
                }}
                >
                <Typography variant="body1" sx={{ color: 'white' }}> 
                Total Loans Disbursed 
                </Typography>
                <Typography variant="h5" sx={{ color: '#add8e6' }}> 
                808.2 
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}> 
                Total number of loans disbursed to SAFEE participants.
                </Typography>
            </Box>

            </Grid>
            <Grid item xs={12} md={3}>
 
            <Box 
                sx={{ 
                    p: 2, 
                    bgcolor: '#01256D', 
                    borderRadius: 2,
                    border: '1px solid #0A358C',
                    minHeight: '140px',
                    display: 'flex', // Enable flexbox for vertical alignment
                    flexDirection: 'column', 
                    justifyContent: 'space-between' // Space rows evenly
                }}
                >
                <Typography variant="body1" sx={{ color: 'white' }}> 
                Number of Enterprises Supported
                </Typography>
                <Typography variant="h5" sx={{ color: '#add8e6' }}> 
                208.2 
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}> 
                MSMEs supported by SAFEE through various resources.
                </Typography>
            </Box>

            </Grid>
            <Grid item xs={12} md={3}>
            
            <Box 
                sx={{ 
                    p: 2, 
                    bgcolor: '#01256D', 
                    borderRadius: 2,
                    border: '1px solid #0A358C',
                    minHeight: '140px',
                    display: 'flex',
                    flexDirection: 'column', 
                    justifyContent: 'space-between'
                }}
                >
                <Typography variant="body1" sx={{ color: 'white' }}> 
                Gender Breakdown of Participants
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}> 
                Male | Female
                </Typography>
                <Typography variant="h5" sx={{ color: '#add8e6' }}> 
                1,500 (60%) | 850 (40%)
                </Typography>
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


export default EmploymentOutcomes;