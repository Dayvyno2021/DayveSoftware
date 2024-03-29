import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { cs } from '../customSoftware/customSwUi';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import intAnimation from '../../animations/integrationAnimation/data.json';
import swiss from '../../assets/swissKnife.svg';
import access from '../../assets/extendAccess.svg';
import engagement from '../../assets/increaseEngagement.svg';
import CallToAction from '../../components/callToAction/CallToAction';
import { ios } from './iosAndroidUi';

const IosAndroidScreen = () => {

  const integrationOptions = {
    loop: true,
    autoplay: true, 
    animationData: intAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Box sx={ios}>
      <Grid container direction='column'>
        <Grid container item direction='row' sx={cs.main}>
          <Grid item md={0.5} xs={1} sx={{textAlign:'right'}}>
            <IconButton sx={cs.arrowLeft} component={Link} to='/customsoftware' >
              <img src={backArrow} alt ='' />
            </IconButton>
          </Grid>

          <Grid item container direction='column' alt='' md={7} xs={10} sx={cs.customHead}>
            <Grid item>
              <Typography variant='h2' sx={cs.custom} >iOS/Android App Development</Typography>
            </Grid>
            <Grid item >
              <Typography variant='body1' paragraph>
              Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography variant='body1' paragraph>
              Whether you want an app for your customers, employees, or yourself, we can
              build cross-platform native solutions for any part of your business process. This
              opens you up to a whole new world of possibilities by taking advantage of phone
              features like the camera, GPS, push notifications, and more.

              </Typography>
              <Typography variant='body1' paragraph>
                Convenience. Connection 
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={4} sx={{display: {md:'inline-block', sx:'none'}}}></Grid>

          <Grid item md={0.5} xs={1} >
            <IconButton sx={cs.arrowRight} component={Link} to='/websites'>
              <img src={forwardArrow} alt ='' />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item container direction='row' sx={ios.integration}>
          <Grid item container direction='column' sm={4} sx={ios.integration1}>
            <Typography variant='h2'>Integration</Typography>
            <Typography variant='body1'>
              Our technology enables an innate interconnection between web and mobile 
              applications, putting everything you need right in one convenient place.
            </Typography>
            <Typography variant='body1'>
              This allows you to extend your reach, reinvent interactions, and develop 
              a stronger relationship with your users than ever before.
            </Typography>
          </Grid>

          <Grid item sm={4} sx={ios.integration2}>
            <Lottie options={integrationOptions}  height={'80%'} width={'80%'}/>
          </Grid>

          <Grid item container direction='column' sm={4} sx={ios.integration3}>
            <Typography variant='h2'>Simultaneous Platform Support</Typography>
            <Typography variant='body1'>
              Our cutting-edge development process allows us to create apps for iPhone, 
              Android, and tablets — all at the same time. 
            </Typography>
            <Typography variant='body1'>
              This significantly reduces costs and creates a more unified brand 
              experience across all devices
            </Typography>
          </Grid>
        </Grid>

        <Grid item container direction='row' sx={ios.icons}>
          <Grid item container sx={ios.icons1} md={4} direction='column' alignItems='center'>
            <Typography variant='h4' gutterBottom>Extend Functionality</Typography>
            <img src={swiss} alt="" />
          </Grid>
          <Grid item container sx={ios.icons2} md={4} direction='column' alignItems='center'>
            <Typography variant='h4' gutterBottom>Extend Access</Typography>
            <img src={access} alt="" />
          </Grid>
          <Grid item container sx={ios.icons3} md={4} direction='column' alignItems='center'>
            <Typography variant='h4' gutterBottom>Increase Engagement</Typography>
            <img src={engagement} alt="" />
          </Grid>
        </Grid>

        <CallToAction/>
        
      </Grid>
    </Box>
  )
}

export default IosAndroidScreen