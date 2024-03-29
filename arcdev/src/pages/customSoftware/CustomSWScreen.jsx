import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import lightbulb from '../../assets/bulb.svg';
import cash from '../../assets/cash.svg';
import stopwatch from '../../assets/stopwatch.svg';
import {docAnimation} from '../../animations/documentsAnimation/data';
import scaleAnimation from '../../animations/scaleAnimation/data.json';
import roots from '../../assets/root.svg';
import { cs } from './customSwUi';
import autoAnimation from '../../animations/automationAnimation/data.json';
import uxAnimation from '../../animations/uxAnimation/data';
import CallToAction from '../../components/callToAction/CallToAction';

const CustomSWScreen = () => {

  const docOptions = {
    loop: true,
    autoplay: true, 
    animationData: docAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const scaleOptions = {
    loop: true,
    autoplay: true, 
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const animationOptions = {
    loop: true,
    autoplay: true, 
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const uxOptions = {
    loop: true,
    autoplay: true, 
    animationData: autoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Box sx={cs}>
      <Grid container direction='column'>
        <Grid container item direction='row' sx={cs.main}>
          <Grid item md={0.5} xs={1} sx={{textAlign:'right'}}>
            <IconButton sx={cs.arrowLeft} component={Link} to='/services' >
              <img src={backArrow} alt ='' />
            </IconButton>
          </Grid>

          <Grid item container direction='column' alt='' md={7} xs={10} sx={cs.customHead}>
            <Grid item>
              <Typography variant='h2' sx={cs.custom} >Custom Software Development</Typography>
            </Grid>
            <Grid item >
              <Typography variant='body1' paragraph>
                Whether we’re replacing old software or inventing new solutions, Arc Developmentis here to help your business tackle technology. 
              </Typography>
              <Typography variant='body1' paragraph>Using regular commercial software leaves you with a lot of stuff you don’t need,
                without some of the stuff you do need, and ultimately controls the way you work.
                Without using any software at all you risk falling behind competitors and missing
                out on huge savings from increased efficiency.
              </Typography>
              <Typography variant='body1' paragraph>
                Our custom solutions are designed from the ground up with your needs, wants,
                and goals at the core. This collaborative process produces finely tuned software
                that is much more effective at improving your workflow and reducing costs than
                generalized options.
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={4} sx={{display: {md:'inline-block', sx:'none'}}}></Grid>

          <Grid item md={0.5} xs={1} >
            <IconButton sx={cs.arrowRight} component={Link} to='/mobileapps'>
              <img src={forwardArrow} alt ='' />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container direction='row' sx={cs.savePanel}>
          <Grid item container direction='column' alignContent='center' sm={4} alignItems='center' >
            <Grid item >
              <Typography variant='h4'>Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt="" />
            </Grid>
          </Grid>
          
          <Grid item container direction='column' sm={4} alignContent='center' alignItems='center'>
            <Grid item>
              <Typography variant='h4'>Save Time</Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt="" />
            </Grid>
          </Grid>
          
          <Grid item container direction='column' sm={4} alignContent='center' alignItems='center' >
            <Grid item >
              <Typography variant='h4'>Save Money</Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction='row' sx={cs.digital}>
          <Grid item container md={5} sm={12} alignItems='center' sx={cs.scale}>
            <Grid item container direction ='column' md={6}>
              <Grid item>
                <Typography variant='h4' sx={cs.scaleHead}>Digital Documents & Data</Typography>
              </Grid>
              <Grid item sx={cs.pContainer}>
                <Typography variant='body1' paragraph>
                  Reduce Errors. Reduce Waste.Reduce Costs
                </Typography>
                <Typography variant='body1' paragraph>
                  Billions are spent annually on the
                  purchasing, printing, and distribution
                  of paper. On top of the massive
                  environmental impact this has, it
                  causes harm to your bottom line as
                  well
                </Typography>
                <Typography variant='body1' paragraph>
                  By utilizing digital forms and
                  documents you can remove these
                  obsolete expenses, accelerate your
                  communication, and help the Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6} >
              <Lottie options={docOptions} className='csLottie' height={200} width={200} />
            </Grid>
          </Grid>
          <Grid item md={2} sx={{display: {sm:'none', md:'inline-block'}}}></Grid>
          <Grid item container md={5} sm={12} alignItems='flex-start' sx={cs.scale}>
            <Grid item md={6}>
              <Lottie options={scaleOptions} className='csLottie' height={200} width={200} />
            </Grid>
            <Grid item container direction ='column' md={6} textAlign='right' sx={{order:{xs:-1, md: 1}}}>
              <Grid item>
                <Typography variant='h4' sx={cs.scaleHead}>Scale</Typography>
              </Grid>
              <Grid item sx={cs.pContainer}>
                <Typography variant='body1' paragraph sx={cs.pContainer} >
                  Whether you’re a large brand, just getting started,
                  or taking off right now, our application
                  architecture ensures pain-free growth and reliability
                </Typography>

              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={cs.roots}>
          <Grid container justifyContent='center'>
            <Grid item xs={10} sm={8} md={6}>
              <img src={roots} alt="" className="" />
              <Typography variant='h4' gutterBottom textAlign='center'>Root-Cause Analysis</Typography>
              <Typography variant='body1' paragraph textAlign='center'>
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant='body1' paragraph textAlign='center' >
                We can help you thoroughly examine all areas of your business to 
                develop a holistic plan for the most effective implementation of 
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='row' sx={cs.animate}>
          <Grid item container md={5} sm={12} alignItems='flex-start' sx={cs.animat}>
            <Grid item container direction ='column' md={6}>
              <Grid item >
                <Typography variant='h4' sx={cs.animateHead}>Automation</Typography>
              </Grid>
              <Grid item sx={cs.pContainer} >
                <Typography variant='body1' paragraph>
                  Why waste time when you don’t have to?
                </Typography>
                <Typography variant='body1' paragraph>
                  We can help you identify processes with time or event based actions 
                  which can now easily be automated.

                </Typography>
                <Typography variant='body1' paragraph>
                  Increasing efficiency increases profits, leaving you more time to 
                  focus on your business, not busywork
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6} alignSelf='center' >
              <Lottie options={uxOptions} className='csLottie' height={200} width={200} />
            </Grid>
          </Grid>
          <Grid item md={2} sx={{display: {sm:'none', md:'inline-block'}}} ></Grid>
          <Grid item container md={5} sm={12} sx={cs.animat} alignItems='center'>
            <Grid item md={6}>
              <Lottie options={animationOptions} className='csLottie' height={200} width={200} />
            </Grid>
            <Grid item container direction ='column' md={6} textAlign='right' sx={{order:{xs:-1, md: 1}}}>
              <Grid item>
                <Typography variant='h4' sx={cs.scaleHead}>User Experience Design</Typography>
              </Grid>
              <Grid item sx={cs.pContainer}>
                <Typography variant='body1' paragraph >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography variant='body1' paragraph >
                  So why are so many pieces of software complicated, confusing, and frustrating?
                </Typography>
                <Typography variant='body1' paragraph >
                  By prioritizing users and the real ways they interact with 
                  technology we’re able to develop unique, personable experiences that 
                  solve problems rather than create new ones.
                </Typography>

              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <CallToAction/>

      </Grid>
    </Box>
  )
}

export default CustomSWScreen