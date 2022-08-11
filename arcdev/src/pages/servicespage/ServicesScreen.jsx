import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {theme} from '../../components/ui/Theme';
import { homepage } from '../homepage/homepageUi';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

const services = {
  mt: '2rem',
  '& .serviceImage': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  '& .learnMore': {
    [theme.breakpoints.down('sm')]:{
      mb: '2rem'
    }
  },
  '& .specialText': {
    fontFamily: 'Pacifico',
    color: 'orange'
  },
  title: {
    [theme.breakpoints.down('xl')]:{pl:'5rem'},
    [theme.breakpoints.down('md')]:{
      pl:0,
      textAlign: 'center'
    }
  }
}

const ServicesScreen = () => {

  const matchesSM =  useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx = {services}>
      <Grid container direction='column' >
        <Typography variant='h2' gutterBottom sx={services.title}>Services</Typography>
                {/* iOS/App Development */}
        <Grid item sx={{padding: {xs:'0.5rem'}}}>
          <Grid container direction='row' sx={homepage.services}>
            <Grid item lg={7} md={10} sm={12} container >
              <Grid container direction='column' item lg={9} md={8} sm={9} 
                justifyContent='center' alignItems={'center'}
              >
                <Typography variant='h4'>iOS/Android Development</Typography>
                <Typography variant='subtitle1' gutterBottom sx={homepage.typos1}>
                  Complete digital solutions. Extended Access. Increase Engagement.
                </Typography>
                <Typography variant='subtitle1' align='center' sx={homepage.typos2}>
                  Integrate Your web experience or create a standalone app
                  {matchesSM? '' : <br/>} with either mobile platform
                </Typography>
                <Button variant='outlined' className='learnMore' sx={homepage.servicesButton} component={Link} to='/mobileapps'>
                  Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                </Button>
              </Grid>

              <Grid item lg={3} md={4} sm={3} sx={{}} >
                <img src={mobileAppIcon} alt="" className='serviceImage'/>
              </Grid>
            </Grid>

            <Grid item lg={5} md={2} sm={2} sx={homepage.emptyGrid}>

            </Grid>

          </Grid>
        </Grid>

        {/* Services Block */}
        <Grid item>
          <Grid container direction='row' sx={homepage.services}>
            <Grid item lg={8} md={10} sm={12} container >
              <Grid container direction='column' item lg={8} md={9} sm={9} 
                justifyContent='center' alignItems={'center'}
              >
                <Typography variant='h4'>Custom Software Development</Typography>
                <Typography variant='subtitle1' gutterBottom >
                  Save Energy. Save Time. Save Money
                </Typography>
                <Typography variant='subtitle1' align='center' sx={homepage.typos2}>
                  Complete Digital solutions, from investigation to {' '} 
                  <span className='specialText' >celebration.</span>
                </Typography>
                <Button variant='outlined' className='learnMore' sx={homepage.servicesButton} component={Link} to='/customsoftware'>
                  Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                </Button>
              </Grid>

              <Grid item lg={4} md={3} sm={3} >
                <img src={customSoftwareIcon} alt="" className='customImage'/>
              </Grid>
            </Grid>

            <Grid item lg={4} md={2} sm={2} >

            </Grid>

          </Grid>
        </Grid>

        {/* Websites Block */}
        <Grid item sx={{mb:{xs:'1rem', sm:'2rem'}}}>
          <Grid container direction='row' sx={homepage.services}>
            <Grid item lg={7} md={10} sm={12} container >
              <Grid container direction='column' item lg={8} md={9} sm={9} 
                justifyContent='center' alignItems={'center'}
              >
                <Typography variant='h4'>Website Development</Typography>
                <Typography variant='subtitle1' gutterBottom >
                  Reach More. Discover More. Sell More
                </Typography>
                <Typography variant='subtitle1' align='center' sx={homepage.typos2}>
                  Optimized for Search Engines, Built for speed
                </Typography>
                <Button variant='outlined' sx={homepage.servicesButton} component={Link} to='/websites' className='learnMore'>
                  Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                </Button>
              </Grid>

              <Grid item lg={4} md={3} sm={3}>
                <img src={websitesIcon} alt="" className='serviceImage'/>
              </Grid>
            </Grid>

            <Grid item lg={5} md={2} sm={2} sx={homepage.emptyGrid}>

            </Grid>

          </Grid>
        </Grid>


      </Grid>
    </Box>
  )
}

export default ServicesScreen