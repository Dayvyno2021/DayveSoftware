import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { cs } from '../customSoftware/customSwUi';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import React from 'react';
import analytics from '../../assets/analytics.svg';
import seo from '../../assets/seo.svg';
import outreach from '../../assets/outreach.svg';
import ecommerce from '../../assets/ecommerce.svg'
import CallToAction from '../../components/callToAction/CallToAction';
import { webs } from './websitesUi';

const WebsitesScreen = () => {
  return (
    <Box sx={webs}>
      <Grid item container direction='column'>

        <Grid container item direction='row' sx={cs.main}>
          <Grid item md={0.5} xs={1} sx={{textAlign:'right'}}>
            <IconButton sx={cs.arrowLeft} component={Link} to='/mobileapps' >
              <img src={backArrow} alt ='' />
            </IconButton>
          </Grid>

          <Grid item container direction='column' alt='' md={7} xs={10} sx={cs.customHead}>
            <Grid item>
              <Typography variant='h2' sx={cs.custom} >Website Development</Typography>
            </Grid>
            <Grid item >
              <Typography variant='body1' paragraph>
                Having a website is a necessity in today’s business world. They give you one 
                central, public location to let people know who you are, what you do, and why 
                you’re the best at it.
              </Typography>
              <Typography variant='body1' paragraph>
                From simply having your hours posted to having a full fledged online store, 
                making yourself as accessible as possible to users online drives growth and 
                enables you to reach new customers. 
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={4} sx={{display: {md:'inline-block', sx:'none'}}}></Grid>

          <Grid item md={0.5} xs={1} sx={{display: 'none'}} >
            <IconButton sx={cs.arrowRight} component={Link} to='/services'>
              <img src={forwardArrow} alt ='' />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item sm={12} sx={webs.analyticsContainer} >
          <Grid item container direction='row' sm={12} md={8} sx={webs.analytics}>
            <Grid item container direction='column' sm={5} sx={webs.analytics1}>
              <Typography variant='h4' gutterBottom>Analytics</Typography>
              <img src={analytics} alt="" />
            </Grid>
            <Grid item container direction='column' justifyContent='center' sm={7} sx={webs.analytics2}>
              <Typography variant='body1'>
                Knowledge is power, and data is 21st Century gold. Analyzing this data 
                can reveal hidden patterns and trends in your business, empowering you to 
                make smarter decisions with measurable effects.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} sx={webs.ecommerceContainer}>
          <Grid item container direction='row' sm={12} md={8} sx={webs.ecommerce}>
            <Grid item container direction='column' sm={5} sx={webs.ecommerce1}>
              <Typography variant='h4' gutterBottom>Analytics</Typography>
              <img src={ecommerce} alt="" />
            </Grid>
            <Grid item container direction='column' justifyContent='center' sm={7} sx={webs.analytics2}>
              <Typography variant='body1' paragraph>
                It’s no secret that people like to shop online.
              </Typography> 
              <Typography variant='body1' paragraph>
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for 
                your slice of that pie
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} sx={webs.outreachContainer}>
          <Grid item container direction='row' sm={12} md={8} sx={webs.ecommerce}>
            <Grid item container direction='column' sm={5} sx={webs.ecommerce1}>
              <Typography variant='h4' gutterBottom>Outreach</Typography>
              <img src={outreach} alt="" />
            </Grid>
            <Grid item container direction='column' justifyContent='center' sm={7} sx={webs.analytics2}>
              <Typography variant='body1' paragraph>
                Draw people in with a dazzling website. Showing off your products 
                online is a great way to help customers decide what’s right for them 
                before visiting in person.
              </Typography> 
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} sx={webs.seoContainer}>
          <Grid item container direction='row' sm={12} md={8} sx={webs.ecommerce}>
            <Grid item container direction='column' sm={5} sx={webs.ecommerce1}>
              <Typography variant='h4' gutterBottom>Search Engine Optimization</Typography>
              <img src={seo} alt="" />
            </Grid>
            <Grid item container direction='column' justifyContent='center' sm={7} sx={webs.analytics2}>
              <Typography variant='body1' paragraph>
                How often have you ever been to the second page of Google results?
              </Typography> 
              <Typography variant='body1' paragraph>
                If you’re like us, probably never.
              </Typography>
              <Typography variant='body1' paragraph>
                Customers don’t go there either, so we make sure your website is
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <CallToAction />

      </Grid>
    </Box>
  )
}


export default WebsitesScreen