import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { homepage } from '../../pages/homepage/homepageUi';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from '../ui/Theme';
import { cta } from './callToActionUi';
import {Link} from 'react-router-dom';


const CallToAction = () => {
  
  return (
    <Grid container sx={{position:'relative'}}>
      <Grid item sx = {cta} container direction='column'>
        <Grid item sx={cta.action1} >
          <Typography variant='h2' sx={{fontSize:{xs:'1.8rem', md:'2.5rem'}}}>
            Simple Software. <br/> Revolutionary Results
          </Typography>
          <Typography variant='subtitle2' sx={{fontSize:{xs:'1.1rem', md:'1.25rem'}}}>
            Take advantage of the 21st Century
          </Typography>
        </Grid>
        <Grid item sx={cta.action2} >
          <Button variant='outlined' className='cardButton' sx={homepage.servicesButton} component={Link} to='/revolution'>
            Learn More <ArrowForwardIcon sx={{color:theme.palette.primary.dark, ml:'1rem'}}/>
          </Button>
        </Grid>
        <Grid item >
          <Button variant='contained' sx={cta.estimate} component={Link} to='/estimate'>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CallToAction