import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { abt } from './aboutusUi';
import history from '../../assets/history.svg';
import yearbook from '../../assets/yearbook.svg';
import puppy from '../../assets/puppy.svg'
import CallToAction from '../../components/callToAction/CallToAction';


const Aboutus = () => {
  return (
    <Box sx={abt}>
      <Grid container direction='column'>

        <Grid item container direction='column' sx={abt.aboutus}>
          <Typography variant='h2' >About Us</Typography>
          <Typography variant='h4' sx={abt.aboutus1} align='center'>
            Whether it be person to person, business to consumer, or an individual to their 
            interests, technology is meant to bring us closer to what we care about in the 
            best way possible. Arc Development will use that principle to provide fast, 
            modern, inexpensive, and aesthetic software to the Midwest and beyond 
          </Typography>
          <Grid item container direction='row' sx={abt.aboutus2}>
            <Grid item container direction='column' sm={6}>
              <Typography variant='h4' gutterBottom>History</Typography>
              <Typography variant ='body1' gutterBottom sx={abt.history}>
                We’re the new kid on the block.
              </Typography>
              <Grid item container direction='column'>
                <Typography variant='body1' paragraph>
                  Founded in 2019, we’re ready to get our hands on the world’s business problems. 
                </Typography>
                <Typography variant='body1' paragraph>
                  It all started with one question: Why aren’t all businesses using available 
                  technology? There are many different answers to that question: economic barriers, 
                  social barriers, educational barriers, and sometimes institutional barriers. 
                </Typography>
                <Typography variant='body1' paragraph>
                  We aim to be a powerful force in overcoming these obstacles. Recent developments in 
                  software engineering and computing power, compounded by the proliferation of smart 
                  phones, has opened up infinite worlds of possibility. Things that have always been 
                  done by hand can now be done digitally and automatically, and completely new 
                  methods of interaction are created daily. Taking full advantage of these 
                  advancements is the name of the game. 
                </Typography>
              </Grid>

            </Grid>
            <Grid item container sm={6} sx={abt.aboutus3}>
              <img src={history} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={abt.team}>
          <Box sx={abt.team1}>
            <Typography variant='h4'>Team</Typography>
            <Typography variant='body1' sx={{m: '1rem 0'}}>Okafor David, Founder</Typography>
            <Typography variant='body1'>2 years plus experience as a software developer</Typography>
            <img src="/images/dave1.jpg" alt=""/>
            <Typography variant='body1' paragraph>
              I am a self taught developer. Udemy has been very instrumental to my growth,
              basically because of the flexibility of the learning platform. It has not been
              doing a 7 to 5 job at thesame creating time to learning coding all through
              the night. Hardworking is what I have grown up to learn as a Nigerian.
              Therefore, it is in my blood.
            </Typography>
            <Typography variant='body1' paragraph>
              Sincerely speaking, I love programming. To me, without coding life is
              absolutely boring
            </Typography>
            <Typography variant='body1' paragraph>
              For now. I am open to React, frontend positions. If you have a job for me,
              do not forget to contact me on +2347069230276 or mail me at {' '}
              <a href="mailto:dayvyno@mail.com" className="">dayvyno@mail.com</a>
            </Typography>
          </Box>
          <Box sx={abt.team2}>
            <img src={yearbook} alt="" />
            <Typography variant='caption'>a page from my Sophomore yearbook</Typography>
          </Box>
          <Box sx={abt.team3}>
            <img src={puppy} alt="" />
            <Typography variant='caption'>my miniature dapple dachshund, Sterling</Typography>
          </Box>
        </Grid>

        <CallToAction/>

      </Grid>
    </Box>
  )
}

export default Aboutus