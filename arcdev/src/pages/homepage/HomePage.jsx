import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Lottie from 'react-lottie';
import {animationData} from '../../animations/landinganimation/data'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';

import { theme } from '../../components/ui/Theme';
import { homepage } from './homepageUi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CallToAction from '../../components/callToAction/CallToAction';
import {Link} from 'react-router-dom';


const HomePage = () => {
  const matchesSM =  useMediaQuery(theme.breakpoints.down('sm'));
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Box sx={homepage}>
      <Grid container direction='column'rowSpacing={{xs:6, md: 8}}>
      {/* Hero Block */}
        <Grid item>
          <Grid container direction='row' justifyContent={'space-between'}
            alignItems='center' sx={homepage.main}
          >
            <Grid item xl={6} lg={6} md={6} sm={6}>
              <Typography align='center' variant='h2' sx={homepage.typo1}>
                Bringing Modern and Latest <br/> Technology to Oyo state
              </Typography>
              <Grid container justifyContent='center' sx={homepage.buttons}>
                <Grid item sx={homepage.estimate} component={Link} to='/estimate'>
                  <Button variant='contained'>
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item sx={homepage.learn} component={Link} to='/revolution'>
                  <Button variant='outlined' >
                    Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} >
              <Lottie options={defaultOptions} />
            </Grid>

          </Grid>
        </Grid>
        {/* Services Block */}
        <Grid item>
          <Grid container direction='row' sx={homepage.services}>
            <Grid item md={10} lg={8}  container >
              <Grid container direction='column' item lg={8} md={10} sm={9} 
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
                <Button variant='outlined' sx={homepage.servicesButton} component={Link} to='/customsoftware'>
                  Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                </Button>
              </Grid>

              <Grid item lg={4} md={2} sm={3} >
                <img src={customSoftwareIcon} alt="" className='customImage'/>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        {/* iOS/App Development */}
        <Grid item sx={{padding: {xs:'0.5rem'}}}>
          <Grid container direction='row' sx={homepage.services}>
            <Grid item lg={8} md={10} sm={12} container >
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
                <Button variant='outlined' sx={homepage.servicesButton} component={Link} to='/mobileapps'>
                  Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                </Button>
              </Grid>

              <Grid item lg={3} md={4} sm={3} >
                <img src={mobileAppIcon} alt="" className='customImage'/>
              </Grid>
            </Grid>

            <Grid item lg={4} md={2} sm={2} sx={homepage.emptyGrid}>

            </Grid>

          </Grid>
        </Grid>

        {/* Websites Block */}
        <Grid item>
          <Grid container direction='row' sx={homepage.services}>
            <Grid item lg={7} md={10} sm={12} container sx={homepage.website} >
              <Grid container direction='column' item lg={8} md={10} sm={9} 
                justifyContent='center' alignItems={'center'}
              >
                <Typography variant='h4'>Website Development</Typography>
                <Typography variant='subtitle1' gutterBottom >
                  Reach More. Discover More. Sell More
                </Typography>
                <Typography variant='subtitle1' align='center' sx={homepage.typos2}>
                  Optimized for Search Engines, Built for speed
                </Typography>
                <Button variant='outlined' sx={homepage.servicesButton} component={Link} to='/websites'>
                  Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                </Button>
              </Grid>

              <Grid item lg={4} md={2} sm={3}>
                <img src={websitesIcon} alt="" className='customImage'/>
              </Grid>
            </Grid>

            <Grid item lg={5} md={2} sm={2}>

            </Grid>

          </Grid>
        </Grid>
{/* Revolution Block */}
        <Grid item>
          <Grid container sx={homepage.revolutionBg} justifyContent='center' alignItems='center'>
            <Card sx={homepage.revolutionCard}>
              <CardContent>
                <Grid container direction='column' alignItems={'center'}
                  item 
                >
                  <Grid item>
                    <Typography variant='h3' gutterBottom>The Revolution</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1' sx={{textAlign:'center'}} gutterBottom>
                      Visionary Insights coupled with cutting-edge technology is a recipe
                      for revolution
                    </Typography>
                  </Grid>
                  <Button variant='outlined' className='cardButton' sx={homepage.servicesButton} component={Link} to='/revolution'>
                    Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Information Block */}
        <Grid item>
          <Grid container direction='row' sx={homepage.information}>
            <Grid container direction='column' item lg={3} md={4} sm={4} xs={12}>
              <Typography variant='h2' sx={{color: 'white', fontSize:{xs:'1.8rem', md:'2.5'}}}>About Us</Typography>
              <Typography variant='subtitle2' gutterBottom>Let's get personal</Typography>
              <Button variant='outlined' component={Link} to='/about'>
                Learn More <ArrowForwardIcon sx={{color:'white', ml:'0.5rem'}}/>
              </Button>
            </Grid>

            <Grid item lg={6} md={4} sm={4} xs={12} 
            sx={{display: {lg:'inline-block', sm:'inline-block', xs:''}, height: '5rem'}}
            >
            </Grid>

            <Grid item container direction='column' lg={3} md={4} sm={4} xs={12} >
              <Typography variant='h2' sx={{color: 'white', fontSize:{xs:'1.8rem', md:'2.5'}}}>
                Contact Us
              </Typography>
              <Typography variant='subtitle2' gutterBottom>Say hello!🖐</Typography>
              <Button variant='outlined' component={Link} to='/contact' >
                Learn More <ArrowForwardIcon sx={{color:'white', ml:'0.5rem'}}/>
              </Button>
            </Grid>

          </Grid>
        </Grid>
       {/*  */}
       <Grid item>
        <CallToAction/>
       </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage